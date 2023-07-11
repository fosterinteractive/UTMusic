(function ($) {
  Drupal.behaviors.infoTooltips = {
    attach: function attach(context, settings) {
      tippy('.data-trigger', {
        content(reference) {
          const id = reference.getAttribute('data-template');
          const template = $(`#${id}`);
          return template.html();
        },
        allowHTML: true,
        theme: 'custom',
        trigger: 'click',
        placement: 'bottom',
      });
    }
  };
})(jQuery, Drupal);
