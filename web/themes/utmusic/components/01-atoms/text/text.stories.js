import heading from './headings/heading.twig';
import pre from './text/05-pre.twig';
import paragraph from './text/03-inline-elements.twig';
import code from './text/07-code.twig';
import wysiwyg from './wysiwyg/wysiwyg.twig';


import headingData from './headings/headings.yml';
import codeData from './text/code.yml';
import wysiwygData from './wysiwyg/wysiwyg.yml';


/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Text' };

// Loop over items in headingData to show each one in the example below.
const headings = headingData.map((d) => heading(d)).join('');

export const headingsExamples = () => headings;

export const preformatted = () => pre();

export const random = () => paragraph();

// export const codeExample = () => code(codeData);

export const WYSIWYG = () => wysiwyg(wysiwygData);
