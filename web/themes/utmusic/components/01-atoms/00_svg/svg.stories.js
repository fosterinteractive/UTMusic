import svg from './svg.twig';
import svgData from './svg.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Scalable SVG',
  parameters: {
    controls: { hideNoControlsWarning: 'true' },
    docs: {
      description: {
        component: 'SVG scales like an image in the container. Use a container like `<div class="my-custom-wrapper><svg></div>` and apply `@include svg-wrapper($width, $height)`.  Wrapper controlls the ratio of with and height by calculating a bottom-padding. The SVG is absolutely positioned within it to allow it scale consistently in different browsers.',
      },
    },
  },
};

export const scss_mixin = () => svg(svgData);

