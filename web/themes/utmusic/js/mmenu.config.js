(function ($) {

  'use strict';
  // Configuration that should only be ran once globally.
  var init = function () {

    // Mobile Menu - MMENU
    var $mobileMenu = $('#menu-mobile');
    if ($mobileMenu.length > 0) {
      var menu = new Mmenu("#menu-mobile", {
        extensions: [
          "pagedim-black",
          "position-right",
          "border-none"
        ],
        navbar: {
          add: true
        },
        slidingSubmenus: true,
        keyboardNavigation: {
          enable: true
        }
      });

      const api = menu.API;

      // Open the active mmenu panel.
      // Find active menu item in secondary menu items and below.
      var $activeMenuItem = $('a.is-active', $mobileMenu).last();
      // If there is at least a level 2 active menu item then open the mmenu
      // panel to that level.
      if ($activeMenuItem.length > 0) {
        var activePanelId = $activeMenuItem.parents('.mm-panel').attr('id');
        const activePanel = document.querySelector('#' + activePanelId);
        api.openPanel(activePanel);
      }

      // On resize close the mmenu if the screen is larger then 899px.
      $(window).on("resize", function() {
        if (window.matchMedia("(min-width: 900px)").matches) {
          api.close();
        }
      });
    }

  };

  try {
    if (Drupal && Drupal.behaviors) {
      Drupal.behaviors.edMmenuConfiguration = {
        attach: function attach(context, settings) {
          init(settings);
        }
      };
    } else {
      init();
    }
  } catch (e) {
    init();
  }
})(jQuery);
