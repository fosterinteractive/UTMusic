import menu from './menu-mobile-example.twig';

// import menuMobile from './menu-mobile.yml';

import '../../07-vendor/libraries/mmenu/mmenu';
import '../../07-vendor/libraries/mmenu.config';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Menu Mobile' };

export const mobile = () => menu();
