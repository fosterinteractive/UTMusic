function currentIndex(carouselContainer, itemWidth) {
  let currentIndex;
  if (window.innerWidth < 400) {
    currentIndex = Math.round(carouselContainer.scrollLeft / itemWidth);
  } else {
    if (carouselContainer.scrollLeft === 0) {
      currentIndex = Math.round((carouselContainer.scrollLeft + itemWidth / 3 ) / itemWidth);
    } else {
      currentIndex = Math.round((carouselContainer.scrollLeft + itemWidth / 2 ) / itemWidth);
    }
  }

  return currentIndex;
}

const hideControlButtons = (carouselContainer, nextButton, prevButton) => {
  // check how many items and if total sum of their width is less than viewport - then we hide control buttons and scrollbar
  let total_items = carouselContainer.querySelectorAll('.o-listing--people-carousel__item');
  let total_width = 0;
  for (let i = 0; i < total_items.length; i++) {

    total_width += total_items[i].clientWidth;
  }

  total_width = total_width + 30 * (total_items.length - 1);

  if (carouselContainer.clientWidth > total_width) {

    if (prevButton) {
      //On loading page we hide previous button
      prevButton.style.visibility = 'hidden';
    }

    if (nextButton) {
      //On loading page we hide previous button
      nextButton.style.visibility = 'hidden';
    }

    carouselContainer.style.overflowX = 'unset';
    carouselContainer.closest('.o-listing--people-carousel').style.paddingTop = '0';
  } 
  else {

    if (prevButton) {
      //On loading page we show previous button
        const carousel = prevButton.closest('.o-listing--people-carousel').querySelector('.o-listing--people-carousel__items');

        const itemWidth = carousel.firstElementChild.getBoundingClientRect().width;
        // this line scrolls the items
        carousel.scrollLeft -= itemWidth;
  
        const isStartOfScroll = carousel.scrollLeft === 0;
        prevButton.style.visibility = isStartOfScroll ? 'hidden' : 'visible';
    }

    if (nextButton) {
      //On loading page we show next button
      const carousel = nextButton.closest('.o-listing--people-carousel').querySelector('.o-listing--people-carousel__items');
      const itemWidth = carousel.firstElementChild.getBoundingClientRect().width;
      // this line scrolls the items
      carousel.scrollLeft += itemWidth;
      const isEndOfScroll = carousel.scrollWidth - carousel.scrollLeft === carousel.clientWidth;

      nextButton.style.visibility = isEndOfScroll ? 'hidden' : 'visible';
    }

    carouselContainer.style.overflowX = 'scroll';
    carouselContainer.closest('.o-listing--people-carousel').style.paddingTop = '70px';
  }
}

Drupal.behaviors.listingPeopleCarousel = {
  attach(context) {
    // Find carousel container with controls buttons and items
    const carouselContainer = document.querySelector('.o-listing--people-carousel__items');
    if (!carouselContainer) {
      return;
    }

    // Find all listing items
    const listingItems = context.querySelectorAll('.m-listing-item--people');

    if (!listingItems.length) {
      return;
    }

    let firstImageHeight = context.querySelector('.m-listing-item--people .m-listing-item--people__img img')?.height;
    let placeholdersArray = context.querySelectorAll('.m-listing-item--people .m-listing-item--people__img-illustration');

    placeholdersArray.forEach( placeholder => {
      placeholder.style.height = firstImageHeight ? firstImageHeight + "px" : '300px';
    });

    const allItems = carouselContainer.querySelectorAll('.m-listing-item--people-carousel');
    
    // Create new region (if it doesn't not exist for screenreaders)
    const liveregionExist = carouselContainer.closest('.o-listing--people-carousel').querySelector('.liveregion');

    if (!liveregionExist) {
      var liveregion = document.createElement('div');
      liveregion.setAttribute('aria-live', 'polite');
      liveregion.setAttribute('aria-atomic', 'true');
      liveregion.setAttribute('class', 'liveregion u-visually--hidden visually-hidden');
      carouselContainer.closest('.o-listing--people-carousel').appendChild(liveregion);
    } 

    let nextButton = context.querySelector('.o-listing--people-carousel__items-next-btn');
    
    if (nextButton) {
      nextButton.addEventListener('click', (e)=> {
        e.preventDefault();
        const carousel = e.target.closest('.o-listing--people-carousel').querySelector('.o-listing--people-carousel__items');
        const itemWidth = carousel.firstElementChild.getBoundingClientRect().width;
        // this line scrolls the items
        carousel.scrollLeft += itemWidth;
        //visibility previous button
        prevButton.style.visibility = 'visible';
  
        let currentItem = currentIndex(carouselContainer, itemWidth) + 1;
        // Message for screen-reader in the visually-hidden region
        e.target.closest('.o-listing--people-carousel').querySelector('.liveregion').innerText = ('Item ' + currentItem + ' of ' + allItems.length);
  
        const isEndOfScroll = carousel.scrollWidth - carousel.scrollLeft === carousel.clientWidth;
        nextButton.style.visibility = isEndOfScroll ? 'hidden' : 'visible';
      });
    }

    let prevButton = context.querySelector('.o-listing--people-carousel__items-prev-btn');

    if (prevButton) {
      //On loading page we hide previous button
      prevButton.style.visibility = 'hidden';
    
      prevButton.addEventListener('click', (e)=> {
        e.preventDefault();
  
        const carousel = e.target.closest('.o-listing--people-carousel').querySelector('.o-listing--people-carousel__items');
        const itemWidth = carousel.firstElementChild.getBoundingClientRect().width;
        // this line scrolls the items
        carousel.scrollLeft -= itemWidth;
        //visibility next button
        nextButton.style.visibility = 'visible';
  
        let currentItem = currentIndex(carouselContainer, itemWidth) + 1;
        // Message for screen-reader in the visually-hidden region
        e.target.closest('.o-listing--people-carousel').querySelector('.liveregion').innerText = ('Item ' + currentItem + ' of ' + allItems.length);
  
        const isStartOfScroll = carousel.scrollLeft === 0;
        prevButton.style.visibility = isStartOfScroll ? 'hidden' : 'visible';
      });
    }

    carouselContainer.addEventListener('scroll', (e)=> {
      const carousel = e.target.closest('.o-listing--people-carousel').querySelector('.o-listing--people-carousel__items');
      const itemWidth = carousel.firstElementChild.getBoundingClientRect().width;

      let currentItem = currentIndex(carouselContainer, itemWidth) + 1;
      // Message for screen-reader in the visually-hidden region
      e.target.closest('.o-listing--people-carousel').querySelector('.liveregion').innerText = ('Item ' + currentItem + ' of ' + allItems.length);
      
      const isEndOfScroll = carouselContainer.scrollWidth - carouselContainer.scrollLeft === carouselContainer.clientWidth;
      nextButton.style.visibility = isEndOfScroll ? 'hidden' : 'visible';

      const isStartOfScroll = carouselContainer.scrollLeft === 0;
      prevButton.style.visibility = isStartOfScroll ? 'hidden' : 'visible';
    });

    hideControlButtons(carouselContainer, nextButton, prevButton);

     

    window.addEventListener('resize', () => {
      hideControlButtons(carouselContainer, nextButton, prevButton);
    });
  },
};
