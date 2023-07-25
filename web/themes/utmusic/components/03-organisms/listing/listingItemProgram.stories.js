import listingItemProgram from './listing-item--program.twig';

import ListingItemProgramData from './listing-item--program.yml';

/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Organisms/Listing/01- Listing Item/Program',
  component: listingItemProgram,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Listing Item Program',
      },
    },
  },
}

export const ListingItemProgram = () => listingItemProgram(ListingItemProgramData);


