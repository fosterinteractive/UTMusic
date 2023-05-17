import colors from './colors.twig';

import colorsData from './colors.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Base/Colors',
  parameters: { controls: { hideNoControlsWarning: 'true' } },
};

export const Palettes = () => colors(colorsData);

