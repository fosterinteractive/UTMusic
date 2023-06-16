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

  Drupal.behaviors.featuredMediaDrupal = {
    attach(context) {
      const nextButton = context.querySelector('.m-featured-media__items-next-btn');
      const prevButton = context.querySelector('.m-featured-media__items-prev-btn');

      //On loading page we hide previous button
      prevButton.style.display = 'none';

      // Find carousel container with controls buttons and items
      const carouselContainer = document.querySelector('.m-featured-media__items');
      const allItems = carouselContainer.querySelectorAll('.m-featured-media__item');
      // const itemWidth = carouselContainer.firstElementChild.getBoundingClientRect().width;

      // Create new region (if it doesn't not exist for screenreaders)
      const liveregionExist = context.querySelector('.liveregion');
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
        // const allItems = carousel.querySelectorAll('.m-featured-media__item');
        const itemWidth = carousel.firstElementChild.getBoundingClientRect().width;
        // this line scrolls the items
        carousel.scrollLeft += itemWidth;
        //Display previous button
        prevButton.style.display = 'block';

        let currentItem = currentIndex(carouselContainer, itemWidth) + 1;
        // Message for screen-reader in the visually-hidden region
        e.target.closest('.m-featured-media').querySelector('.liveregion').innerText = Drupal.t('Item ' + currentItem + ' of ' + allItems.length);

        const isEndOfScroll = carousel.scrollWidth - carousel.scrollLeft === carousel.clientWidth;
        nextButton.style.display = isEndOfScroll ? 'none' : 'block';
        if (nextButton.style.display == 'none') {
          prevButton.firstElementChild.focus();
        }
      });

      prevButton.addEventListener('click', (e)=> {
        e.preventDefault();

        const carousel = e.target.closest('.m-featured-media').querySelector('.m-featured-media__items');
        // const allItems = carousel.querySelectorAll('.m-featured-media__item');
        const itemWidth = carousel.firstElementChild.getBoundingClientRect().width;
        // this line scrolls the items
        carousel.scrollLeft -= itemWidth;
        //Display next button
        nextButton.style.display = 'block';

        let currentItem = currentIndex(carouselContainer, itemWidth) + 1;
        // Message for screen-reader in the visually-hidden region
        e.target.closest('.m-featured-media').querySelector('.liveregion').innerText = Drupal.t('Item ' + currentItem + ' of ' + allItems.length);

        const isStartOfScroll = carousel.scrollLeft === 0;
        prevButton.style.display = isStartOfScroll ? 'none' : 'block';
       
        if (prevButton.style.display == 'none') {
          nextButton.firstElementChild.focus();
        }
      });



      carouselContainer.addEventListener('scroll', (e)=> {
        const carousel = e.target.closest('.m-featured-media').querySelector('.m-featured-media__items');
        const itemWidth = carousel.firstElementChild.getBoundingClientRect().width;

        let currentItem = currentIndex(carouselContainer, itemWidth) + 1;
        // Message for screen-reader in the visually-hidden region
        e.target.closest('.m-featured-media').querySelector('.liveregion').innerText = Drupal.t('Item ' + currentItem + ' of ' + allItems.length);
        
        const isEndOfScroll = carouselContainer.scrollWidth - carouselContainer.scrollLeft === carouselContainer.clientWidth;
        nextButton.style.display = isEndOfScroll ? 'none' : 'block';
        if (nextButton.style.display == 'none') {
          prevButton.firstElementChild.focus();
        }

        const isStartOfScroll = carouselContainer.scrollLeft === 0;
        prevButton.style.display = isStartOfScroll ? 'none' : 'block';
        if (prevButton.style.display == 'none') {
          nextButton.firstElementChild.focus();
        }
      });

    },
  };
})(jQuery);
