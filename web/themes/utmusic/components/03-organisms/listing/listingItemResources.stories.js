import listingItemResources from './listing-item--resources.twig';

import ListItemResourcesData from './listing-item--resources.yml';

/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Organisms/Listing/01- Listing Item/Resources',
  component: listingItemResources,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Listing Item Resources',
      },
    },
  },
}

export const ListItemResources = () => listingItemResources(ListItemResourcesData);
