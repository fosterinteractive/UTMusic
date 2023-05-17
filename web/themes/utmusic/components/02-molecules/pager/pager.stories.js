import pager from './pager.twig';

import pagerFull from './pager.yml';
import pagerFirstActive from './pager-first-active.yml';
import pagerMini from './pager-mini.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Pager' };

export const full = () => pager(pagerFull);
export const fullFirstActive = () => pager(pagerFirstActive);
export const mini = () => pager(pagerMini);
