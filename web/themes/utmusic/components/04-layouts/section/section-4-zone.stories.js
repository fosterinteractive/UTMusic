// Buttons Stories
import section from './section.twig';
import section4ZoneData from './section--[3|3|3|3].yml';


/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Layouts/Section/4 Zone - 4 Columns',

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
      description: '4 Zone Section Layout',
      defaultValue: '[3|3|3|3]',
      control: {
        type: 'select',
        options: { 
          '[3|3|3|3]': '[3|3|3|3]]',
        },
      },
    },

        vertical_alignment: {
      description: 'Vertical Alignment',
      defaultValue: section4ZoneData.vertical_alignment,
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
      defaultValue: section4ZoneData.theme,
      control: {
        type: 'select',
        options: { 
          'Default (White Background)': '', 
          'Black Background': 'black-bg', 
        },
      },
      table: {
        type: { summary: 'null | black-bg' },
      },
    },


    spacing_top: {
      description: 'Top vertical spacing',
      defaultValue: section4ZoneData.spacing_top,
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
      defaultValue: section4ZoneData.spacing_bottom,
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
      defaultValue: section4ZoneData.demo_class_section,
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
      defaultValue: section4ZoneData.demo_class_zone,
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
      defaultValue: section4ZoneData.content,
    },

  }
};

// Dynamic Button (Primary with some a11y features)

export const section4zone = ({layout, theme, vertical_alignment, spacing_top, spacing_bottom,  demo_class_section, demo_class_zone, content}) =>

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

section4zone.storyName = '4 cols: [3|3|3|3] wide';


