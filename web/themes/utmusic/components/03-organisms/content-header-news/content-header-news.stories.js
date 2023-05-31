import heroNews from './content-header-news.twig';

import contentHeaderLandscapeData from './content-header-news--landscape.yml';
import contentHeaderPortraitData from './content-header-news--portrait.yml';
import contentHeaderVideoData from './content-header-news--video.yml';
import contentHeaderTextData from './content-header-news--text.yml';

/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Organisms/Content Header News',
  component: heroNews,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Organism Content Header. Content Header Banners appear at the top of News CT pages',
      },
    },
  },
}

export const ContentHeaderNewsImageLandscape = () => heroNews(contentHeaderLandscapeData);
export const ContentHeaderNewsImagePortrait = () => heroNews(contentHeaderPortraitData);
export const ContentHeaderNewsVideo = () => heroNews(contentHeaderVideoData);

export const ContentHeaderNewsText = () => heroNews(contentHeaderTextData);

