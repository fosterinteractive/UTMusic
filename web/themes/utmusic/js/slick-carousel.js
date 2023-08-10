(function ($) {
  'use strict';

  Drupal.behaviors.slickCarousel = {
    attach: (context) => {

      const controlButton = $(context).find('.o-hero-media--carousel__image-button');
      const carousel = $(controlButton).next();

      $(carousel).slick({
        pauseOnHover: false,
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        speed: 1000,
        cssEase: 'cubic-bezier(.17,.67,.83,.67)',
      });

      $(controlButton).on('click', () => {

        if (carousel[0].slick.paused == false) {
          $(carousel).slick('slickPause');
          $(controlButton).addClass('paused');
          $(controlButton).attr('aria-label', Drupal.t('Play'));
          $(controlButton).attr('aria-pressed', true);
        }
        else if (carousel[0].slick.paused == true) {
          $(carousel).slick('slickPlay');
          $(controlButton).removeClass('paused');
          $(controlButton).attr('aria-label', Drupal.t('Pause'));
          $(controlButton).attr('aria-pressed', false);
        }
      });

    }
  };
})(jQuery);