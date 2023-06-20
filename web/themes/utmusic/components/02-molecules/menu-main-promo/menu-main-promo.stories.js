import promoComponent from './menu-main-promo.twig';

import promoDate from './menu-main-promo.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Menu-main-promo' };

export const promo = () => promoComponent(promoDate);

