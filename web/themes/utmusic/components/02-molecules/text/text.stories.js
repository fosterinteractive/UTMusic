import text from './text.twig';

import textData from './text.yml';

/**
 * Storybook Definition with data documentation and controls
 */
 export default {
  title: 'Molecules/Text',
  component: text,
  
  argTypes: {
    // Text
    body: {
      description: 'Text',
      type: {required: true},
      defaultValue: textData.body,
      control: {
        type: 'text'
      },
      table: {
        type: { summary: 'string (plain text)' },
        defaultValue: { Defoult: '' },
      },
    },
  },
};


export const example = ({ body }) =>

text({
  body,
});
