import featuredMedia from './featured-media.twig';

import featuredMediaData from './featured-media.yml';


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

export const FeaturedMediaCarousel = () => featuredMedia(featuredMediaData);
