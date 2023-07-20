import drupalAttribute from 'drupal-attribute';

import '../../../js/libraries/priority-nav/dist/priority-nav';
import '../../../js/priority-plus-menu.config';

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
}

export const menuPriorityPlus = () => menuPriorityPlusComponent(menuPriorityPlusData);
