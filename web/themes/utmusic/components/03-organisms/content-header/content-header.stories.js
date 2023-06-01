import hero from './content-header.twig';

import contentHeaderImageData from './content-header--image.yml';
import contentHeaderTextData from './content-header--text.yml';
import contentHeaderTwoImages1Data from './content-header--two-images-1.yml';
import contentHeaderTwoImages2Data from './content-header--two-images-2.yml';


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

export const ContentHeaderImage = () => hero(contentHeaderImageData);
export const ContentHeaderText = () => hero(contentHeaderTextData);

export const ContentHeaderTwoImages1 = () => hero(contentHeaderTwoImages1Data);
export const ContentHeaderTwoImages2 = () => hero(contentHeaderTwoImages2Data);

