import snippet from './snippet.twig';

import snippetData from './snippet.yml';

/**
 * Storybook Definition.
 */

export default { 
  title: 'Molecules/Snippet',
  component: snippet,

  argTypes: {
    // Snippet title
    title: {
      description: 'Snippet title field',
      type: {required: true},
      defaultValue: snippetData.title,
      control: {
        type: 'text'
      },
      table: {
        type: { 
          summary: 'string (rich text)', 
        },
      },
    },
    // Snippet summary
    summary: {
      description: 'Snippet summary field',
      type: {required: false},
      defaultValue: snippetData.summary,
      control: {
        type: 'text'
      },
      table: {
        type: { 
          summary: 'string (rich text)', 
        },
      },
    },
  },
};

export const Snippet = ({
  title,  
  summary, 
   }) => 

    snippet({
      title,
      summary,
    });  