import poster from './poster.twig';

import posterData from './poster.yml';
import posterHeroData from './poster--hero.yml';

/**
 * Storybook Definition with data documentation and controls
 */
export default {
  title: 'Molecules/Poster',
  component: poster,

  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'Poster',
      },
    },
  },

  argTypes: {
    //Poster variation
    variation: {
      defaultValue: posterHeroData.variation,
      description: 'Poster variation',
      type: { required: 'true' },
      control: {
        type: 'select',
        options: { 
          'Default': posterData.variation, 
          'Hero': posterHeroData.variation, 
        },
      },
      table: {
        type: {
          summary: 'null | hero ',
        },
      },
    },
    //Poster title_prefix
    title_prefix: {
      defaultValue: posterHeroData.title_prefix,
      description: 'Poster title prefix',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    //Poster title
    title: {
      defaultValue: posterHeroData.title,
      description: 'Poster title',
      type: { required: 'true' },
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    //Poster summary
    summary: {
      defaultValue: posterHeroData.summary,
      description: 'Poster summary',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    //Poster url
    link_url: {
      defaultValue: posterHeroData.link_url,
      description: 'Poster link_url',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    //Poster link text
    link_text: {
      defaultValue: posterHeroData.link_text,
      description: 'Poster link_text',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string (plain text)',
        },
      },
    },
    // Aria Label
    button_aria_label: {
      defaultValue: posterHeroData.button_aria_label,
      description: 'Read aloud by screen readers instead of the visually displayed <b>label</b>',
      control: {
        type: 'text',
      },
      table: {
        type: { 
          summary: 'string (plain text)', 
        },
      },
    },
    // Aria Labelby
    button_aria_labelledby: {
      description: 'Text of referenced ID is read aloud by screen readers instead of the visually displayed <b>label</b>.<br> <b>Do not use in combination</b> with <b>aria_label</b>',
      control: {
        type: 'text',
      },
      table: {
        type: { 
          summary: 'string (plain text - no spaces)', 
        },
      },
    },
    //Poster image
    image: {
      defaultValue: posterHeroData.image,
      description: 'Poster image',
      table: {
        type: {
          summary: 'image',
        },
      },
    },
    //Poster content-image
    content_image: {
      defaultValue: posterHeroData.content_image,
      description: 'Poster image',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'image',
        },
      },
    },
  }
};

export const PosterHero = ({
  variation,
  title_prefix,
  title,
  summary,
  link_url,
  link_text,
  button_aria_label,
  button_aria_labelledby,
  image,
  content_image,
}) => 
  poster({
    variation,
    title_prefix,
    title,
    summary,
    link_url,
    link_text,
    button_aria_label,
    button_aria_labelledby,
    image,
    content_image,
  });

export const Poster = () => poster(posterData);
