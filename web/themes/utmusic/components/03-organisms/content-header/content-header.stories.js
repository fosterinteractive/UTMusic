import hero from './content-header.twig';

import contentHeaderTextData from './content-header--text.yml';

import contentHeaderImagePortraitData from './content-header--image-portrait.yml';
import contentHeaderImageLandscapeData from './content-header--image-landscape.yml';
import contentHeaderVideoData from './content-header--video.yml';

import contentHeaderTwoImages1Data from './content-header--top-bottom.yml';
import contentHeaderTwoImages2Data from './content-header--bottom-top.yml';


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
export const ContentHeaderText = () => hero(contentHeaderTextData);

export const ContentHeaderImagePortrait = () => hero(contentHeaderImagePortraitData);
export const ContentHeaderImageLandscape = () => hero(contentHeaderImageLandscapeData);

export const ContentHeaderVideo = () => hero(contentHeaderVideoData);

export const ContentHeaderTwoImagesTopBottom = () => hero(contentHeaderTwoImages1Data);
export const ContentHeaderTwoImagesBottomTop = () => hero(contentHeaderTwoImages2Data);

