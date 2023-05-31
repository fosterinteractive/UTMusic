// Buttons Stories
import button from './button.twig';
import buttonData from './button.yml';
import buttonDataSecondary from './button--secondary.yml';
import buttonDataIconRight from './button--icon-right.yml';
import buttonDataIconLeft from './button--icon-left.yml';
import buttonDataIcon from './button--icon.yml';


/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Atoms/Button',
  component: button,
  // decorators: [(story) => `<div class='test'>${story()}</div>`],

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
    label: {
      description: 'Visually displayed text',
      type: {required: true},
      defaultValue: buttonData.label,
      control: {
        type: 'text'
      },
      table: {
        type: { 
          summary: 'string (text plain)', 
        },
      },
    },
    // URL
    url: {
      description: 'Link destination',
      type: {required: true},
      defaultValue: buttonData.url,
      control: {
        type: 'text'
      },
      table: {
        type: { 
          summary: 'html encoded url', 
        },
      },
    },
    // Display Variation
    variation: {
      description: 'Button\'s visual appearance',
      defaultValue: '',
      control: {
        type: 'select',
        options: { 
          'Default (Primary)': '',
          'Secondary': 'secondary', 
          'Text w/ Icon on Right': 'icon-right', 
          'Text w/ Icon on Left': 'icon-left', 
          'Icon': 'icon',
          'Circle': 'circle', 
        },
      },
      table: {
        type: { summary: 'null | secondary | icon-right | icon-left | icon | circle' },
        defaultValue: { summary: 'null [Primary]'},
      },
    },
    // alignment
    alignment: {
      description: 'Button\'s visual alignment',
      defaultValue: 'left',
      control: {
        type: 'select',
        options: { 
          'Left': 'left',
          'Center': 'center', 
          'Right': 'right', 
        },
      },
      table: {
        type: { summary: 'left | center | right ' },
        defaultValue: { summary: ' left '},
      },
    },
    // Button Wrapper HTML element
    html_element: {
      description: 'Button Wrapper HTML element:',
      defaultValue: buttonData.html_element,
      control: {
        type: 'select',
        options: { '<a></a>': 'a', '<button></button>': 'button' },
      },
      table: {
        type: { summary: 'a | button' },
        defaultValue: { summary: 'a' },
      },
    },
    // Icon
    icon: {
      description: 'SVG symbol ID generated from images/filename.svg',
      defaultValue: 'link-shevron',
      control: {
        type: 'text'
      },
      table: {
        type: { 
          summary: 'string (generated plain text)', 
        },
      },
    },
    // Button HTML ID
    id: {
      defaultValue: buttonData.id,
      description: 'HTML id',
      control: {
        type: 'text'
      },
      table: {
        type: { 
          summary: 'string (plain text - no spaces)', 
        },
      },
    },
    // Button HTML target
    target: {
      defaultValue: buttonData.target,
      description: 'HTML link target',
      control: {
        type: 'select',
        options: { 'Null': '', '_blank': '_blank'},
      },
      table: {
        type: { 
          summary: 'Null | _blank', 
        },
      },
    },
    // Aria Label
    aria_label: {
      defaultValue: buttonData.aria_label,
      description: 'Read aloud by screen readers instead of the visually displayed <b>label</b>',
      control: {
        type: 'text',
      },
      table: {
        type: { 
          summary: 'string (plain text)', 
        },
      },
    },
    // Aria Labelby
    aria_labelledby: {
      // defaultValue: buttonData.aria_labelledby,
      description: 'Text of referenced ID is read aloud by screen readers instead of the visually displayed <b>label</b>.<br> <b>Do not use in combination</b> with <b>aria_label</b>',
      control: {
        type: 'text',
      },
      table: {
        type: { 
          summary: 'HTML ID (plain text - no spaces)', 
        },
      },
    },
  },
};

// Dynamic Button (Primary with some a11y features)

export const primary = ({ label, variation, alignment, html_element, icon, url, id, target, aria_label, aria_labelledby }) =>

  button({
    label,
    variation,
    alignment,
    html_element,
    icon,
    url,
    id,
    target,
    aria_label,
    aria_labelledby
  });

export const secondary = () => button(buttonDataSecondary);

export const iconRight = () => button(buttonDataIconRight);

export const iconLeft = () => button(buttonDataIconLeft);

export const icon = () => button(buttonDataIcon);
