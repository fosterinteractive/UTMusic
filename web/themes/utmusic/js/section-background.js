(function ($) {
  'use strict';

  Drupal.behaviors.sectionBackgroundDrupal = {
    attach(context) {
      // Find all sections with backgrounds
      const section_backgrounds = context.querySelectorAll('.l-section__background');

      if (!section_backgrounds.length) {
        return;
      }

      section_backgrounds.forEach(background => {
        let contents = background.closest('.l-section-wrapper').querySelectorAll('.l-section__zone');
        let definedHeight = 0;

        for (let i = 0; i < contents.length; i++) {
          if (window.innerWidth < 768) {
            definedHeight += contents[i].offsetHeight;

          } else {
            if (definedHeight < contents[i].offsetHeight) {
              definedHeight = contents[i].offsetHeight;
            }
          }
        }

        background.style.height = definedHeight + "px";


        window.addEventListener('resize', () => {
          let contents_resize = background.closest('.l-section-wrapper').querySelectorAll('.l-section__zone');
          let definedHeight = 0;

          for (let i = 0; i < contents_resize.length; i++) {
            if (window.innerWidth < 768) {
              definedHeight += contents_resize[i].offsetHeight;
  
            } else {
              if (definedHeight < contents_resize[i].offsetHeight) {
                definedHeight = contents_resize[i].offsetHeight;
              }
            }
          }
  
          background.style.height = definedHeight + "px";
        });
      });
    },
  };
})(jQuery);
