import sequenceList from './sequence-list.twig';
import sequenceListItem from './sequence-list--item.twig';

import sequenceListData from './sequence-list.yml';
import sequenceListItemData from './sequence-list--item.yml';

import sequenceListSmallData from './sequence-list--small.yml';
import sequenceListLargeData from './sequence-list--large.yml';


/**
 * Storybook Definition.
 */
export default { 
  title: 'Molecules/Sequence List',
  component: sequenceList,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Sequence List component',
      },
    },
  },

  argTypes: {
    //Step variation
    variation: {
      defaultValue: 'medium',
      description: 'Step Number Size',
      type: { required: 'true' },
      control: {
        type: 'select',
        options: { 
          'Small': 'small', 
          'Medium': 'medium',
          'Large': 'large',
        },
      },
      table: {
        type: {
          summary: ' small | medium | large ',
        },
        defaultValue: { summary: 'medium' },
      },
    },
    //Step number
    step_number: {
      defaultValue: sequenceListItemData.step_number,
      description: 'Step Number',
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
    //Title
    title: {
      defaultValue: sequenceListItemData.title,
      description: 'Sequence Item Title',
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
    //Description
    description: {
      defaultValue: sequenceListItemData.description,
      description: 'Sequence Item Description',
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

export const SequenceItemDemo = ({
  variation,
  step_number,
  title,
  description
}) => sequenceListItem({
  variation,
  step_number,
  title,
  description
});

export const SequenceFullListSmall = () => sequenceList(sequenceListSmallData);
export const SequenceFullListMedium = () => sequenceList(sequenceListData);
export const SequenceFullListLarge = () => sequenceList(sequenceListLargeData);
