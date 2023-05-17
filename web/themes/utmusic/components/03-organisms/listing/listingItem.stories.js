import listingItem from './listing-item.twig';
import listingItemEvents from './listing-item--events.twig';
import listingItemJobs from './listing-item--jobs.twig';


import listingItemStoriesData from './listing-item.yml';
import listingItemCondensedData from './listing-item--condensed.yml';

import listingItemEventsData from './listing-item--events.yml';
import listingItemEventsCondensedData from './listing-item--events-condensed.yml';

import listingItemJobsData from './listing-item--jobs.yml';

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

export const ListingItemStories = () => listingItem(listingItemStoriesData);
export const ListingItemNewsCondensed = () => listingItem(listingItemCondensedData);

export const ListingItemEvents = () => listingItemEvents(listingItemEventsData);
export const ListingItemEventsCondensed = () => listingItemEvents(listingItemEventsCondensedData);

export const ListingItemJobs= () => listingItemJobs(listingItemJobsData);
