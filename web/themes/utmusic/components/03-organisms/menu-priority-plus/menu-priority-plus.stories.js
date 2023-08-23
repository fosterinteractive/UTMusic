import drupalAttribute from 'drupal-attribute';

import './priority-plus-menu.config';

import menuPriorityPlusComponent from './menu-priority-plus.twig';

import menuPriorityPlusData from './menu-priority-plus.yml';

menuPriorityPlusData.attribute = new drupalAttribute();
for (var key in menuPriorityPlusData.items) {
  menuPriorityPlusData.items[key].attributes = new drupalAttribute();
}

/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Organisms/Menu/PriorityPlus',
  decorators: [(Story) => `
    <style>
      .m-menu-priority-plus .nav__dropdown {
        width: calc(100vw - 2rem);
      }

      .m-menu-priority-plus__item.is-active a {
        color: hsl(219, 54%, 26%);
        border-color: hsl(197, 75%, 68%);
      }

      @media (min-width: 48em) {
        .m-menu-priority-plus .nav__dropdown {
          width: auto;
        }
      }
      
    </style>
    <div class="l-page__menu-priority-plus">${Story()}</div>`],
}

export const menuPriorityPlus = () => menuPriorityPlusComponent(menuPriorityPlusData);
