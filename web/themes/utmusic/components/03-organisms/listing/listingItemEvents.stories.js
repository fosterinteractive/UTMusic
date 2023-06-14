import listingItemEvents from './listing-item--events.twig';
import listingItemFeaturedEvents from './listing-item--events-featured.twig';

import ListingItemEventsData from './listing-item--events.yml';
import ListingItemEventsFeaturedData from './listing-item--events-featured.yml';

/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Organisms/Listing/Listing Item/Events',
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

export const ListingItemFeaturedEvents = () => listingItemFeaturedEvents(ListingItemEventsFeaturedData);
