import logo from './logo.twig';

import logoData from './logo.yml';
import logoImgData from './logo--image.yml';

/**
 * Storybook Definition.
 */
export default { 
  title: 'Molecules/Logo',
  component: logo,
  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'SVG component is included into Logo',
      },
    },
  },
  argTypes: {
    variation: {
      defaultValue: logoData.variation,
      description: 'Logo variation',
      type: { required: 'true' },
      control: {
        type: 'select',
        options: { 
          'Default[logo with svg]': logoData.variation, 
          'Logo with img tag': logoImgData.variation, 
        },
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    logo_image_src: {
      defaultValue: logoImgData.logo_image_src,
      description: 'Logo img src',
      control: {
        type: 'text',
      },
      table: {
        type: { 
          summary: 'string (plain text)', 
        },
      },
    },
    // Logo SVG icon
    logo_icon: {
      defaultValue: logoData.logo_icon,
      description: 'Logo svg icon',
      control: {
        type: 'text',
      },
      table: {
        type: { 
          summary: 'string (plain text)', 
        },
      },
    },
    //logo icon size
    logo_icon_size: {
      defaultValue: logoData.logo_icon_size,
      description: 'Logo icon size',
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
    //logo icon color
    logo_icon_color: {
      defaultValue: logoData.logo_icon_color,
      description: 'Logo icon color',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    //logo_icon_a11y_label
    logo_icon_a11y_label: {
      defaultValue: logoData.logo_icon_a11y_label,
      description: 'Accessible text for icon',
      control: {
        type: 'text',
      },
      table: {
        type: { 
          summary: 'string (plain text)', 
        },
      },
    },
    // Logo visually hidden text
    text: {
      description: 'Visually hidden text',
      defaultValue: logoData.text,
      control: {
        type: 'text'
      },
      table: {
        type: { 
          summary: 'string (rich text)', 
        },
      },
    },
    // URL
    url: {
      description: 'Link destination',
      defaultValue: logoData.url,
      control: {
        type: 'text'
      },
      table: {
        type: { 
          summary: 'string (link url)', 
        },
      },
    },
    // Logo aria-Label
    logo_aria_label: {
      defaultValue: logoData.logo_aria_label,
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
  },

};

export const Logo = ({ variation, logo_image_src,  logo_icon, logo_icon_size, logo_icon_color, logo_icon_a11y_label, text, url, logo_aria_label }) => 
  logo({ 
    variation,
    logo_image_src,
    logo_icon,
    logo_icon_size,
    logo_icon_color,
    logo_icon_a11y_label,
    text,
    url,
    logo_aria_label,
  });

  export const LogoImage = () => logo(logoImgData);
  