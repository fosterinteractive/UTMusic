Drupal.behaviors.slidingDoorDrupal = {
  attach(context) {
    // Find sliding door
    const slidingDoor = context.querySelector('.m-sliding-door-menu');
    if (!slidingDoor) {
      return;
    }
 
    const allSlides = slidingDoor.querySelectorAll('.m-sliding-item');

    allSlides.forEach(slide => {

      // Listen for mouseenter and focus events
      slide.addEventListener('mouseenter', () => {
        let highlightedItem = slide.closest('.m-sliding-door-menu').querySelector('.highlighted-slide');
        if (highlightedItem) {
          highlightedItem.classList.remove('highlighted-slide');
        }
        slide.classList.add('highlighted-slide');
      });

      slide.addEventListener('mouseleave', () => {
        slide.classList.remove('highlighted-slide');
      });
    });

    const slideLinks = slidingDoor.querySelectorAll('.m-sliding-item__link a');

    slideLinks.forEach(link => {
      link.addEventListener('focus', () => {
        let highlightedItem = link.closest('.m-sliding-door-menu').querySelector('.highlighted-slide');
        if (highlightedItem) {
          highlightedItem.classList.remove('highlighted-slide');
        }
        link.closest('.m-sliding-item').classList.add('highlighted-slide');
      });

      link.addEventListener('blur', () => {
        link.closest('.m-sliding-item').classList.remove('highlighted-slide');
      });
    });
  },
};