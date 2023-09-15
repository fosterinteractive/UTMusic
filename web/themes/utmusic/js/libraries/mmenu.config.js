(function ($, Drupal) {

  'use strict';
  // Configuration that should only be ran once globally.
  Drupal.behaviors.MmenuConfiguration = {
    attach: function attach(context, settings) {
      $('body').each(function() {

        var $searchIcon = '<svg class="m-menu-mobile__btn-search-svg m-menu-mobile-icon" aria-hidden="true"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/themes/utmusic/dist/icons.svg#search"></use></svg>';
        var $closeIcon = '<svg class="m-menu-mobile__btn-search-svg m-menu-mobile-icon" aria-hidden="true"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/themes/utmusic/dist/icons.svg#xmark"></use></svg>';

        // Mobile Menu - MMENU
        var $mobileMenu = $('#menu-mobile');
        if ($mobileMenu.length > 0) {
          var menu = new Mmenu("#menu-mobile", {
            extensions: [
              "position-right",
              "border-none",
              "fullscreen"
            ],
            navbar: {
              add: true,
              // title: Drupal.t('Menu'),
              title: 'Menu',
            },
            navbars: [
              {
                'position': 'top',
                'content': '<div class="m-menu-mobile__header"><div class="m-menu-mobile__search"><a href="/search" class="m-menu-mobile__btn-search">' + $searchIcon + '<span class="u-visually--hidden">Search site</span></a></div><div class="m-menu-mobile__close"><button data-mobile-menu-close class="m-menu-mobile__btn-close">' + $closeIcon + '</i><span class="u-visually--hidden">Close Menu</span></button></div></div>'
              }
            ],
            slidingSubmenus: true,
            keyboardNavigation: {
              enable: true
            }
          });

          const api = menu.API;

          $('[data-mobile-menu-close]').click(function(e) {
            api.close();
          });

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

          // Add labels into the tab start and end buttons that mmmenu uses
          // to keep a user tabbing through the menu as if gives an a11y
          // error on wave. Screen readers will not read this text as it has
          // the properties of aria-hidden=true and role=presentation.
          // https://github.com/FrDH/mmenu-js/issues/642
          $('button.mm-tabstart').text('Menu start tab');
          $('button.mm-tabend').text('Menu end tab');

          // On resize close the mmenu if the screen is larger then 899px.
          $(window).on("resize", function() {
            if (window.matchMedia("(min-width: 900px)").matches) {
              api.close();
            }
          });
        }
      });
    }
  };

})(jQuery, Drupal);
