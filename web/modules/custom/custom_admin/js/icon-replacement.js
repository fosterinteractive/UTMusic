/**
 * This JavaScript script adds icons to select elements in a form layout_paragraphs_component_form instead of Content Width select and Background Color select.
 * see web/themes/music/music.layouts.yml 'icon_mapping'
 */

(function (Drupal) {
  Drupal.behaviors.addIconsToSelect = {
    attach: function (context, settings) {
      // Select elements for section layout, theme, vertical alignment, spacing top, and spacing bottom
      const sectionLayoutSelect = document.querySelector("[id^='edit-layout-paragraphs-config-classes-section-layout']", context);
      const themeSelect = document.querySelector("[id^='edit-layout-paragraphs-config-classes-theme']", context);
      const verticalAlignmentSelect = document.querySelector("[id^='edit-layout-paragraphs-config-classes-vertical-alignment']", context);
      const spacingTopSelect = document.querySelector("[id^='edit-layout-paragraphs-config-classes-spacing-top']", context);
      const spacingBottomSelect = document.querySelector("[id^='edit-layout-paragraphs-config-classes-spacing-bottom']", context);

      console.log(settings);

      /**
       * Create a wrapper for the custom options.
       * @param {Element} selectElement - The original select element.
       * @param {string} mappings - The key to access specific mappings from settings.
       * @param {string} containerClasses - The class names for the custom wrapper container.
       * @param {function} createContentCallback - The callback function to create custom content.
       */
      function createWrapper(selectElement, mappings, containerClasses, createContentCallback) {
        if (selectElement) {
          // Get the selected layout type from the checked radio button
          const checkedRadio = document.querySelector('input[name="layout_paragraphs[layout]"]:checked');
          if (!checkedRadio) {
            console.error('No layout type selected.');
            return;
          }

          const layoutType = checkedRadio.value;
          const mappingOptions = settings.custom_admin.iconMappings[layoutType]?.classes[mappings] || {};
          let container = document.querySelector('.' + containerClasses.replace(/ /g, '.'));

          // Create the container if it does not exist
          if (!container) {
            container = document.createElement('div');
            container.className = containerClasses;
            selectElement.parentNode.insertBefore(container, selectElement.nextSibling);
          }

          let iconsCreated = false;

          // Populate the container with custom options
          if (container.children.length === 0) {
            Array.from(selectElement.options).forEach(option => {
              const wrapper = createContentCallback(option, mappingOptions);
              if (wrapper) {
                iconsCreated = true;
                wrapper.onclick = function () {
                  selectElement.value = this.dataset.value;
                  updateSelection(containerClasses, selectElement.value);
                };
                wrapper.onkeydown = function (e) {
                  if (e.key === 'Enter') {
                    this.click();
                  }
                };
                container.appendChild(wrapper);
              }
            });
          }

          /**
           * Update the selection state of custom options.
           * @param {string} containerClasses - The class names for the custom wrapper container.
           * @param {string} selectedValue - The currently selected value.
           */
          function updateSelection(containerClasses, selectedValue) {
            document.querySelectorAll('.' + containerClasses.replace(/ /g, '.') + ' .paragraphs-config__icon-option').forEach(wrapper => {
              wrapper.classList.toggle('paragraphs-config__icon-option--selected', wrapper.dataset.value === selectedValue);
            });
          }

          // Initial update of selection state
          if (!container.querySelector('.paragraphs-config__icon-option--selected')) {
            updateSelection(containerClasses, selectElement.value);
          }

          // Hide the original select element if icons were created
          if (iconsCreated) {
            selectElement.style.display = 'none';
          }
        } else {
          console.error(`Select element not found in the provided context.`);
        }
      }

      /**
       * Create content for section layout options.
       * @param {HTMLOptionElement} option - The option element.
       * @param {Object} mappingOptions - The mapping options for section layout.
       * @returns {HTMLDivElement|null} The created wrapper element or null if data is missing.
       */
      function createIconContent(option, mappingOptions) {
        const iconData = mappingOptions.icon_mapping?.[option.value];
        const iconSrc = iconData ? '/themes/utmusic/images/' + iconData : null;
        const iconName = mappingOptions.options?.[option.value];

        if (!iconSrc || !iconName) {
          console.error(`Icon data missing for option value: ${option.value}`);
          return null;
        }

        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'paragraphs-config__icon-option';
        iconWrapper.tabIndex = 0;
        iconWrapper.dataset.value = option.value;

        const icon = document.createElement('img');
        icon.src = iconSrc;
        icon.alt = iconName;
        icon.classList.add('paragraphs-config__layout-icon');

        const label = document.createElement('span');
        label.textContent = iconName;
        label.className = 'paragraphs-config__icon-label';

        iconWrapper.appendChild(icon);
        iconWrapper.appendChild(label);

        return iconWrapper;
      }

      /**
       * Create content for theme options.
       * @param {HTMLOptionElement} option - The option element.
       * @param {Object} mappingOptions - The mapping options for themes.
       * @returns {HTMLDivElement|null} The created wrapper element or null if data is missing.
       */
      function createThemeContent(option, mappingOptions) {
        const themeValue = option.value;
        const themeName = mappingOptions[themeValue] || option.textContent;

        if (!themeName) {
          console.error(`Theme name missing for option value: ${themeValue}`);
          return null;
        }

        const themeWrapper = document.createElement('div');
        themeWrapper.className = 'paragraphs-config__icon-option';
        themeWrapper.tabIndex = 0;
        themeWrapper.dataset.value = themeValue;

        const themeDiv = document.createElement('div');
        themeDiv.className = 'paragraphs-config__background-color theme--' + themeValue;

        const themeText = document.createElement('span');
        themeText.textContent = 'Aa';
        themeText.className = 'paragraphs-config__background-color-text';

        const label = document.createElement('span');
        label.textContent = themeName;
        label.className = 'paragraphs-config__icon-label';

        themeDiv.appendChild(themeText);
        themeWrapper.appendChild(themeDiv);
        themeWrapper.appendChild(label);

        return themeWrapper;
      }

      // Initialize the custom wrappers for section layout, theme, vertical alignment, spacing top, and spacing bottom
      if (sectionLayoutSelect) {
        createWrapper(sectionLayoutSelect, 'section_layout', 'paragraphs-config__icon-wrapper paragraphs-config__section-layout--icon-wrapper', createIconContent);
      }

      if (themeSelect) {
        createWrapper(themeSelect, 'theme', 'paragraphs-config__icon-wrapper paragraphs-config__section-theme--icon-wrapper adminspring-preview', createThemeContent);
      }

      if (verticalAlignmentSelect) {
        createWrapper(verticalAlignmentSelect, 'vertical_alignment', 'paragraphs-config__icon-wrapper paragraphs-config__vertical-alignment--icon-wrapper', createIconContent);
      }

      if (spacingTopSelect) {
        createWrapper(spacingTopSelect, 'spacing_top', 'paragraphs-config__icon-wrapper paragraphs-config__spacing-top--icon-wrapper', createIconContent);
      }

      if (spacingBottomSelect) {
        createWrapper(spacingBottomSelect, 'spacing_bottom', 'paragraphs-config__icon-wrapper paragraphs-config__spacing-bottom--icon-wrapper', createIconContent);
      }
    }
  };
})(Drupal);
