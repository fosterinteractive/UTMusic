import listing from './listing.twig';

import fullListEventsData from './listing--full-events.yml';
import listRelatedEventsData from './listing--full-events-related.yml';
import listingEventsCarouselData from './listing--full-events-carousel.yml';


import './listing--full-events-carousel';
/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Organisms/Listing/Events',
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

export const FullListEvents = () => listing(fullListEventsData);
export const ListRelatedEvents = () => listing(listRelatedEventsData);
export const ListEventsCarousel = () => listing(listingEventsCarouselData);