import menu from './menu-mobile-example.twig';

// import menuMobile from './menu-mobile.yml';
import '../../../js/libraries/mmenu/mmenu';
import '../../../js/libraries/mmenu.config';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Menu' };

export const mobile = () => menu();
