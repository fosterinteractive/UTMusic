import factItem from './fact-item.twig';
import factGroup from './fact-group.twig';

import factItemData from './fact-item.yml';
import factItemLineData from './fact-item--line.yml';
import factGroupCardData from './fact-group--card.yml';
import factGroupLineData from './fact-group--line.yml';

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
      defaultValue: 'card',
      description: 'Fact Item Layout',
      type: { required: 'true' },
      control: {
        type: 'select',
        options: { 
          'Card': 'card', 
          'Line': 'line',
        },
      },
      table: {
        type: {
          summary: ' card | line ',
        },
        defaultValue: { summary: 'card' },
      },
    },
    color: {
      defaultValue: 'teal',
      description: 'Fact Item Color',
      type: { required: 'true' },
      control: {
        type: 'select',
        options: { 
          'Teal': 'teal', 
          'Magenta': 'magenta',
        },
      },
      table: {
        type: {
          summary: ' teal | magenta ',
        },
        defaultValue: { summary: 'teal' },
      },
    },
    illustration: {
      defaultValue: 'graduate',
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
  description,
  color,

}) => factItem({
  variation,
  illustration,
  alignment,
  divider,
  value,
  description,
  color,
});


export const FactItemCard = () => factItem(factItemData);
export const FactItemLine = () => factItem(factItemLineData);

export const FactGroupCard = () => factGroup(factGroupCardData);
export const FactGroupLine = () => factGroup(factGroupLineData);