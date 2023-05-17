(function ($) {
  'use strict';

  Drupal.behaviors.exposedFilters = {
    attach: (context) => {

      $(document).ready(function(){
        
        const exposedFormButton = $(context).find('.views-exposed-form .form-submit');
        const offscreenAnnouncement = $(context).find('.offscreen')

        // Listen for form submit event
        exposedFormButton.on('click', function() {
          // Use Drupal.announce() to announce that the form has been submitted
          // Drupal.announce( Drupal.t('Filters applied. Results list updated') );
          Drupal.announce();

          // Update off-screen element for screen readers
          offscreenAnnouncement.text(Drupal.t('Filters applied. Results list updated'));
          setTimeout(() => offscreenAnnouncement.remove(), 1000);

        });

      });
    }
  };
})(jQuery);