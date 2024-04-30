(function ($, Drupal) {

  'use strict';
  // Configuration that should only be ran once globally.
  Drupal.behaviors.slickSliderConfiguration = {
    attach: function attach(context, settings) {
      const quoteSlickWrappers = document.querySelectorAll('.m-quote__carousel-items');

      quoteSlickWrappers.forEach(function(wrapper) {
        const parent = wrapper.parentElement;
        const prevArrow = parent.querySelector('.m-quote__carousel-prev-btn');
        const nextArrow = parent.querySelector('.m-quote__carousel-next-btn');

        if (prevArrow && nextArrow) {
          $(wrapper).slick({
              infinite: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              accessibility: true,
              prevArrow: prevArrow,
              nextArrow: nextArrow,
          });
        }
      });
    }
  };

})(jQuery, Drupal);