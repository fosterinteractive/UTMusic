import ctaComponent from './cta.twig';

import ctaData from './cta.yml';


/**
 * Storybook Definition.
 */
export default { 
  title: 'Molecules/Call to Action',
  component: ctaComponent,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Call to Action component',
      },
    },
  },

  argTypes: {
    //CTA variation
    variation: {
      defaultValue: 'image',
      description: 'CTA type',
      type: { required: 'true' },
      control: {
        type: 'select',
        options: { 
          'With Image': 'image', 
          'Text only': 'text',
        },
      },
      table: {
        type: {
          summary: ' image | text ',
        },
        defaultValue: { summary: 'text' },
      },
    },
    //CTA title
    title: {
      defaultValue: ctaData.title,
      description: 'CTA title',
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
    //CTA description
    description: {
      defaultValue: ctaData.description,
      description: 'CTA description',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    //CTA Image
    image: {
      defaultValue: ctaData.image,
      description: 'CTA image',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'image',
        },
      },
    },
    // target_primary: 
    
    // target_secondary: _blank
    
    // Primary Button Link Label
    link_label_primary: {
      description: 'Visually displayed text',
      defaultValue: ctaData.link_label_primary,
      control: {
        type: 'text'
      },
      table: {
        type: { 
          summary: 'string (plain text)', 
        },
      },
    },
    // Primary Button Link URL
    link_url_primary: {
      description: 'CTA link destination',
      defaultValue: ctaData.link_url_primary,
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
    aria_label_primary: {
      defaultValue: ctaData.aria_label_primary,
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

    // Secondary Button Link Label
    link_label_secondary: {
      description: 'Visually displayed text',
      defaultValue: ctaData.link_label_secondary,
      control: {
        type: 'text'
      },
      table: {
        type: { 
          summary: 'string (plain text)', 
        },
      },
    },
    // Secondary Button Link URL
    link_url_secondary: {
      description: 'CTA link destination',
      defaultValue: ctaData.link_url_secondary,
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
    aria_label_secondary: {
      defaultValue: ctaData.aria_label_secondary,
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

export const CallToAction = ({
  variation,
  title,
  description,
  image,
  link_url_primary,
  link_label_primary,
  aria_label_primary,
  target_primary,
  link_url_secondary,
  link_label_secondary,
  aria_label_secondary,
  target_secondary,
}) => ctaComponent({
  variation,
  title,
  description,
  image,
  link_url_primary,
  link_label_primary,
  aria_label_primary,
  target_primary,
  link_url_secondary,
  link_label_secondary,
  aria_label_secondary,
  target_secondary,
});
