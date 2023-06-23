// Sections with 1 Zone and grids within them
import section from './section.twig';
import section1Zone2col10Data from './section--2col[10].yml';
import section1Zone2col12Data from './section--2col[12].yml';
import section1Zone3col12Data from './section--3col[12].yml';
import section1Zone4col12Data from './section--4col[12].yml';

/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Layouts/Section/1 Zone - Grids',
 
  argTypes: {
    // Text Label
    layout: {
      description: '1 Zone Section Layout',
      defaultValue: section1Zone3col12Data.spacing_top,
      control: {
        type: 'select',
        options: { 
          'Default (Stretch)': '', 
          '1 Column Wide - [12]': '[12]', 
          '1 Column Medium - [10]': '[10]', 
        },
      },
      table: {
        type: { summary: 'null | [12] | [10]' },
      },
    },

    vertical_alignment: {
      description: 'Vertical Alignment',
      defaultValue: section1Zone3col12Data.theme,
      control: {
        type: 'select',
        options: { 
          'Align Top': 'top',
          'Align Center': 'center',
          'Stretch Height': 'stretch',
        },
      },
    },


    theme: {
      description: 'Section Colour Theme',
      defaultValue: section1Zone3col12Data.theme,
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

    zone_1_child_layout: {
      description: 'Child Grid Layout',
      defaultValue: section1Zone3col12Data.zone_1_child_layout,
      control: {
        type: 'select',
        options: { 
          '1 Column Flex': 'l-flex--1col', 
          '2 Column Flex': 'l-flex--2col', 
          '3 Column Flex': 'l-flex--3col', 
          '4 Column Flex': 'l-flex--4col',
        },
      },
      table: {
        type: { summary: 'l-flex--1col | l-flex--2col | l-flex--3col' },
      },
    },

    spacing_top: {
      description: 'Top vertical spacing',
      defaultValue: section1Zone3col12Data.spacing_top,
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
      defaultValue: section1Zone3col12Data.spacing_bottom,
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
      defaultValue: section1Zone3col12Data.demo_class_section,
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
      defaultValue: section1Zone3col12Data.demo_class_zone,
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
      defaultValue: section1Zone3col12Data.content,
    },


  }
};

// Dynamic Button (Primary with some a11y features)

export const col12Grid3 = ({layout, vertical_alignment, theme, zone_1_child_layout, spacing_top, spacing_bottom,  demo_class_section, demo_class_zone, content}) =>

section({
    layout,
    vertical_alignment,
    theme, 
    zone_1_child_layout,
    spacing_top,
    spacing_bottom,
    demo_class_section,
    demo_class_zone,
    content
  });


col12Grid3.storyName = 'flex 3 cols: [12] wide';


export const section1Zone2col10 = () => section(section1Zone2col10Data);
section1Zone2col10.storyName = 'flex 2 cols: [10] wide';


export const section1Zone2col12 = () => section(section1Zone2col12Data);
section1Zone2col12.storyName = 'flex 2 cols: [12] wide';

export const section1Zone4col12 = () => section(section1Zone4col12Data);
section1Zone4col12.storyName = 'flex 4 cols: [12] wide';


