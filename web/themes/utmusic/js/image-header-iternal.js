Drupal.behaviors.imageHeaderIternal = {
  attach(context) {
    const adminTheme = context.querySelector('.adminspring-preview');

    if (adminTheme) {
      return;
    }

    const backgroundImage = context.querySelector('.js-content-header .o-hero-media__bg-decoration img');

    if (!backgroundImage) {
      return;
    }

    if (window.innerWidth >= 768) {
    
      let headerHeight = context.querySelector('.l-page__header').offsetHeight;
      let textHeight = context.querySelector('.js-content-header-text .js-content-header-text').offsetHeight;

      let definedHeight = headerHeight + textHeight + 250;

      backgroundImage.setAttribute('style', `max-height: ${definedHeight}px;`);
    }
  },
};
