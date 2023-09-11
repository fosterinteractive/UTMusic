Drupal.behaviors.cardsLinkHoverAnimation = {
  attach(context) {
    // Check if card has a button
    const allCardsLinks = context.querySelectorAll('.m-card--illustration__link a');

    if (allCardsLinks) {
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
    }


    // Check if card has a url on title
    const allCardsTitlesLinks = context.querySelectorAll('.m-card--illustration .m-card--illustration__title a');

    if (allCardsTitlesLinks) {
      // On hover add class to card and on leave - remove it 
      allCardsTitlesLinks.forEach((link) => {
        
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
    }
  },
};
