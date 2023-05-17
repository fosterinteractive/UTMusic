// Buttons Stories
import section from './section.twig';
import section2ZoneData from './section--[6|6].yml';
import section2Zone2col55Data from './section--[5|5].yml';
import section2Zone2col44Data from './section--[4|4].yml';
import section2Zone2col75Data from './section--[7|5].yml';
import section2Zone2col57Data from './section--[5|7].yml';
import section2Zone2col48Data from './section--[4|8].yml';
import section2Zone2col84Data from './section--[8|4].yml';

/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Layouts/Section/2 Zone - 2 Columns',

  // Properties of a component: See https://storybook.js.org/docs/react/api/argtypes
  // Docs table of properties: See https://storybook.js.org/docs/html/writing-docs/doc-block-argstable#customizing
  //
  // Use the yaml file to load the component's default value for storybook 
  // argTypes: {componentFieldName: {defaultValue: componentData.componentFieldName }}
  // 
  // The table documentation should describe default values provided in the twig component not the yml file
  // argTypes: {componentFieldName: {table: {defaultValue: 'value created in twig template' }}}
  //
  // Order by: Required properties > Properties with defaults (in twig) > Optional properties
  
  
  argTypes: {
    // Text Label
    layout: {
      description: '2 Zone Section Layout',
      defaultValue: '[6|6]',
      control: {
        type: 'select',
        options: { 
          '[4|4]': '[4|4]',
          '[5|5]': '[5|5]',
          '[6|6]': '[6|6]',
          '[7|5]': '[7|5]',
          '[5|7]': '[5|7]', 
          '[8|4]': '[8|4]', 
          '[4|8]': '[4|8]', 
        },
      },
    },

    vertical_alignment: {
      description: 'Vertical Alignment',
      defaultValue: section2ZoneData.theme,
      control: {
        type: 'select',
        options: { 
          'Align Top': 'top',
          'Align Center': 'center',
          'Stretch Height': 'stretch',
        },
      },
      table: {
        type: { summary: 'null | top | center | stretch' },
      },
    },

    theme: {
      description: 'Section Colour Theme',
      defaultValue: section2ZoneData.theme,
      control: {
        type: 'select',
        options: { 
          'Default (White Background)': '', 
          'Black Background': 'black-bg', 
          'Light Yellow Background': 'light-yellow-bg', 
        },
      },
      table: {
        type: { summary: 'null | black-bg | light-yellow-bg' },
      },
    },


    spacing_top: {
      description: 'Top vertical spacing',
      defaultValue: section2ZoneData.spacing_top,
      control: {
        type: 'select',
        options: { 
          'Default (None)': '',
          'Small': 'small', 
          'Medium': 'medium', 
          'Large': 'large', 
        },
      },
      table: {
        type: { summary: 'null | small | medium | large '},
      },
    },

    spacing_bottom: {
      description: 'Bottom vertical spacing',
      defaultValue: section2ZoneData.spacing_bottom,
      control: {
        type: 'select',
        options: { 
          'Default (None)': '',
          'Small': 'small', 
          'Medium': 'medium', 
          'Large': 'large', 
        },
      },
      table: {
        type: { summary: 'null | small | medium | large '},
      },
    },

    demo_class_section: {
      description: 'Demo Class For Section',
      defaultValue: section2ZoneData.demo_class_section,
      control: {
        type: 'select',
        options: { 
          'None': '',
          'Red': 'storybook-section__demo--red', 
          'Green': 'storybook-section__demo--green', 
          'Blue': 'storybook-section__demo--blue', 
        },
      },
    },


    demo_class_zone: {
      description: 'Demo Class Zones',
      defaultValue: section2ZoneData.demo_class_zone,
      control: {
        type: 'select',
        options: { 
          'None': '',
          'Red': 'storybook-section__demo--red', 
          'Green': 'storybook-section__demo--green', 
          'Blue': 'storybook-section__demo--blue', 
        },
      },
    },

    content: {
      defaultValue: section2ZoneData.content,
    },

  }
};

// Dynamic Button (Primary with some a11y features)

export const Section2Zone = ({layout, theme, vertical_alignment, spacing_top, spacing_bottom,  demo_class_section, demo_class_zone, content}) =>

section({
    layout,
    theme, 
    vertical_alignment,
    spacing_top, 
    spacing_bottom, 
    demo_class_section,
    demo_class_zone,
    content
  });


  Section2Zone.storyName = '2 cols: [6|6] wide';



export const section2Zone2col55 = () => section(section2Zone2col55Data);
section2Zone2col55.storyName = '2 cols: [5|5] wide';

export const section2Zone2col44 = () => section(section2Zone2col44Data);
section2Zone2col44.storyName = '2 cols: [4|4] wide';

export const section2Zone2col75 = () => section(section2Zone2col75Data);
section2Zone2col75.storyName = '2 cols: [7|5] wide';

export const section2Zone2col57 = () => section(section2Zone2col57Data);
section2Zone2col57.storyName = '2 cols: [5|7] wide';

export const section2Zone2col48 = () => section(section2Zone2col48Data);
section2Zone2col48.storyName = '2 cols: [4|8] wide';

export const section2Zone2col84 = () => section(section2Zone2col84Data);
section2Zone2col84.storyName = '2 cols: [8|4] wide';

