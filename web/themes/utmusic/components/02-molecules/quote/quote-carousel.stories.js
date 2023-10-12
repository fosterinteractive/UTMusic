import quoteCarousel from './quote-carousel.twig';
import quoteCarouselData from './quote-carousel.yml';

import '../../../js/libraries/slick-carousel/slick/slick.min';
import '../../../js/libraries/slick-carousel/slick/slick.css';
import '../../../js/libraries/slick-carousel/slick/slick-theme.css';
import '../../../js/carousel-quote.config';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Quote Carousel',
};

export const Carousel = () => quoteCarousel(quoteCarouselData);

