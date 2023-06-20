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

Drupal.behaviors.listingEventsCarousel = {
  attach(context) {
    // Find carousel container with controls buttons and items
    const carouselContainer = document.querySelector('.o-listing--events-carousel__items');
    if (!carouselContainer) {
      return;
    }
    const allItems = carouselContainer.querySelectorAll('.m-listing-item--events-carousel');
    

    const nextButton = context.querySelector('.o-listing--events-carousel__items-next-btn');
    const prevButton = context.querySelector('.o-listing--events-carousel__items-prev-btn');

    //On loading page we hide previous button
    prevButton.style.visibility = 'hidden';

    // Create new region (if it doesn't not exist for screenreaders)
    const liveregionExist = context.querySelector('.liveregion');
    if (!liveregionExist) {
      var liveregion = document.createElement('div');
      liveregion.setAttribute('aria-live', 'polite');
      liveregion.setAttribute('aria-atomic', 'true');
      liveregion.setAttribute('class', 'liveregion u-visually--hidden visually-hidden');
      carouselContainer.closest('.o-listing--events-carousel').appendChild(liveregion);
    } 

    nextButton.addEventListener('click', (e)=> {
      e.preventDefault();
      const carousel = e.target.closest('.o-listing--events-carousel').querySelector('.o-listing--events-carousel__items');
      const itemWidth = carousel.firstElementChild.getBoundingClientRect().width;
      // this line scrolls the items
      carousel.scrollLeft += itemWidth;
      //visibility previous button
      prevButton.style.visibility = 'visible';

      let currentItem = currentIndex(carouselContainer, itemWidth) + 1;
      // Message for screen-reader in the visually-hidden region
      e.target.closest('.o-listing--events-carousel').querySelector('.liveregion').innerText = ('Item ' + currentItem + ' of ' + allItems.length);

      const isEndOfScroll = carousel.scrollWidth - carousel.scrollLeft === carousel.clientWidth;
      nextButton.style.visibility = isEndOfScroll ? 'hidden' : 'visible';
      if (nextButton.style.visibility == 'hidden') {
        // prevButton.firstElementChild.focus();
      }
    });

    prevButton.addEventListener('click', (e)=> {
      e.preventDefault();

      const carousel = e.target.closest('.o-listing--events-carousel').querySelector('.o-listing--events-carousel__items');
      const itemWidth = carousel.firstElementChild.getBoundingClientRect().width;
      // this line scrolls the items
      carousel.scrollLeft -= itemWidth;
      //visibility next button
      nextButton.style.visibility = 'visible';

      let currentItem = currentIndex(carouselContainer, itemWidth) + 1;
      // Message for screen-reader in the visually-hidden region
      e.target.closest('.o-listing--events-carousel').querySelector('.liveregion').innerText = ('Item ' + currentItem + ' of ' + allItems.length);

      const isStartOfScroll = carousel.scrollLeft === 0;
      prevButton.style.visibility = isStartOfScroll ? 'hidden' : 'visible';
     
      if (prevButton.style.visibility == 'hidden') {
        // nextButton.firstElementChild.focus();
      }
    });

    carouselContainer.addEventListener('scroll', (e)=> {
      const carousel = e.target.closest('.o-listing--events-carousel').querySelector('.o-listing--events-carousel__items');
      const itemWidth = carousel.firstElementChild.getBoundingClientRect().width;

      let currentItem = currentIndex(carouselContainer, itemWidth) + 1;
      // Message for screen-reader in the visually-hidden region
      e.target.closest('.o-listing--events-carousel').querySelector('.liveregion').innerText = ('Item ' + currentItem + ' of ' + allItems.length);
      
      const isEndOfScroll = carouselContainer.scrollWidth - carouselContainer.scrollLeft === carouselContainer.clientWidth;
      nextButton.style.visibility = isEndOfScroll ? 'hidden' : 'visible';
      if (nextButton.style.visibility == 'hidden') {
        // prevButton.firstElementChild.focus();
      }

      const isStartOfScroll = carouselContainer.scrollLeft === 0;
      prevButton.style.visibility = isStartOfScroll ? 'hidden' : 'visible';
      if (prevButton.style.visibility == 'hidden') {
        // nextButton.firstElementChild.focus();
      }
    });

  },
};
