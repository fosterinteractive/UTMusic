import iconSpriteList from './icon-sprite/icons-sprite.twig';
import iconSprite from './icon-sprite/icon-sprite.twig';

const svgIcons = require.context('../../../images/icons/', true, /\.svg$/);
const icons = [];
svgIcons.keys().forEach((key) => {
  const icon = key.split('./')[1].split('.')[0];
  
  icons.push(icon);
});

/**
 * Storybook Definition.
 */
export default { 
  title: 'Atoms/Icon', 
  parameters: {
    docs: {
      description: {
        component: 'Icons use SVG sprites or Font awesome JS (Not ready for production use). Icons either have an `a11y_label` that is read aloud by screen readers, or they have an `aria-hidden` attribute so they are skipped by screen readers. Fill colour is inherited from the parent\'s color property',
      },
    },
  },
  argTypes: {
    // Icon
    icon: {
      description: 'SVG symbol ID generated from images/filename.svg',
      type: {required: true},
      defaultValue: 'search',
      control: {
        type: 'text'
      },
      table: {
        type: { 
          summary: 'string (generated plain text)', 
        },
      },
    },
    // Icon Sizes
    size: {
      description: 'Icon\'s size',
      defaultValue: 'medium',
      control: {
        type: 'select',
        options: { 
          'XXX-Small': 'xxxsmal',
          'XX-Small': 'xxsmal',
          'X-Small': 'xsmall',
          'Small': 'small', 
          'Medium': 'medium', 
          'Large': 'large',
          'X-Large': 'xlarge', 
          'Inline': 'inline' 
        },
      },
      table: {
        type: { summary: 'string (xxxsmal, xxsmal, xsmall, small, medium, large, xlarge, inline)' },
        defaultValue: { summary: 'medium' },
      },
    },
    // A11y Label
    a11y_label: {
      description: 'Accessible Label',
      defaultValue: 'Search',
      control: {
        type: 'text'
      },
      table: {
        type: { 
          summary: 'string (link url)', 
        },
      },
    },
    // Demo Colour
    color: {
      description: 'Demo only - Parent element\'s color',
      control: {
        type: 'color'
      },
      table: {
        type: { 
          summary: 'string (valid css color)', 
        },
      },
    },
  },
};

export const SpriteIcon = ({ icon, size, a11y_label, color }) => iconSprite({ 
  icon,
  size, 
  a11y_label,
  color
});

export const SpriteIconsList = () => iconSpriteList({ icons });

export const SpriteIconXXXSmall = ({ icon, size }) => iconSprite({ 
  icon: 'phone',
  size: 'xxxsmall', 
});

export const SpriteIconXXSmall = ({ icon, size }) => iconSprite({ 
  icon: 'phone',
  size: 'xxsmall', 
});

export const SpriteIconXSmall = ({ icon, size }) => iconSprite({ 
  icon: 'phone',
  size: 'xsmall', 
});

export const SpriteIconSmall = ({ icon, size }) => iconSprite({ 
  icon: 'phone',
  size: 'small', 
});

export const SpriteIconMedium = ({ icon, size }) => iconSprite({ 
  icon: 'phone',
  size: 'medium', 
});

export const SpriteIconLarge = ({ icon, size }) => iconSprite({ 
  icon: 'phone',
  size: 'large', 
});

export const SpriteIconXLarge = ({ icon, size }) => iconSprite({ 
  icon: 'phone',
  size: 'xlarge', 
});