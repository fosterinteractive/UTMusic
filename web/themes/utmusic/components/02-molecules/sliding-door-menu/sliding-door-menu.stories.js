import slidingMenu from './sliding-door-menu.twig';

import slidingMenuData from './sliding-door-menu.yml';

import './sliding-door-menu';
/**
 * Storybook Definition.
 */
export default { 
  title: 'Molecules/Sliding Door Menu',
  component: slidingMenu,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Sliding Door Menu component',
      },
    },
  },


};



export const SlidingMenu = () => slidingMenu(slidingMenuData);