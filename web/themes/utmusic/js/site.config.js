(function ($) {

  'use strict';
  // Configuration that should only be ran once globally.
  var init = function () {
    // $('[data-accordion]').accordion();

    /**
     * Readmore.js
     */
    //  $('[data-webpack-readmore]').readmore();
  };

  // Bug with scrolling.
  try {
    if (Drupal && Drupal.behaviors) {
      Drupal.behaviors.siteConfiguration = {
        attach: function attach(context, settings) {
          init(settings);
        }
      };
    } else {
      init();
    }
  } catch (e) {
    init();
  }
})(jQuery);
