import accordionItem from './accordion-item.twig';
import accordionItemData from './accordion-item.yml';

import accordion from './accordion.twig';
import accordionData from './accordion.yml';


import './accordion';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Accordion',

};
export const AccordionItem = () => accordionItem(accordionItemData);
export const Accordion = () => accordion(accordionData);

