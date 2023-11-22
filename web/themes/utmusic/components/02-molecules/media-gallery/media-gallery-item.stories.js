import mediaGalleryItem from './media-gallery-item.twig';
import mediaGalleryItemData from './yml/media-gallery-item.yml';

/**
 * Storybook Definition.
 */

export default { 
  title: 'Molecules/Media Gallery',
  component: mediaGalleryItem,

  argTypes: {
    variation: {
      defaultValue: mediaGalleryItemData.variation,
      description: 'Media Gallery variation',
      type: { required: 'true' },
      control: {
        type: 'select',
        options: { 
          'Stacked on the Left': 'left', 
          'Stacked on the Right': 'right',
          'Row': 'row',
        },
      },
      table: {
        type: {
          summary: 'left | right | row',
          defaultValue: { summary: 'left' },
        },
      },
    },
  },
};

export const MediaGalleryItemLeftStacked = ({ variation }) => 
  mediaGalleryItem({
    ...mediaGalleryItemData,
    variation,
  });