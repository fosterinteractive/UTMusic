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

    let firstImageHeight = context.querySelector('.m-listing-item--people .m-listing-item--people__img img').height;
    let placeholdersArray = context.querySelectorAll('.m-listing-item--people .m-listing-item--people__img-illustration');

    placeholdersArray.forEach( placeholder => {
      placeholder.style.height = firstImageHeight ? firstImageHeight + "px": '300px';
    });

    const allItems = carouselContainer.querySelectorAll('.m-listing-item--people-carousel');
    

    const nextButton = context.querySelector('.o-listing--people-carousel__items-next-btn');
    const prevButton = context.querySelector('.o-listing--people-carousel__items-prev-btn');

    //On loading page we hide previous button
    prevButton.style.visibility = 'hidden';

    // Create new region (if it doesn't not exist for screenreaders)
    const liveregionExist = carouselContainer.closest('.o-listing--people-carousel').querySelector('.liveregion');

    if (!liveregionExist) {
      var liveregion = document.createElement('div');
      liveregion.setAttribute('aria-live', 'polite');
      liveregion.setAttribute('aria-atomic', 'true');
      liveregion.setAttribute('class', 'liveregion u-visually--hidden visually-hidden');
      carouselContainer.closest('.o-listing--people-carousel').appendChild(liveregion);
    } 

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

  },
};
