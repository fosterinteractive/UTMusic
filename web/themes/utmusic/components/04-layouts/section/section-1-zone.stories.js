// Section with 1 Zone and 1 column Stories
import section from './section.twig';
import section1ZoneData from './section.yml';
import section1Zone12Data from './section--[12].yml';
import section1Zone10Data from './section--[10].yml';
import section1Zone8Data from './section--[8].yml';
import section1Zone6Data from './section--[6].yml';


/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Layouts/Section/1 Zone - 1 Column',
 
  argTypes: {
    // Text Label
    layout: {
      description: '1 Zone Section Layout',
      defaultValue: '',
      control: {
        type: 'select',
        options: { 
          'Default (Stretch)': '', 
          '1 Column Medium - [10]': '[10]', 
          '1 Column Small - [8]': '[8]', 
          '1 Column Extra Small - [6]': '[6]', 
          '1 Column Wide - [12] ': '[12]', 
        },
      },
      table: {
        type: { summary: 'null | [12] | [10] | [8] | [6]' },
      },
    },

    theme: {
      description: 'Section Colour Theme',
      defaultValue: section1ZoneData.theme,
      control: {
        type: 'select',
        options: { 
          'Default (White Background)': '', 
          'Black Background': 'black-bg', 
          'Light Yellow Background': 'light-yellow-bg', 
        },
      },
      table: {
        type: { summary: 'white-bg | black-bg | light-yellow-bg' },
        defaultValue: { summary: 'white-bg' },
      },
    },


    spacing_top: {
      description: 'Top vertical spacing',
      defaultValue: section1ZoneData.spacing_top,
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
      defaultValue: section1ZoneData.spacing_bottom,
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
      defaultValue: section1ZoneData.demo_class_section,
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
      defaultValue: section1ZoneData.demo_class_zone,
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
      description: 'Demo Content',
      defaultValue: section1ZoneData.content,
    },


  }
};

// Dynamic Button (Primary with some a11y features)

export const Default = ({layout, theme, spacing_top, spacing_bottom, demo_class_section, demo_class_zone, content}) =>

  section({
    layout,
    theme,
    spacing_top,
    spacing_bottom,
    demo_class_section,
    demo_class_zone,
    content
  });

Default.storyName = '1 col: Default 100% wide';

export const col12 = () => section(section1Zone12Data);
col12.storyName = '1 col: [12] wide';

export const col10 = () => section(section1Zone10Data);
col10.storyName = '1 col: [10] wide';

export const col8 = () => section(section1Zone8Data);
col8.storyName = '1 col: [8] wide';

export const col6 = () => section(section1Zone6Data);
col6.storyName = '1 col: [6] wide';

