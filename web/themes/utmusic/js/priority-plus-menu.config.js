(function (Drupal) {

  'use strict';

  Drupal.behaviors.priorityPlusMenuConfiguration = {
    attach: function attach(context, settings) {

      // Bug on iOS devices where priority plus nav items are not corretly split into dorp down because of the timming of the javascript so need to throttle it more.
      var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      var throttle = iOS ? 750 : 50;

      priorityNav.init({
        mainNavWrapper: '.m-menu-priority-plus',
        navDropdownLabel: 'More',
        navDropdownBreakpointLabel: 'More',
        breakPoint: 1,
        throttleDelay: throttle
      });

      // Update aria-controls on priority plus menu to pass a11y.
      var priorityPlusNav = document.querySelector('.m-menu-priority-plus');
      if (priorityPlusNav !== null) {
        var priorityPlusNavDropDown = priorityPlusNav.querySelector('.nav__dropdown');
        priorityPlusNavDropDown.setAttribute('id', 'menu');
      }

    }
  };
})(Drupal);
