import breadcrumbs from './breadcrumbs.twig';
import breadcrumbsDemo from './breadcrumbs--demo.twig';

import breadcrumbsData from './breadcrumbs.yml';
import breadcrumbsDemoData from './breadcrumbs--demo.yml';


/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Molecules/Breadcrumbs',
  component: breadcrumbs,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Breadcrumbs component',
      },
    },
  },

  argTypes: {
    //Demo link labels
    item_text_1: {
      defaultValue: breadcrumbsDemoData.item_text_1,
      description: 'Breadcrumb text',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    //Breadcrumbs items
    item_url_1: {
      defaultValue: breadcrumbsDemoData.item_url_1,
      description: 'Breadcrumb link destination',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    // Level 2
    item_text_2: {
      defaultValue: breadcrumbsDemoData.item_text_2,
      description: 'Breadcrumb text',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    item_url_2: {
      defaultValue: breadcrumbsDemoData.item_url_2,
      description: 'Breadcrumb link destination',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },

    //Level 3
    item_text_3: {
      defaultValue: breadcrumbsDemoData.item_text_3,
      description: 'Breadcrumb text',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    item_url_3: {
      defaultValue: breadcrumbsDemoData.item_url_3,
      description: 'Breadcrumb link destination',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },

    //Level 4
    item_text_4: {
      defaultValue: breadcrumbsDemoData.item_text_4,
      description: 'Breadcrumb text',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    item_url_4: {
      defaultValue: breadcrumbsDemoData.item_url_4,
      description: 'Breadcrumb link destination',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
  },

};
export const BreadcrumbsDemo = ({
  item_text_1,
  item_text_2,
  item_text_3,
  item_text_4,
  item_url_1,
  item_url_2,
  item_url_3,
  item_url_4
}) => 
  breadcrumbsDemo({
    item_text_1,
    item_text_2,
    item_text_3,
    item_text_4,
    item_url_1,
    item_url_2,
    item_url_3,
    item_url_4
  });

export const Breadcrumbs = () => breadcrumbs(breadcrumbsData);
