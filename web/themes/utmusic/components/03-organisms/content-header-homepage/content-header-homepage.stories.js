import hero from './content-header-homepage.twig';

import contentHeaderHomepageData from './content-header--homepage.yml';;


/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Organisms/Content Header Homepage',
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



export const ContentHeaderHomepage = () => hero(contentHeaderHomepageData);


