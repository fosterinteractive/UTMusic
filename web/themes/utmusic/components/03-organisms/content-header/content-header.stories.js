import hero from './content-header.twig';

import contentHeaderLandscapeData from './content-header--landscape.yml';
import contentHeaderPortraitData from './content-header--portrait.yml';
import contentHeaderVideoData from './content-header--video.yml';
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

export const ContentHeaderImageLandscape = () => hero(contentHeaderLandscapeData);
export const ContentHeaderImagePortrait = () => hero(contentHeaderPortraitData);
export const ContentHeaderVideo = () => hero(contentHeaderVideoData);

export const ContentHeaderText = () => hero(contentHeaderTextData);

