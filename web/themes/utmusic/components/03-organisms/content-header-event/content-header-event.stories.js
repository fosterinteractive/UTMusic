import hero from './content-header-event.twig';

import contentHeadeEvent from './content-header-event.yml';

/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Organisms/Content Header Event',
  component: hero,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Organism Content Heade Eventr. Content Header Banners appear at the top of Event pages',
      },
    },
  },
}

export const ContentHeaderEvent = () => hero(contentHeadeEvent);