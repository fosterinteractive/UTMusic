Drupal.behaviors.listingEventsCarousel = {
  attach(context) {
    const nextButton = context.querySelector('.o-listing--events-carousel__items-next-btn');
    const prevButton = context.querySelector('.o-listing--events-carousel__items-prev-btn');

    prevButton.style.visibility = 'hidden';

    nextButton.addEventListener('click', (e)=> {
      const carouselItems = e.target.closest('.o-listing--events-carousel').querySelector('.o-listing--events-carousel__items');
      const itemWidth = carouselItems.firstElementChild.getBoundingClientRect().width;
      // this line scrolls the items
      carouselItems.scrollLeft += itemWidth;

      prevButton.style.visibility = 'visible';

      const isEndOfScroll = carouselItems.scrollWidth - carouselItems.scrollLeft === carouselItems.clientWidth;
      nextButton.style.visibility = isEndOfScroll ? 'hidden' : 'visible';
    });

    prevButton.addEventListener('click', (e)=> {
      const carouselItems = e.target.closest('.o-listing--events-carousel').querySelector('.o-listing--events-carousel__items');
      const itemWidth = carouselItems.firstElementChild.getBoundingClientRect().width;
      // this line scrolls the items
      carouselItems.scrollLeft -= itemWidth;

      nextButton.style.visibility = 'visible';
      const isStartOfScroll = carouselItems.scrollLeft === 0;
      prevButton.style.visibility = isStartOfScroll ? 'hidden' : 'visible';
    });

  },
};
