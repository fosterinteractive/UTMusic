import listingItem from './listing-item.twig';
import listingItemEvents from './listing-item--events.twig';


import ListingItemRelatedNewsData from './listing-item--related-news.yml';

import listingItemEventsData from './listing-item--events.yml';
import listingItemEventsCondensedData from './listing-item--events-condensed.yml';


/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Organisms/Listing',
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

export const ListingItemRelatedNews = () => listingItem(ListingItemRelatedNewsData);


export const ListingItemEvents = () => listingItemEvents(listingItemEventsData);
export const ListingItemEventsCondensed = () => listingItemEvents(listingItemEventsCondensedData);
