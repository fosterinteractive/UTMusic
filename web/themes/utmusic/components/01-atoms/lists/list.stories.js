import list from './list.twig';

import listData from './list.yml';
import listOrderedAlphaData from './list--ordered-alpha.yml';
import listOrderedDecimalData from './list--ordered-decimal.yml';
import listOrderedRomanData from './list--ordered-roman.yml';


/**
 * Storybook Definition.
 */
export default { 
  title: 'Atoms/Lists',
  component: list,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Component List',
      },
    },
  },

  argTypes: {
    //List variation
    variation: {
      defaultValue: listData.variation,
      description: 'List variation',
      type: { required: 'true' },
      control: {
        type: 'select',
        options: { 
          'Default[Unordered]': listData.variation, 
          'Ordered Alpha': listOrderedAlphaData.variation, 
          'Ordered Decimal': listOrderedDecimalData.variation, 
          'Ordered Roman': listOrderedRomanData.variation, 
        },
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
  },   

};


export const List = ({ variation }) => 
  list({
    variation,
    items: listData.items,
  });

export const listOrderedDecimal = () => list(listOrderedDecimalData);
export const listOrderedAlpha = () => list(listOrderedAlphaData);
export const listOrderedRoman = () => list(listOrderedRomanData);
