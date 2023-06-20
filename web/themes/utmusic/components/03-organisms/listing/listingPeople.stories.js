import listing from './listing.twig';

import fullListPeopleData from './listing--full-people.yml';
import listingPeopleCarouselData from './listing--full-people-carousel.yml';


import './listing--full-people';
import './listing--full-people-carousel';

/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Organisms/Listing/People',
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

export const FullListPeople = () => listing(fullListPeopleData);
export const ListPeopleCarousel = () => listing(listingPeopleCarouselData);
