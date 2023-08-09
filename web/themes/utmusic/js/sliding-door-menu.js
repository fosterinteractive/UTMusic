const resetImageState = (allItemsDoor, itemWidth) => {
  //set default state 
  for (let i = 0; i < allItemsDoor.length; i++) {
    allItemsDoor[i].setAttribute('style', `clip-path: inset(0px ${itemWidth*(allItemsDoor.length - 1 - i)}px 0px ${itemWidth*i}px);`);
  }
}

const resetState = (link) => {
  let highlightedItem = link.closest('.m-sliding-door-menu-wrapper').querySelector('.highlighted-slide');
  if (highlightedItem) {
    highlightedItem.classList.remove('highlighted-slide');
  }
}

const setHoverState = (allItemsDoor, relatedItem, itemWidth, link) => {
  let relatedItemId = relatedItem.getAttribute('id');
  
  //set clip-path for each item using Id of current link
  for (let i = 0; i < allItemsDoor.length; i++) {
    let currentItemId = allItemsDoor[i].getAttribute('id');

    if ((i == 0)&&(currentItemId == relatedItemId)) {
      allItemsDoor[i].setAttribute('style', `clip-path: inset(0px ${itemWidth*(allItemsDoor.length - 1 - i) - 100}px 0px ${itemWidth*i}px);`);
    } else if ((i == (allItemsDoor.length - 1)) && (currentItemId == relatedItemId))  {
      allItemsDoor[i].setAttribute('style', `clip-path: inset(0px ${itemWidth*(allItemsDoor.length - 1 - i)}px 0px ${itemWidth*i - 100}px);`);
    } else if (currentItemId == relatedItemId) {
      allItemsDoor[i].setAttribute('style', `clip-path: inset(0px ${itemWidth*(allItemsDoor.length - 1 - i) - 50}px 0px ${itemWidth*i - 50}px);`);
    }
  }
  
  let highlightedItem = link.closest('.m-sliding-door-menu-wrapper').querySelector('.highlighted-slide');
  if (highlightedItem) {
    highlightedItem.classList.remove('highlighted-slide');
  }
  relatedItem.classList.add('highlighted-slide');
}

const linkHoverState = (link, allItemsDoor) => {
  let previousLink = link.closest('.m-sliding-item__link').previousElementSibling;
  let nextLink = link.closest('.m-sliding-item__link').nextElementSibling;

  link.closest('.m-sliding-item__link').setAttribute('style', `flex-basis: calc(${100/allItemsDoor.length}% + 100px)`);

  if (previousLink) {
    previousLink.setAttribute('style', `flex-basis: calc(${100/allItemsDoor.length}% - 50px)`);
  }

  if (nextLink) {
    nextLink.setAttribute('style', `flex-basis: calc(${100/allItemsDoor.length}% - 50px)`);
  }
}

const linkResetState = (slideLinks, allItemsDoor) => {
  slideLinks.forEach(link => {
    link.closest('.m-sliding-item__link').setAttribute('style', `flex-basis: ${100/allItemsDoor.length}%;`);
  });
}

const mainFunctionality = (slidingDoorWrapper) => {
  if (window.innerWidth >= 768) {
    let wrapperWidth = slidingDoorWrapper.offsetWidth;
    // ratio for image x:y = 117:52
    slidingDoorWrapper.style.height = (wrapperWidth * 52 / 117) + 'px';

    let allItemsDoor = slidingDoorWrapper.querySelectorAll('.m-sliding-item');

    let itemWidth = wrapperWidth / allItemsDoor.length;
    resetImageState(allItemsDoor, itemWidth);

    let slideLinks = slidingDoorWrapper.querySelectorAll('.m-sliding-door-menu-desktop-links .m-sliding-item__link a');

    slideLinks.forEach(link => {
      link.closest('.m-sliding-item__link').setAttribute('style', `flex-basis: ${100/allItemsDoor.length}%;`);

      // Get Id of current link and find related item by id
      const linkId = link.getAttribute('id').replace('link-','');
      let relatedItem = link.closest('.m-sliding-door-menu-wrapper').querySelector(`#${linkId}`);

      link.addEventListener('mouseenter', () => {
        setHoverState(allItemsDoor, relatedItem, itemWidth, link);
        linkHoverState(link, allItemsDoor );
      });

      link.addEventListener('mouseleave', () => {
        resetImageState(allItemsDoor, itemWidth);
        resetState(link);
        linkResetState(slideLinks, allItemsDoor);
      });

      link.addEventListener('focus', () => {
        setHoverState(allItemsDoor, relatedItem, itemWidth, link);
        linkHoverState(link, allItemsDoor);
      });

      link.addEventListener('blur', () => {
        resetImageState(allItemsDoor, itemWidth);
        resetState(link);
        linkResetState(slideLinks, allItemsDoor);
      });
    });
  }
}

Drupal.behaviors.slidingDoorDrupal = {
  attach(context) {

    let slidingDoorWrapper = context.querySelector('.m-sliding-door-menu-wrapper');
    if (!slidingDoorWrapper) {
      return;
    }

    mainFunctionality(slidingDoorWrapper);

    window.addEventListener('resize', ()=> {
      let slidingDoorWrapper = context.querySelector('.m-sliding-door-menu-wrapper');
      let allItemsDoor = slidingDoorWrapper.querySelectorAll('.m-sliding-item');


      // if mobile or tablet - we should remove all styles which were applied from desktop
      if (window.innerWidth < 768) {
        //we don't restrict the height for container
        slidingDoorWrapper.style.height = 'auto';

        let slideLinks = slidingDoorWrapper.querySelectorAll('.m-sliding-door-menu-desktop-links .m-sliding-item__link a');


        slideLinks.forEach(link => {
          link.closest('.m-sliding-item__link').setAttribute('style', `flex-basis: unset;`);
    
          // Get Id of current link and find related item by id
          const linkId = link.getAttribute('id').replace('link-','');
          let relatedItem = link.closest('.m-sliding-door-menu-wrapper').querySelector(`#${linkId}`);
          
          relatedItem.classList.remove('highlighted-slide');

          // unset clip-path for each item
          for (let i = 0; i < allItemsDoor.length; i++) {
            allItemsDoor[i].setAttribute('style', `clip-path: unset`);
          }
        });

      } else if (window.innerWidth >= 768) {

        //Calculate the width of container with sliding doors
        let wrapperWidth = slidingDoorWrapper.offsetWidth;
        let itemWidth = wrapperWidth / allItemsDoor.length;

        // we should recalculate the height accordinly to ratio
        slidingDoorWrapper.style.height = (wrapperWidth * 52 / 117) + 'px';

        resetImageState(allItemsDoor, itemWidth);
      }

      mainFunctionality(slidingDoorWrapper);

    });
  },
};