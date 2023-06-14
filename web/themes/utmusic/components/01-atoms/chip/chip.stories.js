import chip from './chip.twig';

import chipData from './chip.yml';
import chipLinkData from './chip--link.yml';
import chipIconData from './chip--icon.yml';
import chipIconLeftData from './chip--icon-left.yml';

/**
 * Storybook Definition.
 */
export default { 
  title: 'Atoms/Chip',
  component: chip,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Chips are typically tags on cards, listings, or pages. Text are simple infomation. Links often link to lists of content matching the tag. Links & icons with a "X" icon remove icon often function as a UI to remove a currently applied filter.',
      },
    },
  },

  argTypes: {

    //Chip text
    text: {
      defaultValue: chipData.text,
      description: 'Visually displayed text label',
      type: { required: 'true' },
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    //Chip variation
    variation: {
      defaultValue: '',
      description: 'Chip variations',
      control: {
        type: 'select',
        options: { 
          'Default (Text only)': '', 
          'Link': 'link', 
          'Link & Icon': 'icon',
        },
      },
      table: {
        type: {
          summary: 'null | link | filter',
        },
      },
    },
    //Chip url
    url: {
      defaultValue: chipIconData.url,
      description: 'Chip url',
      table: {
        type: {
          summary: 'html encoded url',
        },
      },
    },
    // Chip icon
    icon: {
      defaultValue: chipIconData.icon,
      description: 'SVG symbol ID generated from images/filename.svg',
      control: {
        type: 'text',
      },
      table: {
        type: { 
          summary: 'string (generated plain text)', 
        },
      },
    },
    //chip_icon_a11y_label
    aria_label: {
      defaultValue: chipIconData.aria_label,
      description: 'Read aloud by screen readers instead of the visually displayed <b>text</b>',
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

export const Chip = ({ variation, text, url, attributes, icon, aria_label }) => 
  chip({ 
    variation,
    text,
    url,
    attributes,
    icon,
    aria_label,
  });

export const ChipLink = () => chip(chipLinkData);
export const chipIcon = () => chip(chipIconData);
export const chipIconLeft = () => chip(chipIconLeftData);
