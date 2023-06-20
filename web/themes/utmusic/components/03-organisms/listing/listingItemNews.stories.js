import listingItem from './listing-item.twig';
import listingItemFeatured from './listing-item--featured.twig';

import ListingItemNewsData from './listing-item--news.yml';
import ListingItemNewsCondensedData from './listing-item--news-condensed.yml';
import ListingItemNewsFeaturedData from './listing-item--news-featured.yml';

import ListingItemRelatedNewsData from './listing-item--news-related.yml';

/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Organisms/Listing/01-Listing Item/News',
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

export const ListingItemNews = () => listingItem(ListingItemNewsData);
export const ListingItemNewsCondensed = () => listingItem(ListingItemNewsCondensedData);
export const ListingItemRelatedNews = () => listingItem(ListingItemRelatedNewsData);

export const ListingItemFeaturedNews = () => listingItemFeatured(ListingItemNewsFeaturedData);

