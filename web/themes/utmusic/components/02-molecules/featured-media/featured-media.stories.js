import featuredMedia from './featured-media.twig';

import featuredMediaData from './featured-media.yml';
import featuredMediaSingleData from './featured-media--single.yml';


/**
 * Storybook Definition.
 */
export default { 
  title: 'Molecules/Featured Media',
  component: featuredMedia,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Featured Media component',
      },
    },
  },
 };

export const FeaturedMediaHorizontalScroll = () => featuredMedia(featuredMediaData);
export const FeaturedMediaSingleItem = () => featuredMedia(featuredMediaSingleData);
