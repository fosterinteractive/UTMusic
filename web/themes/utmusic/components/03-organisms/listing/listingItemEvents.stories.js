import listingItemEvents from './listing-item--events.twig';
import listingItemFeaturedEvents from './listing-item--events-featured.twig';
import listingItemCarouselEvents from './listing-item--events-carousel.twig';

import ListingItemEventsData from './listing-item--events.yml';
import ListingItemEventsCondensedData from './listing-item--events-condensed.yml';
import ListingItemEventsFeaturedData from './listing-item--events-featured.yml';
import ListingItemEventsCarouselData from './listing-item--events-carousel.yml';

/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Organisms/Listing/01- Listing Item/Events',
  component: listingItemEvents,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Listing Item News',
      },
    },
  },
}

export const ListingItemEvents = () => listingItemEvents(ListingItemEventsData);
export const ListingItemEventsCondensed = () => listingItemEvents(ListingItemEventsCondensedData);
export const ListingItemEventsCarousel = () => listingItemCarouselEvents(ListingItemEventsCarouselData);

export const ListingItemEventsFeatured = () => listingItemFeaturedEvents(ListingItemEventsFeaturedData);
