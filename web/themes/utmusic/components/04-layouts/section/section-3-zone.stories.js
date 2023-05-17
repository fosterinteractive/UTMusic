// Buttons Stories
import section from './section.twig';
import section3ZoneData from './section--[4|4|4].yml';


/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Layouts/Section/3 Zone - 3 Columns',

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
      description: '3 Zone Section Layout',
      defaultValue: '[4|4|4]',
      control: {
        type: 'select',
        options: { 
          '[4|4|4]': '[4|4|4]]',
        },
      },
    },

    vertical_alignment: {
      description: 'Vertical Alignment',
      defaultValue: section3ZoneData.vertical_alignment,
      control: {
        type: 'select',
        options: { 
          'Align Top': 'l-section-vertical-alignment--top',
          'Align Center': 'l-section-vertical-alignment--center',
          'Stretch Height': 'l-section-vertical-alignment--stretch',
        },
      },
      table: {
        type: { summary: 'null | top | center | stretch' },
      },
    },


    theme: {
      description: 'Section Colour Theme',
      defaultValue: section3ZoneData.theme,
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
      defaultValue: section3ZoneData.spacing_top,
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
      defaultValue: section3ZoneData.spacing_bottom,
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
      defaultValue: section3ZoneData.demo_class_section,
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
      defaultValue: section3ZoneData.demo_class_zone,
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
      defaultValue: section3ZoneData.content,
    },

  }
};

// Dynamic Button (Primary with some a11y features)

export const section3zone = ({layout, theme, vertical_alignment, spacing_top, spacing_bottom,  demo_class_section, demo_class_zone, content}) =>

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




  // export const section3zone = () => section(section3ZoneData);
  section3zone.storyName = '3 cols: [4|4|4] wide';


