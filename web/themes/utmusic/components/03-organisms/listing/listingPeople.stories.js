import listing from './listing.twig';

import fullListPeopleData from './listing--full-people.yml';

import './listing--full-people';
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