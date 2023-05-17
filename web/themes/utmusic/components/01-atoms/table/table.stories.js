import table from './table.twig';

import tableData from './table.yml';
import tableDataEqualCols from './table--equal-cols.yml';
import tableDataContentColumns from './table--content-columns.yml';


/**
 * Storybook Definition with data documentation and controls
 */
 export default {
  title: 'Atoms/Table',
  component: table,
  
  argTypes: {
    // Display Variation
    variation: {
      description: 'Button\'s visual appearance',
      defaultValue: tableData.variation,
      control: {
        type: 'select',
        options: { 'Defoult': '', 'Equal columns': 'equal-columns', 'Content columns': 'content-columns' },
      },
      table: {
        type: { summary: 'string (plain text)' },
        defaultValue: { Defoult: '' },
      },
    },
  },
};


export const example = ({ variation }) =>

table({
  variation,
  header: tableData.header,
  rows: tableData.rows,
});

export const EqualColumns = () => table(tableDataEqualCols);

export const ContentColumns = () => table(tableDataContentColumns);
