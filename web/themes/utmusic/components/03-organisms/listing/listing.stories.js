import listing from './listing.twig';

import listingData from './listing.yml';
import listingCondensedData from './listing--condensed.yml';

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

export const Listing = () => listing(listingData);
export const ListingCondensed = () => listing(listingCondensedData);

