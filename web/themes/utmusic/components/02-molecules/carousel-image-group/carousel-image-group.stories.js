import cig from './carousel-image-group.twig';

import cigData from './carousel-image-group.yml';

/**
 * Storybook Definition.
 */
export default { 
  title: 'Molecules/Carousel Image Group',
  component: cig,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Cards component',
      },
    },
  },

  argTypes: {

  },
};

export const CarouselImageGroup = () => cig(cigData);
