import link from './link.twig';

import linkInternalData from './link--internal.yml';
import linkExternalData from './link--external.yml';


/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Links' };

export const LinkInternal = () => link(linkInternalData);
export const LinkExternal = () => link(linkExternalData);
