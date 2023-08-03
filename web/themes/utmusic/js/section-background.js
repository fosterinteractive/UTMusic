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

        // If there an accordion in the section - we should check the height of each section 
        // and set height for bg-image including height of accordion item content
        let accordionItems = background.closest('.l-section-wrapper').querySelectorAll('.m-accordion-item__label');

        if (!accordionItems.length) {
          return;
        }
        
        accordionItems.forEach(item => {

          item.addEventListener('click', () => {
            const opendPanel = item.closest('.m-accordion-item').querySelector('.m-accordion-item__content[aria-hidden="false"]');
            const collapsedPanel = item.closest('.m-accordion-item').querySelector('.m-accordion-item__content[aria-hidden="true"]');
            const closestBg = item.closest('.l-section-wrapper').querySelector('.l-section__background');

            if (opendPanel) {
              closestBg.setAttribute('style', `height: ${definedHeight + opendPanel.offsetHeight}px`);
            } else if (collapsedPanel) {
              closestBg.setAttribute('style', `height: ${definedHeight}px`);
            }

          });
        });


        //if we have "collapse/expand all" button for accordion  - we should sum height of each accordion panel 
        const accordionExpandButtons = background.closest('.l-section-wrapper').querySelectorAll('.m-accordion__btn-toggle');

        accordionExpandButtons.forEach(expandButton => {

          expandButton.addEventListener('click', () => {
            const allClosestOpenedPanels = expandButton.closest('.m-accordion').querySelectorAll('.m-accordion-item__content[aria-hidden="false"]');
            const allClosestCollapsedPanels = expandButton.closest('.m-accordion').querySelectorAll('.m-accordion-item__content[aria-hidden="true"]');
            const closestBg = expandButton.closest('.l-section-wrapper').querySelector('.l-section__background');

            if (allClosestOpenedPanels.length) {
              let panelHeight = 0;
              for (let i = 0; i < allClosestOpenedPanels.length; i++) {
                panelHeight += allClosestOpenedPanels[i].offsetHeight;
              }
              closestBg.setAttribute('style', `height: ${definedHeight + panelHeight}px`);
            } else if (allClosestCollapsedPanels.length) {
              closestBg.setAttribute('style', `height: ${definedHeight}px`);
            }

          });
        });

      });
    },
  };
})(jQuery);
