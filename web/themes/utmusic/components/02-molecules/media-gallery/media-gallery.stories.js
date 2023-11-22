import mediaGallery from './media-gallery.twig';
import mediaGalleryData from './yml/media-gallery.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Media Gallery',
  component: mediaGallery,
};

export const MediaGallery = () => mediaGallery(mediaGalleryData);
