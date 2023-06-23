import listingItemPeople from './listing-item--people.twig';

import ListingItemPeopleData from './listing-item--people.yml';

/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Organisms/Listing/01- Listing Item/People',
  component: listingItemPeople,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Listing Item News',
      },
    },
  },
}

export const ListingItemPeople = () => listingItemPeople(ListingItemPeopleData);
