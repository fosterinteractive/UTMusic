(function (Drupal) {
  Drupal.behaviors.addIconsToSelect = {
    attach: function (context, settings) {
      var selectElement = document.querySelector("[id^='edit-layout-paragraphs-config-classes-section-layout']", context);
      if (selectElement) {
        var iconContainer = document.querySelector('.paragraphs-config-classes-section-layout--icon-wrapper');
        if (!iconContainer) {
          iconContainer = document.createElement('div');
          iconContainer.className = 'paragraphs-config-classes-section-layout--icon-wrapper';
          selectElement.parentNode.insertBefore(iconContainer, selectElement.nextSibling);
        }

        // console.log('Complete Icon Mappings:', settings.custom_admin.iconMappings);

        if (iconContainer.children.length === 0) {
          Array.from(selectElement.options).forEach(option => {
            let iconMappings = settings.custom_admin.iconMappings.icon_mappings[option.value] || { icon: 'default.svg', name: 'Default name' };
            let iconSrc = '/themes/utmusic/images/sections/' + iconMappings.icon;
            let iconName = iconMappings.name;

            let iconWrapper = document.createElement('div');
            iconWrapper.className = 'icon-option-wrapper';
            iconWrapper.dataset.value = option.value;
            iconWrapper.onclick = function() {
              selectElement.value = this.dataset.value;
              updateIcons();
            };

            let icon = document.createElement('img');
            icon.src = iconSrc;
            icon.alt = iconName; // Use the name as alt text for accessibility
            icon.classList.add('layout-icon');

            let label = document.createElement('span');
            label.textContent = iconName;
            label.className = 'icon-label';

            iconWrapper.appendChild(icon);
            iconWrapper.appendChild(label);
            iconContainer.appendChild(iconWrapper);
          });
        }

        function updateIcons() {
          let selectedValue = selectElement.value;
          document.querySelectorAll('.icon-option-wrapper').forEach(wrapper => {
            if (wrapper.dataset.value === selectedValue) {
                wrapper.classList.add('selected');
            } else {
                wrapper.classList.remove('selected');
            }
          });
        }

        updateIcons(); // Initially update icons based on the selected option
      }
    }
  };
})(Drupal);
