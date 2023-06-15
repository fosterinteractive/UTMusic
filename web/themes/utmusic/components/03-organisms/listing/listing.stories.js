import listing from './listing.twig';

import fullListNewsData from './listing--full-news.yml';
import listRelatedNewsData from './listing--full-news-related.yml';
import listingCondensedData from './listing--full-news-condensed.yml';

import fullListEventsData from './listing--full-events.yml';
import listRelatedEventsData from './listing--full-events-related.yml';
import listingEventsCarouselData from './listing--full-events-carousel.yml';


import './listing--full-events-carousel';
/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Organisms/Listing',
  component: listing,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Listing',
      },
    },
  },
}

export const FullListNews = () => listing(fullListNewsData);
export const ListRelatedNews = () => listing(listRelatedNewsData);
export const ListNewsCondensed = () => listing(listingCondensedData);

export const FullListEvents = () => listing(fullListEventsData);
export const ListRelatedEvents = () => listing(listRelatedEventsData);
export const ListEventsCarousel = () => listing(listingEventsCarouselData);