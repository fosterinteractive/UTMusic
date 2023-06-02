import card from './card.twig';

import cardDataIllustration from './card--illustration.yml';
import cardDataIllustrationTags from './card--illustration-with-tags.yml';

import cardDataImage from './card--image.yml';


/**
 * Storybook Definition.
 */
export default { 
  title: 'Molecules/Card',
  component: card,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Cards component',
      },
    },
  },

  argTypes: {
    //Card variation
    variation: {
      defaultValue: 'illustration',
      description: 'Card type',
      type: { required: 'true' },
      control: {
        type: 'select',
        options: { 
          'Large Image': 'image', 
          'Illustration': 'illustration',
        },
      },
      table: {
        type: {
          summary: ' image | illustration ',
        },
        defaultValue: { summary: 'illustration' },
      },
    },
    //Card title
    title: {
      defaultValue: cardDataIllustration.title,
      description: 'Card title',
      type: { required: false },
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    //Card description
    description: {
      defaultValue: cardDataIllustration.description,
      description: 'Card description',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    //Card Image
    image: {
      defaultValue: cardDataIllustration.image,
      description: 'Card image',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'image',
        },
      },
    },
    //Card illustration
    illustration: {
      defaultValue: 'featured_event',
      description: 'Card illustration',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text) or Drupal object',
        },
      },
    },
    // Icon Sizes
    illustration_size: {
      description: 'Illustration\'s size. This field uses only for "card_type == illustration" ',
      defaultValue: 'xsmall',
      control: {
        type: 'select',
        options: { 
          'X-Small': 'xsmall',
          'Small': 'small', 
          'Medium': 'medium', 
          'Large': 'large',
          'X-Large': 'xlarge', 
        },
      },
      table: {
        type: { summary: 'xsmall  | small | medium | large | xlarge ' },
        defaultValue: { summary: 'medium' },
      },
    },
    // Link Label
    link_label: {
      description: 'Visually displayed text',
      defaultValue: cardDataIllustration.link_label,
      control: {
        type: 'text'
      },
      table: {
        type: { 
          summary: 'string (plain text)', 
        },
      },
    },
    // Card Link-URL
    link_url: {
      description: 'Card link destination',
      defaultValue: cardDataIllustration.link_url,
      control: {
        type: 'text'
      },
      table: {
        type: { 
          summary: 'string (link url)', 
        },
      },
    },
    // Aria Label
    aria_label: {
      defaultValue: cardDataIllustration.aria_label,
      description: 'Read aloud by screen readers instead of the visually displayed <b>Label</b>.<br> <i> Use when the button\'s label is ambiguous if read aloud.  Eg “Read more” ...(about what?)</i>',
      control: {
        type: 'text',
      },
      table: {
        type: { 
          summary: 'string (plain text)', 
        },
      },
    },

  },
};

export const CardDemo = ({ 
  variation,
  card_decoration, 
  image_variation, 
  image, 
  title, 
  description, 
  illustration,
  illustration_size, 
  link_url, 
  link_label,
  aria_label
 }) => 
  card({ 
    variation,
    card_decoration,
    image_variation,
    image,
    illustration, 
    illustration_size,
    title,
    description,
    link_url,
    link_label,
    aria_label
  });

export const CardIllustration = () => card(cardDataIllustration);
export const CardIllustrationWithTags = () => card(cardDataIllustrationTags);

export const CardImage = () => card(cardDataImage);