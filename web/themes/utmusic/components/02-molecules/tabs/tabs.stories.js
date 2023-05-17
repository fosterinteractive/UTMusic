import tabs from './tabs--demo.twig';

import tabsData from './tabs.yml';

import './tabs';

/**
 * Storybook Definition.
 */
export default { 
  title: 'Molecules/Tabs',
  component: tabs,
};

export const JSTabs = () => tabs(tabsData);
