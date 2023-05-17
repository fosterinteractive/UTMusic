import inlineMenu from './inline-menu.twig';

import inlineMenuData from './inline-menu.yml';
import inlineMenuHorizontalData from './inline-menu--horizontal.yml';


/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Molecules/InlineMenu',
  component: inlineMenu,
  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Inline menu',
      },
    },
  },

  argTypes: {
    //Inline-menu variation
    variation: {
      defaultValue: inlineMenuHorizontalData.variation,
      description: 'Inline-menu variation',
      type: { required: 'true' },
      control: {
        type: 'select',
        options: { 
          'Default[Expanded 2col]': inlineMenuData.variation, 
          'Inline Horizontal': inlineMenuHorizontalData.variation, 
        },
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    // Inline-menu icon
    inline_menu_icon: {
      defaultValue: inlineMenuData.inline_menu_icon,
      description: 'Inline-menu icon',
      control: {
        type: 'text',
      },
      table: {
        type: { 
          summary: 'string (plain text)', 
        },
      },
    },
    //inline-menu icon size
    inline_menu_icon_size: {
      defaultValue: inlineMenuData.inline_menu_icon_size,
      description: 'Inline-menu icon size',
      control: {
        type: 'select',
        options: {
          Small: 'small',
          Medium: 'medium',
          Large: 'large',
        }
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    //Inline-menu icon color
    inline_menu_icon_color: {
      defaultValue: inlineMenuData.inline_menu_icon_color,
      description: 'Inline-menu icon color',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    // Title for inline-menu
    title: {
      description: 'Title for inline-menu',
      defaultValue: inlineMenuData.title,
      control: {
        type: 'text'
      },
      table: {
        type: { 
          summary: 'string (rich text)', 
        },
      },
    },
    // Description for inline-menu
    body: {
      description: 'Description for inline-menu',
      defaultValue: inlineMenuData.body,
      control: {
        type: 'text'
      },
      table: {
        type: { 
          summary: 'string (rich text)', 
        },
      },
    },
    // Links array
    links: {
      description: 'Array of links for inline-menu',
      defaultValue: inlineMenuData.links,
      table: {
        type: { 
          summary: 'string (rich text)', 
        },
      },
    },
  },
};

export const InlineMenu = ({
  variation,
  inline_menu_icon,
  inline_menu_icon_size,
  inline_menu_icon_color,
  title,
  body,
  links,

}) => 
  inlineMenu({
    variation,
    inline_menu_icon,
    inline_menu_icon_size,
    inline_menu_icon_color,
    title,
    body,
    links,
  });
export const InlineHorizontalMenu = () => inlineMenu(inlineMenuHorizontalData);
