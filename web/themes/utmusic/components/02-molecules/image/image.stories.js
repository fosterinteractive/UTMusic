import imageComponent from './image.twig';

import imageData from './image.yml';
import imageShadowData from './image--shadow.yml';
import imageBrush1Data from './image--brush1.yml';
import imageBrush2Data from './image--brush2.yml';
import imageBrushShadowData from './image--brush-shadow.yml';
import imageIconLeftData from './image--icon-left.yml';
import imageIconRightData from './image--icon-right.yml';
import imageIconCenterData from './image--icon-center.yml';

/**
 * Storybook Definition with data documentation and controls
 */
 export default {
  title: 'Molecules/Image',
  component: imageComponent,
  parameters: {
    docs: {
      description: {
        component: 'Image component. For best look with Brush Stroke Decoration - image should have a square shape',
      },
    },
  },
  
  argTypes: {
    // Image
    image: {
      description: 'Image',
      type: { required: true },
      defaultValue: imageIconLeftData.image,
      control: { type: 'text' },
      table: {
        type: { summary: 'string (plain text)' },
        defaultValue: { Default: '' },
      },
    },
    //Image variation
    variation: {
      description: 'Image decorations (variations)',
      type: { required: true },
      defaultValue: 'rounded-corners',
      control: {
        type: 'select',
        options: { 
          'Rounded Corners': 'rounded-corners', 
          'Rounded Corners with Shadow': 'rounded-corners-shadow',
          'Brush Stroke 1': 'brush1',
          'Brush Stroke 2': 'brush2', 
          'Brush Stroke with Yellow Shadow': 'brush-shadow', 

        },
      },
      table: {
        type: {
          summary: 'rounded-corners | rounded-corners-shadow | brush1 | brush2 | brush-shadow ',
        },
      },
    },
    // Icon
    icon: {
      description: 'SVG symbol ID generated from images/filename.svg',
      type: {required: true},
      defaultValue: 'papers',
      control: {
        type: 'text'
      },
      table: {
        type: { 
          summary: 'string (generated plain text)', 
        },
      },
    },
    // Icon Sizes
    icon_size: {
      description: 'Icon\'s size',
      defaultValue: 'medium',
      control: {
        type: 'select',
        options: { 
          'XXX-Small': 'xxxsmall',
          'XX-Small': 'xxsmall',
          'X-Small': 'xsmall',
          'Small': 'small', 
          'Medium': 'medium', 
          'Large': 'large',
          'X-Large': 'xlarge', 
          'Inline': 'inline' 
        },
      },
      table: {
        type: { summary: 'string (xxxsmall, xxsmall, xsmall, small, medium, large, xlarge)' },
        defaultValue: { summary: 'medium' },
      },
    },
    // Icon Alignment
    icon_alignment: {
      description: 'Icon\'s position',
      defaultValue: 'right',
      control: {
        type: 'select',
        options: { 
          'Left': 'left',
          'Center': 'center',
          'Right': 'right',
        },
      },
      table: {
        type: { summary: 'string (left, center, right )' },
        defaultValue: { summary: 'medium' },
      },
    },

    
  },
};

export const ImageDemo = ({ image, variation, icon, icon_size, icon_alignment, }) => 
imageComponent({
      image,
      variation,
      icon,
      icon_size,
      icon_alignment,
    });

export const ImageRoundedCorners = () => imageComponent(imageData);
export const ImageRoundedCornersWithShadow = () => imageComponent(imageShadowData);

export const ImageBrush1 = () => imageComponent(imageBrush1Data);
export const ImageBrush2 = () => imageComponent(imageBrush2Data);
export const ImageBrushShadow = () => imageComponent(imageBrushShadowData);

export const ImageIconLeft = () => imageComponent(imageIconLeftData);
export const ImageIconRight = () => imageComponent(imageIconRightData);
export const ImageIconCenter = () => imageComponent(imageIconCenterData);

