import carousel from './carousel-header.twig';

import contentHeaderHomepageData from './carousel-header.yml';;


/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Organisms/Carousel Header',
  component: carousel,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Highly specialized component intended for the home page.',
      },
    },
  },

  argTypes: {
    section_layout: {
      defaultValue: 'card_3',
      description: 'Card type',
      type: { required: 'true' },
      control: {
        type: 'select',
        options: { 
          '3 Cards': 'card_3', 
          'Disabled': 'disabled',
        },
      },
      table: {
        type: {
          summary: ' card_3 | disabled ',
        },
        defaultValue: { summary: 'card_3' },
      },
    },
  },
}


export const HeaderHomepage = () => carousel(contentHeaderHomepageData);


