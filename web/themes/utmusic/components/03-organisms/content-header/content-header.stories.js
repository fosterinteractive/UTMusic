import hero from './content-header.twig';

import breadcrumbs from './breadcrumbs.yml';

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
export const ContentHeaderText = () => hero({...contentHeaderTextData, ...breadcrumbs});

export const ContentHeaderImagePortrait = () => hero({...contentHeaderImagePortraitData, ...breadcrumbs});
export const ContentHeaderImageLandscape = () => hero({...contentHeaderImageLandscapeData, ...breadcrumbs});

export const ContentHeaderVideo = () => hero({...contentHeaderVideoData, ...breadcrumbs});

export const ContentHeaderTwoImagesTopBottom = () => hero({...contentHeaderTwoImages1Data, ...breadcrumbs});
export const ContentHeaderTwoImagesBottomTop = () => hero({...contentHeaderTwoImages2Data, ...breadcrumbs});

