Drupal.behaviors.listingPeople = {
  attach(context) {
    // Find all listing items
    const listingItems = context.querySelectorAll('.m-listing-item--people');

    if (!listingItems.length) {
      return;
    }
 
    let firstImageHeight = context.querySelector('.m-listing-item--people .m-listing-item--people__img img').height;
    let placeholdersArray = context.querySelectorAll('.m-listing-item--people .m-listing-item--people__img-illustration');

    placeholdersArray.forEach( placeholder => {
      placeholder.style.height = firstImageHeight + "px";
    });
  },
};
