(function($, Drupal) {

  Drupal.behaviors.magnificPopupConfiguration = {
    attach: function attach(context, settings) {
      $('.m-image-grid').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          titleSrc: function(item) {
            return item.el.attr('title');
          }
        },
        callbacks: {
          open: function() {
            // Set initial focus to the close button when the popup is opened.
            $('button.mfp-close').focus().attr({
              'aria-label': 'Close the popup'
            }).removeAttr("title");

            // Add ARIA role and attributes
            $('.mfp-wrap').attr({
              'role': 'dialog',
              'aria-modal': 'true',
              'aria-live': 'polite'
            }).append('<div class="visually-hidden" aria-live="assertive">Popup opened.</div>');

            // Enhance navigation buttons
            $('.mfp-arrow-left, .mfp-arrow-right').removeAttr("title");
            $('.mfp-arrow-left').attr({
              'aria-label': 'Previous image or video'
            });
            $('.mfp-arrow-right').attr({
              'aria-label': 'Next image or video'
            });
          },
          close: function() {
            // Remove the aria-live announcement
            $('.mfp-wrap .visually-hidden').remove();
          },
          elementParse: function(item) {
            if (item.el.hasClass('mfp-iframe')) {
              item.type = 'iframe';
              item.src = item.el.attr('href');
              
              // Set a title for iframes, primarily for YouTube/Vimeo embeds
              item.title = 'Embedded content from ' + item.src;
            }
          }
        },
        closeOnContentClick: false,
        closeOnEsc: true
      });
    }
  };

})(jQuery, Drupal);
