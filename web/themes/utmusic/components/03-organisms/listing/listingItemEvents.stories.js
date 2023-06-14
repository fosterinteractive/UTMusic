import listingItem from './listing-item.twig';
import listingItemFeaturedEvents from './listing-item--events-featured.twig';

import ListingItemEventsFeaturedData from './listing-item--events-featured.yml';

/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Organisms/Listing/Listing Item/Events',
  component: listingItem,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Listing Item News',
      },
    },
  },
}

export const ListingItemFeaturedEvents = () => listingItemFeaturedEvents(ListingItemEventsFeaturedData);
