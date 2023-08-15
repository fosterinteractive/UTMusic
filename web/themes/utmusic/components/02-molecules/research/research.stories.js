import research from './research.twig';

import researchData from './research.yml';

/**
 * Storybook Definition.
 */
export default { 
  title: 'Molecules/Research',
  component: research,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Research Centre component',
      },
    },
  },

  argTypes: {
    title: {
      defaultValue: researchData.title,
      description: 'Researh Centre title',
      type: { required: true },
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    subtitle: {
      defaultValue: researchData.subtitle,
      description: 'Researh Centre subtitle',
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
    description: {
      defaultValue: researchData.description,
      description: 'Research Centre description',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (simple text)',
        },
      },
    },
    // Link Label
    label: {
      description: 'Visually displayed text',
      defaultValue: researchData.label,
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
    url: {
      description: 'Research Centre link destination',
      defaultValue: researchData.url,
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
      defaultValue: researchData.aria_label,
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


export const ResearchCentre = () => research(researchData);