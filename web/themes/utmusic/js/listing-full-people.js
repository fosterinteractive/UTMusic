const setSizeImagePlaceholder = (context) => {
  let firstImageHeight = context.querySelector('.m-listing-item--people .m-listing-item--people__img img');
  let placeholdersArray = context.querySelectorAll('.m-listing-item--people .m-listing-item--people__img-illustration');

  placeholdersArray.forEach( placeholder => {
    placeholder.style.height = firstImageHeight ? firstImageHeight.height + "px": '300px';
  });
}

Drupal.behaviors.listingPeople = {

  attach(context) {
    // Find all listing items
    const listingItems = context.querySelectorAll('.m-listing-item--people');

    if (!listingItems.length) {
      return;
    }
 
    setSizeImagePlaceholder(context);

    window.addEventListener('resize', ()=> {
      setSizeImagePlaceholder(context);
    });
  },
};
