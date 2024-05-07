Drupal.behaviors.accordion = {
  attach(context) {
    // Selectors
    const items = context.querySelectorAll('.js-accordion-item');

    if (!items) {
      return;
    }

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
        // Toggle the item's state.
        if (button.getAttribute('aria-expanded') === 'true') {
          collapse(item, button, panel);
        } else {
          expand(item, button, panel);
        }
      });
    });

    const expandButtons = context.querySelectorAll('.js-accordion__control');

    if (!expandButtons) {
      return;
    }

    expandButtons.forEach(expandButton => {
      // Get all items relevant to the control.
      const allAccordionItems = expandButton.closest('.m-accordion').querySelectorAll('.js-accordion-item');

      // Add click listener on the parent 
      expandButton.addEventListener('click', () => {
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

        // Change the state for button
        expandButton.setAttribute('aria-expanded', expandButtonState === 'true' ? 'false' : 'true');
      });

    });
  },
};
