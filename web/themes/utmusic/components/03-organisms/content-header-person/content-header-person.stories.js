import hero from './content-header-person.twig';

import contentHeaderPerson from './content-header-person.yml';
import contentHeaderPersonText from './content-header-person--text.yml';

/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Organisms/Content Header Person',
  component: hero,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Organism Content Heade Eventr. Content Header Banners appear at the top of Person CT pages',
      },
    },
  },
}

export const ContentHeaderPerson = () => hero(contentHeaderPerson);
export const ContentHeaderPersonText = () => hero(contentHeaderPersonText);