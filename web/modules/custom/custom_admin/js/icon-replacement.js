/**
 * This JavaScript script adds icons to select elements in a form layout_paragraphs_component_form instead of Content Width select and Background Color select.
 * see web/themes/utmusic/utmusic.layouts.yml 'icon_mapping'
 */
(function (Drupal) {
  Drupal.behaviors.addIconsToSelect = {
    attach: function (context, settings) {
      // Select elements for section layout and theme
      const sectionLayoutSelect = document.querySelector("[id^='edit-layout-paragraphs-config-classes-section-layout']", context);
      const themeSelect = document.querySelector("[id^='edit-layout-paragraphs-config-classes-theme']", context);

      /**
       * Create a wrapper for the custom options.
       * @param {Element} selectElement - The original select element.
       * @param {string} mappings - The key to access specific mappings from settings.
       * @param {string} containerClass - The class name for the custom wrapper container.
       * @param {function} createContentCallback - The callback function to create custom content.
       */
      function createWrapper(selectElement, mappings, containerClass, createContentCallback) {
        if (selectElement) {
          
          // Get the selected layout type from the checked radio button
          const checkedRadio = document.querySelector('input[name="layout_paragraphs[layout]"]:checked');
          if (!checkedRadio) {
            console.error('No layout type selected.');
            return;
          }

          const layoutType = checkedRadio.value;
          const mappingOptions = settings.custom_admin.iconMappings[layoutType].classes[mappings] || {};
          let container = document.querySelector('.' + containerClass);

          // Create the container if it does not exist
          if (!container) {
            container = document.createElement('div');
            container.className = containerClass;
            if (containerClass.includes('section-theme')) {
              container.classList.add('adminspring-preview');
            }
            selectElement.parentNode.insertBefore(container, selectElement.nextSibling);
          }

          // Populate the container with custom options
          if (container.children.length === 0) {
            Array.from(selectElement.options).forEach(option => {
              const wrapper = createContentCallback(option, mappingOptions);
              wrapper.onclick = function () {
                selectElement.value = this.dataset.value;
                updateSelection(containerClass, selectElement.value);
              };
              wrapper.onkeydown = function (e) {
                if (e.key === 'Enter') {
                  this.click();
                }
              };
              container.appendChild(wrapper);
            });
          }

          /**
           * Update the selection state of custom options.
           * @param {string} containerClass - The class name for the custom wrapper container.
           * @param {string} selectedValue - The currently selected value.
           */
          function updateSelection(containerClass, selectedValue) {
            document.querySelectorAll('.' + containerClass + ' .icon-option-wrapper').forEach(wrapper => {
              wrapper.classList.toggle('selected', wrapper.dataset.value === selectedValue);
            });
          }

          // Initial update of selection state
          if (!container.querySelector('.icon-option-wrapper.selected')) {
            updateSelection(containerClass, selectElement.value);
          }
        } else {
          console.error(`Select element not found in the provided context.`);
        }
      }

      /**
       * Create content for section layout options.
       * @param {HTMLOptionElement} option - The option element.
       * @param {Object} mappingOptions - The mapping options for section layout.
       * @returns {HTMLDivElement} The created wrapper element.
       */
      function createIconContent(option, mappingOptions) {
        const iconData = mappingOptions.icon_mapping[option.value];
        const iconSrc = '/themes/utmusic/images/sections/' + iconData;
        const iconName = mappingOptions.options[option.value];

        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'icon-option-wrapper';
        iconWrapper.tabIndex = 0;
        iconWrapper.dataset.value = option.value;

        const icon = document.createElement('img');
        icon.src = iconSrc;
        icon.alt = iconName;
        icon.classList.add('layout-icon');

        const label = document.createElement('span');
        label.textContent = iconName;
        label.className = 'icon-label';

        iconWrapper.appendChild(icon);
        iconWrapper.appendChild(label);

        return iconWrapper;
      }

      /**
       * Create content for theme options.
       * @param {HTMLOptionElement} option - The option element.
       * @param {Object} mappingOptions - The mapping options for themes.
       * @returns {HTMLDivElement} The created wrapper element.
       */
      function createThemeContent(option, mappingOptions) {
        const themeValue = option.value;
        const themeName = mappingOptions[themeValue] || option.textContent;

        const themeWrapper = document.createElement('div');
        themeWrapper.className = 'icon-option-wrapper';
        themeWrapper.tabIndex = 0;
        themeWrapper.dataset.value = themeValue;

        const themeDiv = document.createElement('div');
        themeDiv.className = 'background-color-wrapper theme--' + themeValue;

        const themeText = document.createElement('span');
        themeText.textContent = 'Aa';
        themeText.className = 'background-color__text';

        const label = document.createElement('span');
        label.textContent = themeName;
        label.className = 'icon-label';

        themeDiv.appendChild(themeText);
        themeWrapper.appendChild(themeDiv);
        themeWrapper.appendChild(label);

        return themeWrapper;
      }

      // Initialize the custom wrappers for section layout and theme selections
      createWrapper(sectionLayoutSelect, 'section_layout', 'paragraphs-config-classes-section-layout--icon-wrapper', createIconContent);

      createWrapper(themeSelect, 'theme', 'paragraphs-config-classes-section-theme--icon-wrapper', createThemeContent);
    }
  };
})(Drupal);
