import hero from './content-header.twig';

import contentHeaderOverlayData from './content-header--overlay.yml';
import contentHeaderRightData from './content-header--right.yml';
import contentHeaderTextData from './content-header--text.yml';

/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Organisms/Content Header',
  component: hero,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Organism Content Header. Content Header Banners appear at the top of advanced pages',
      },
    },
  },
}

export const ContentHeaderImageOverlay = () => hero(contentHeaderOverlayData);
export const ContentHeaderImageRight = () => hero(contentHeaderRightData);
export const ContentHeaderText = () => hero(contentHeaderTextData);

