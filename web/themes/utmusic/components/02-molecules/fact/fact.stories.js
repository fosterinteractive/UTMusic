import factItem from './fact-item.twig';
import factGroup from './fact-group.twig';

import factItemData from './fact-item.yml';
import factItemHorizontalData from './fact-item--horizontal.yml';
import factGroupData from './fact-group.yml';

/**
 * Storybook Definition.
 */
export default { 
  title: 'Molecules/Fact',
  // component: fact,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Cards component',
      },
    },
  },

  argTypes: {
    variation: {
      defaultValue: 'vertical',
      description: 'Fact Item Layout',
      type: { required: 'true' },
      control: {
        type: 'select',
        options: { 
          'Vertical': 'vertical', 
          'Horizontal': 'horizontal',
        },
      },
      table: {
        type: {
          summary: ' vertical | horizontal ',
        },
        defaultValue: { summary: 'vertical' },
      },
    },
    illustration: {
      defaultValue: 'building',
      description: 'Fact Item Illustration',
      type: { required: true },
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text) or Drupal object',
        },
      },
    },
    alignment: {
      defaultValue: factItemData.alignment,
      description: 'Fact Item Alignmentt',
      type: { required: false },
      control: {
        type: 'select',
        options: { 
          'Left': 'left', 
          'Right': 'right',
        },
      },
      table: {
        type: {
          summary: ' left | right ',
        },
        defaultValue: { summary: 'left' },
      },
    },
    divider: {
      defaultValue: factItemData.divider,
      description: 'Fact Item Divider',
      type: { required: false },
      control: {
        type: 'select',
        options: { 
          'None': false, 
          'Divider': 'divider',
        },
      },
      table: {
        type: {
          summary: ' false | divider ',
        },
        defaultValue: { summary: 'false' },
      },
    },
    value: {
      defaultValue: factItemData.value,
      description: 'Fact item Value',
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
    description: {
      defaultValue: factItemData.description,
      description: 'Fact Item Description',
      type: { required: true },
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (simple text)',
        },
      },
    },

  },
};


export const FactItemDemo = ({
  variation,
  illustration,
  alignment,
  divider,
  value,
  description

}) => factItem({
  variation,
  illustration,
  alignment,
  divider,
  value,
  description
});


export const FactItemVertical = () => factItem(factItemData);
export const FactItemHorizontal = () => factItem(factItemHorizontalData);

export const FactGroup = () => factGroup(factGroupData);