import socialComponent from './social.twig';

import socialData from './social.yml';

/**
 * Storybook Definition.
 */

export default { 
  title: 'Molecules/Social',
  component: socialComponent,
 
};

export const Social = () => 

socialComponent(socialData);  