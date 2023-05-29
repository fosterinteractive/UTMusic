import imageComponent from './image.twig';

import imageData from './image.yml';

/**
 * Storybook Definition with data documentation and controls
 */
 export default {
  title: 'Molecules/Image',
  component: imageComponent,
  parameters: {
    docs: {
      description: {
        component: 'Image component',
      },
    },
  },
  
  argTypes: {
    // Image
    image: {
      description: 'Image',
      type: { required: true },
      defaultValue: imageData.image,
      control: { type: 'text' },
      table: {
        type: { summary: 'string (plain text)' },
        defaultValue: { Default: '' },
      },
    },
    //Image variation
    // variation: {
    //   description: 'Image decorations (variations)',
    //   type: { required: true },
    //   defaultValue: 'rounded-corners',
    //   control: {
    //     type: 'select',
    //     options: { 
    //       'Rounded Corners': 'rounded-corners', 
    //     },
    //   },
    //   table: {
    //     type: {
    //       summary: 'rounded-corners',
    //     },
    //   },
    // },
    
  },
};

// export const ImageDemo = ({ image, variation }) => 
// imageComponent({
//       image,
//       variation,
//     });

export const Image = () => imageComponent(imageData);

