import readmore from './readmore.twig';
import readmoreInline from './readmore--inline.twig';

import readmoreData from './readmore.yml';
import readmoreInlineData from './readmore--inline.yml';


import './readmore';

export default {
  title: 'Utilities/ReadMore',
  component: readmore,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Read More button use external library https://github.com/stephenscaff/read-smore',
      },
    },
  },

  argTypes: {
    wordsCount: {
      defaultValue: readmoreData.wordsCount,
      description: 'Sets max word count. Read Smore defaults to by word if nothing is defined',
      control: {
        type: 'number',
      },
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    charsCount: {
      defaultValue: readmoreData.charsCount,
      description: 'Sets max character count.',
      control: {
        type: 'number',
      },
      table: {
        type: {
          summary: 'number',
        },
      },
    },
  },

};

export const ReadMore = ({
  wordsCount,
  charsCount,
}) => 
  readmore({
    wordsCount,
    charsCount,
  });
export const ReadMoreInline = () => readmoreInline(readmoreInlineData);

