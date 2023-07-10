Drupal.behaviors.accordion = {
  attach(context) {
    // Selectors
    const items = context.querySelectorAll('.js-accordion-item');

    if (!items) {
      return;
    }

    document.querySelectorAll(".m-accordion-item__admin-links").forEach(copyLinkContainer => {
      const copyAbsoluteButton = copyLinkContainer.querySelector(".a-button--icon-absolute");
      const copyRelativeButton = copyLinkContainer.querySelector(".a-button--icon-relative");

      copyAbsoluteButton.addEventListener("click", (e) => {
        const copyText = copyLinkContainer.querySelector(".m-accordion-item__admin-link-absolute-text");
        const link = copyText.innerHTML;
        // const link = copyButton.href;

        e.preventDefault();

        console.log(link);

        window.navigator.clipboard.writeText(link);
      });

      copyRelativeButton.addEventListener("click", (e) => {
        const copyText = copyLinkContainer.querySelector(".m-accordion-item__admin-link-relative-text");
        const link = copyText.innerHTML;
        // const link = copyButton.href;

        e.preventDefault();

        console.log(link);

        window.navigator.clipboard.writeText(link);
      });
    });

    // Function to expand an accordion item.
    const expand = (item, button, panel) => {
      item.setAttribute('data-accordion-state', 'expanded');
      button.setAttribute('aria-expanded', 'true');
      panel.setAttribute('aria-hidden', 'false');
    };

    // Function to collapse an accordion item.
    const collapse = (item, button, panel) => {
      item.setAttribute('data-accordion-state', 'collapsed');
      button.setAttribute('aria-expanded', 'false');
      panel.setAttribute('aria-hidden', 'true');
    };

    // Toggle accordion content when toggle is activated.
    items.forEach((item) => {
      const button = item.querySelector('.js-accordion-item__toggle');
      const panel = item.querySelector('.js-accordion-item__panel');

      // Hide all accordion content sections if JavaScript is enabled.
      collapse(item, button, panel);

      button.addEventListener('click', () => {
        // Close all other items
        items.forEach((another_item) => {
          if (item == another_item) {
            return;
          }
          const button = another_item.querySelector('.js-accordion-item__toggle');
          const panel = another_item.querySelector('.js-accordion-item__panel');

          // Hide all accordion content sections if JavaScript is enabled.
          collapse(another_item, button, panel);
        });


        // Toggle the item's state.
        return button.getAttribute('aria-expanded') === 'true'
          ? collapse(item, button, panel)
          : expand(item, button, panel);
      });
    });

    const expandButtons = context.querySelectorAll('.js-accordion__control');

    if (!expandButtons) {
      return;
    }

    expandButtons.forEach( expandButton => {
      // Get all items relevant to the control.
      const allAccordionItems = expandButton.closest('.m-accordion').querySelectorAll('.js-accordion-item');

      // Add click listener on the parent 
      expandButton.addEventListener('click', (e) => {
        let expandButtonState = expandButton.getAttribute('aria-expanded');

        // Iterate over items
        allAccordionItems.forEach((item) => {
          const button = item.querySelector('.js-accordion-item__toggle');
          const panel = item.querySelector('.js-accordion-item__panel');

          if (expandButtonState === 'true') {
            collapse(item, button, panel);
          } else {
            expand(item, button, panel);
          }
        });

        //Change the state for button
        if (expandButtonState === 'true') {
          expandButton.setAttribute('aria-expanded', 'false');
        } else {
          expandButton.setAttribute('aria-expanded', 'true');
        }
      });
    });

    let accordionSection = window.location.hash;
    
    if (accordionSection) {
      
      let accordionId = accordionSection.replace('#', '');
      let accordionWrapper = context.getElementById(accordionId);
      let accordionButton = accordionWrapper.getElementsByClassName('m-accordion-item__label');
      let accordionBody = accordionWrapper.getElementsByClassName('m-accordion-item__content');
      // openAccordion($accordionSection);

      accordionWrapper.setAttribute('data-accordion-state', 'collapsed');
      accordionButton[0].setAttribute('aria-expanded', 'true');
      accordionBody[0].setAttribute('aria-hidden', 'false');

      // let accordionWrapper = accordionSection.getAttribute('id');
      // let accordionButton = item.querySelector('#' + $accordionWrapper + ' [data-accordion-component="label"]');
      // let accordionBody = item.querySelector('#' + $accordionWrapper + ' [data-accordion-component="content"]');

      // console.log(accordionSection);
      // console.log(accordionWrapper);
      // console.log(accordionButton);
      // console.log(accordionBody);
      

      
      // $accordionSection.setAttribute('data-accordion-state', 'expanded');
      // $accordionButton.setAttribute('aria-expanded', 'true');
      // $accordionBody.setAttribute('aria-hidden', 'false');
    }

    
    // function locationHashChanged() {
      
    //   let $accordionSection = querySelector(window.location.hash);

      
    //   openAccordion($accordionSection);
    // }

    
    // function openAccordion($accordionSection) {
      
    //   let $accordionWrapper = $accordionSection.getAttribute('id');
    //   let $accordionButton = querySelector('#' + $accordionWrapper + ' [data-accordion-component="label"]');
    //   let $accordionBody = querySelector('#' + $accordionWrapper + ' [data-accordion-component="content"]');

      
    //   $accordionSection.setAttribute('data-accordion-state', 'expanded');
    //   $accordionButton.setAttribute('aria-expanded', 'true');
    //   $accordionBody.setAttribute('aria-hidden', 'false');
    // }

  },
};
