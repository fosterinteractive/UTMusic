import card from './card.twig';
import cardHorizontal from './card--horizontal.twig';

import cardData from './card.yml';
import cardHorizontalData from './card--horizontal.yml';
import cardDataIllustration from './card--illustration.yml';
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
      defaultValue: 'image-icon',
      description: 'Card type. Horizontal Variation uses another template so it\'s unavailable for playground here',
      type: { required: 'true' },
      control: {
        type: 'select',
        options: { 
          'Image w/ Yellow Icon Overlay': 'image-icon', 
          'Large Image': 'image', 
          'Illustration': 'illustration',
        },
      },
      table: {
        type: {
          summary: 'image-icon | image | illustration | horizontal ',
        },
        defaultValue: { summary: 'image-icon' },
      },
    },
    //Card decoration
    card_decoration: {
      defaultValue: '',
      description: 'Card decoration. For Horizontal Variation we don\'t aplly this property',
      type: { required: false },
      control: {
        type: 'select',
        options: { 
          'None': '', 
          'Bordered': 'bordered', 
        },
      },
      table: {
        type: {
          summary: 'null | bordered ',
        },
        defaultValue: { summary: 'null' },
      },
    },
    //Card title
    title: {
      defaultValue: cardData.title,
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
    // Title position
    title_position: {
      description: 'Title\'s position',
      defaultValue: 'below',
      control: {
        type: 'select',
        options: { 
          'Above Image': 'above',
          'Below Image': 'below',
          'Yellow highlight below image': 'highlight-below',
        },
      },
      table: {
        type: { summary: 'above| below| highlight-below' },
        defaultValue: { summary:  'below' },
      },
    },
    //Card description
    description: {
      defaultValue: cardData.description,
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
      defaultValue: cardData.image,
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
    //Image variation
    image_variation: {
      description: 'Image decorations (variations)',
      type: { required: false },
      defaultValue: 'brush-shadow',
      control: {
        type: 'select',
        options: { 
          'Rounded Corners': 'rounded-corners', 
          'Rounded Corners with Shadow': 'rounded-corners-shadow',
          'Brush Stroke 1': 'brush1',
          'Brush Stroke 2': 'brush2', 
          'Brush Stroke with Yellow Shadow': 'brush-shadow', 
        },
      },
      table: {
        type: {
          summary: 'rounded-corners | rounded-corners-shadow | brush1 | brush2 | brush-shadow ',
        },
        defaultValue: { summary:  'none' },
      },
    },
    //Card illustration
    illustration: {
      defaultValue: 'briefcase',
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
      defaultValue: 'medium',
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
      defaultValue: cardData.link_label,
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
      defaultValue: cardData.link_url,
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
      defaultValue: cardData.aria_label,
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
  title_position,
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
    title_position,
    description,
    link_url,
    link_label,
    aria_label
  });

export const CardImageIcon = () => card(cardData);
export const CardImage = () => card(cardDataImage);
export const CardIllustration = () => card(cardDataIllustration);

export const CardHorizontal = () => cardHorizontal(cardHorizontalData);
