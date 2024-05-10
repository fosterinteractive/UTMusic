(function (Drupal) {
  Drupal.behaviors.addIconsToSelect = {
    attach: function (context, settings) {
      var selectElement = document.querySelector("[id^='edit-layout-paragraphs-config-classes-section-layout']", context);
      
      // Check if the select element is present
      if (selectElement) {
        // Find the checked radio button to determine the layout type
        var checkedRadio = document.querySelector('input[name="layout_paragraphs[layout]"]:checked');
        if (!checkedRadio) {
          console.error('No layout type selected.');
          return;
        }

        // Extract the value of the selected layout type
        var layoutType = checkedRadio.value;
        // Access icon mappings specific to the chosen layout type from the settings object
        var iconMappings = settings.custom_admin.iconMappings.icon_mappings[layoutType] || {};
        var iconContainer = document.querySelector('.paragraphs-config-classes-section-layout--icon-wrapper');

        if (!iconContainer) {
          iconContainer = document.createElement('div');
          iconContainer.className = 'paragraphs-config-classes-section-layout--icon-wrapper';
          selectElement.parentNode.insertBefore(iconContainer, selectElement.nextSibling);
        }

        // If the container does not exist, create it and insert it into the DOM after the select element
        if (iconContainer.children.length === 0) {
          Array.from(selectElement.options).forEach(option => {

            let iconData = iconMappings[option.value] || { icon: 'default.svg', name: 'Default name' };
            let iconSrc = '/themes/utmusic/images/sections/' + iconData.icon;
            let iconName = iconData.name;

            let iconWrapper = document.createElement('div');
            iconWrapper.className = 'icon-option-wrapper';
            iconWrapper.tabIndex = 0; // Make it focusable
            iconWrapper.dataset.value = option.value;
            iconWrapper.onclick = function() {
              selectElement.value = this.dataset.value;
              updateIcons();
            };
            iconWrapper.onkeydown = function(e) {
              if (e.key === 'Enter') {
                this.click(); // Simulate click on Enter key press
              }
            };

            // Create the image element for the icon
            let icon = document.createElement('img');
            icon.src = iconSrc;
            icon.alt = iconName;
            icon.classList.add('layout-icon');

            // Create the label element
            let label = document.createElement('span');
            label.textContent = iconName;
            label.className = 'icon-label';

            // Append icon and label to the wrapper, then the wrapper to the container
            iconWrapper.appendChild(icon);
            iconWrapper.appendChild(label);
            iconContainer.appendChild(iconWrapper);
          });
        }

        function updateIcons() {
          let selectedValue = selectElement.value;
          document.querySelectorAll('.icon-option-wrapper').forEach(wrapper => {
            wrapper.classList.toggle('selected', wrapper.dataset.value === selectedValue);
          });
        }

        if (!iconContainer.querySelector('.icon-option-wrapper.selected')) {
          updateIcons(); // Initially update icons based on the selected option
        }
      } else {
        console.error('Select element not found in the provided context.');
      }
    }
  };
})(Drupal);
