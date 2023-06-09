import listing from './listing.twig';

import fullListNewsData from './listing-full-news.yml';
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

export const FullListNews = () => listing(fullListNewsData);
export const ListingCondensed = () => listing(listingCondensedData);

