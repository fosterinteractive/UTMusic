(function ($) {
  'use strict';

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

  Drupal.behaviors.featuredMedia = {
    attach(context) {
      // Find carousel container with controls buttons and items
      const carouselContainers = context.querySelectorAll('.m-featured-media__items');
      if (!carouselContainers) {
        return;
      }


      carouselContainers.forEach(carouselContainer => {
        const allItems = carouselContainer.querySelectorAll('.m-featured-media__item');

        const nextButton = carouselContainer.closest('.m-featured-media__items-wrapper').querySelector('.m-featured-media__items-next-btn');
        const prevButton = carouselContainer.closest('.m-featured-media__items-wrapper').querySelector('.m-featured-media__items-prev-btn');
  
        if ((!prevButton)||(!nextButton)) {
          return;
        }

        //On loading page we hide previous button
        prevButton.style.visibility = 'hidden';
        
        // Create new region (if it doesn't not exist for screenreaders)
        const liveregionExist = carouselContainer.closest('.m-featured-media__items-wrapper').querySelector('.liveregion');
        if (!liveregionExist) {
          var liveregion = document.createElement('div');
          liveregion.setAttribute('aria-live', 'polite');
          liveregion.setAttribute('aria-atomic', 'true');
          liveregion.setAttribute('class', 'liveregion u-visually--hidden visually-hidden');
          carouselContainer.closest('.m-featured-media__items-wrapper').appendChild(liveregion);
        }

        nextButton.addEventListener('click', (e)=> {
          e.preventDefault();
          const carousel = e.target.closest('.m-featured-media').querySelector('.m-featured-media__items');
          const itemWidth = carousel.firstElementChild.getBoundingClientRect().width;
          // this line scrolls the items
          carousel.scrollLeft += itemWidth;
          //visibility previous button
          prevButton.style.visibility = 'visible';
  
          let currentItem = currentIndex(carouselContainer, itemWidth) + 1;
          // Message for screen-reader in the visually-hidden region
          e.target.closest('.m-featured-media').querySelector('.liveregion').innerText = Drupal.t('Item ' + currentItem + ' of ' + allItems.length);
  
          const isEndOfScroll = carousel.scrollWidth - carousel.scrollLeft === carousel.clientWidth;
          nextButton.style.visibility = isEndOfScroll ? 'hidden' : 'visible';
        });
  
        prevButton.addEventListener('click', (e)=> {
          e.preventDefault();
  
          const carousel = e.target.closest('.m-featured-media').querySelector('.m-featured-media__items');
          const itemWidth = carousel.firstElementChild.getBoundingClientRect().width;
          // this line scrolls the items
          carousel.scrollLeft -= itemWidth;
          //visibility next button
          nextButton.style.visibility = 'visible';
  
          let currentItem = currentIndex(carouselContainer, itemWidth) + 1;
          // Message for screen-reader in the visually-hidden region
          e.target.closest('.m-featured-media').querySelector('.liveregion').innerText = Drupal.t('Item ' + currentItem + ' of ' + allItems.length);
  
          const isStartOfScroll = carousel.scrollLeft === 0;
          prevButton.style.visibility = isStartOfScroll ? 'hidden' : 'visible';
        });
  
        carouselContainer.addEventListener('scroll', (e)=> {
          const carousel = e.target.closest('.m-featured-media').querySelector('.m-featured-media__items');
          const itemWidth = carousel.firstElementChild.getBoundingClientRect().width;
  
          let currentItem = currentIndex(carouselContainer, itemWidth) + 1;
          // Message for screen-reader in the visually-hidden region
          e.target.closest('.m-featured-media').querySelector('.liveregion').innerText = Drupal.t('Item ' + currentItem + ' of ' + allItems.length);
          
          const isEndOfScroll = carouselContainer.scrollWidth - carouselContainer.scrollLeft === carouselContainer.clientWidth;
          nextButton.style.visibility = isEndOfScroll ? 'hidden' : 'visible';
  
          const isStartOfScroll = carouselContainer.scrollLeft === 0;
          prevButton.style.visibility = isStartOfScroll ? 'hidden' : 'visible';
        });
      });
    },
  };
})(jQuery);
