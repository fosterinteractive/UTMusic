Drupal.behaviors.cardsLinkHoverAnimation = {
  attach(context) {
    // Selectors
    const allCardsLinks = context.querySelectorAll('.m-card--illustration__link a');

    if (!allCardsLinks) {
      return;
    }

    // On hover add class to card and on leave - remove it 
    allCardsLinks.forEach((link) => {
      
      link.addEventListener('mouseenter', () => {
        let card = link.closest('.m-card--illustration');
        card.classList.add('active');
      });

      link.addEventListener('mouseleave', () => {
        let card = link.closest('.m-card--illustration');
        card.classList.remove('active');
      });

      link.addEventListener('focus', () => {
        let card = link.closest('.m-card--illustration');
        card.classList.add('active');
      });

      link.addEventListener('blur', () => {
        let card = link.closest('.m-card--illustration');
        card.classList.remove('active');
      });
      
    });
  },
};
