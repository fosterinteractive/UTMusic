import file from './file.twig';
import fileData from './file.yml';


/**
 * Storybook Definition.
 */
export default { title: 'Atoms/File' };
export const fileDefoult = () => file(fileData);
