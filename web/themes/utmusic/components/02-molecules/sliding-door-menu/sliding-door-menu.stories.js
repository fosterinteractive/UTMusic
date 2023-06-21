import slidingMenu from './sliding-door-menu.twig';

import slidingMenuData from './sliding-door-menu.yml';

import './sliding-door-menu';
/**
 * Storybook Definition.
 */
export default { 
  title: 'Molecules/Sliding Door Menu',
  component: slidingMenu,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Sliding Door Menu component',
      },
    },
  },

  // argTypes: {
  //   //Card variation
  //   variation: {
  //     defaultValue: 'illustration',
  //     description: 'Card type',
  //     type: { required: 'true' },
  //     control: {
  //       type: 'select',
  //       options: { 
  //         'Large Image': 'image', 
  //         'Illustration': 'illustration',
  //       },
  //     },
  //     table: {
  //       type: {
  //         summary: ' image | illustration ',
  //       },
  //       defaultValue: { summary: 'illustration' },
  //     },
  //   },
  //   //Card title
  //   title: {
  //     defaultValue: cardDataIllustration.title,
  //     description: 'Card title',
  //     type: { required: false },
  //     control: {
  //       type: 'text',
  //     },
  //     table: {
  //       type: {
  //         summary: 'string (plain text)',
  //       },
  //     },
  //   },
  //   //Card description
  //   description: {
  //     defaultValue: cardDataIllustration.description,
  //     description: 'Card description',
  //     control: {
  //       type: 'text',
  //     },
  //     table: {
  //       type: {
  //         summary: 'string (plain text)',
  //       },
  //     },
  //   },
  //   //Card Image
  //   image: {
  //     defaultValue: cardDataIllustration.image,
  //     description: 'Card image',
  //     control: {
  //       type: 'text',
  //     },
  //     table: {
  //       type: {
  //         summary: 'image',
  //       },
  //     },
  //   },
  //   //Card illustration
  //   illustration: {
  //     defaultValue: 'featured_event',
  //     description: 'Card illustration',
  //     control: {
  //       type: 'text',
  //     },
  //     table: {
  //       type: {
  //         summary: 'string (plain text) or Drupal object',
  //       },
  //     },
  //   },
  //   // Icon Sizes
  //   illustration_size: {
  //     description: 'Illustration\'s size. This field uses only for "card_type == illustration" ',
  //     defaultValue: 'xsmall',
  //     control: {
  //       type: 'select',
  //       options: { 
  //         'X-Small': 'xsmall',
  //         'Small': 'small', 
  //         'Medium': 'medium', 
  //         'Large': 'large',
  //         'X-Large': 'xlarge', 
  //       },
  //     },
  //     table: {
  //       type: { summary: 'xsmall  | small | medium | large | xlarge ' },
  //       defaultValue: { summary: 'medium' },
  //     },
  //   },
  //   // Link Label
  //   link_label: {
  //     description: 'Visually displayed text',
  //     defaultValue: cardDataIllustration.link_label,
  //     control: {
  //       type: 'text'
  //     },
  //     table: {
  //       type: { 
  //         summary: 'string (plain text)', 
  //       },
  //     },
  //   },
  //   // Card Link-URL
  //   link_url: {
  //     description: 'Card link destination',
  //     defaultValue: cardDataIllustration.link_url,
  //     control: {
  //       type: 'text'
  //     },
  //     table: {
  //       type: { 
  //         summary: 'string (link url)', 
  //       },
  //     },
  //   },
  //   // Aria Label
  //   aria_label: {
  //     defaultValue: cardDataIllustration.aria_label,
  //     description: 'Read aloud by screen readers instead of the visually displayed <b>Label</b>.<br> <i> Use when the button\'s label is ambiguous if read aloud.  Eg “Read more” ...(about what?)</i>',
  //     control: {
  //       type: 'text',
  //     },
  //     table: {
  //       type: { 
  //         summary: 'string (plain text)', 
  //       },
  //     },
  //   },

  // },
};



export const SlidingMenu = () => slidingMenu(slidingMenuData);