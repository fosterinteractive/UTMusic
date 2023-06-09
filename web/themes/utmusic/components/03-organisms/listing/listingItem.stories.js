import listingItem from './listing-item.twig';
import listingItemEvents from './listing-item--events.twig';

import ListingItemNewsData from './listing-item--news.yml';
import ListingItemNewsCondensedData from './listing-item--news-condensed.yml';

import ListingItemRelatedNewsData from './listing-item--related-news.yml';
import listingItemEventsData from './listing-item--events.yml';
import listingItemEventsCondensedData from './listing-item--events-condensed.yml';


/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Organisms/Listing/Listing Item',
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

export const ListingItemNews = () => listingItem(ListingItemNewsData);
export const ListingItemNewsCondensed = () => listingItem(ListingItemNewsCondensedData);



export const ListingItemEvents = () => listingItemEvents(listingItemEventsData);
export const ListingItemEventsCondensed = () => listingItemEvents(listingItemEventsCondensedData);
