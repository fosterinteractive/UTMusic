// import drupalAttribute from 'drupal-attribute';

import select from './select.twig';

import selectData from './select.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Select' };

export const example = () => select(selectData);

