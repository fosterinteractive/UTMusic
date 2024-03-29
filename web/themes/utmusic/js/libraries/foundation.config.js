(function ($, Drupal) {

  'use strict';
  // Configuration that should only be ran once globally.
  Drupal.behaviors.FoundationConfig = {
    attach: function attach(context, settings) {

      $(document).foundation();

      /**
       * Mega Menu
       */
      // On key enter of the top level menu items open the menu panel. On second 
      // key enter follow the menu link.
      $('a[data-toggle]').on('keydown', function(e) {
        var $topBtn = $(this);

        switch(Foundation.Keyboard.parseKey(e)) {
          case 'ENTER':
            if ($topBtn.attr('aria-expanded') == 'true') {
              e.preventDefault();
              window.location.href = this.href;
            }
            else {
              e.preventDefault();
              var id = $topBtn.attr('data-toggle');
              $('#' + id).foundation('open');
            }
            break;
        }
      });

      // Remove extra aria and classes added to sub menus as we are not hiding
      // them and foundation assumes we are.
      $('[data-main-menu-component=second-level-list]')
      .children()
      .removeClass('is-dropdown-submenu-parent opens-right')
      .removeAttr('role aria-haspopup aria-label')
      .children()
      .removeAttr('role');

      $('[data-main-menu-component=third-level-list]')
      .removeClass('submenu is-dropdown-submenu vertical')
      .removeAttr('data-submenu')
      .children()
      .removeClass('is-submenu-item is-dropdown-submenu-item')
      .removeAttr('role')
      .children()
      .removeAttr('role');
    }
  };

})(jQuery, Drupal);
