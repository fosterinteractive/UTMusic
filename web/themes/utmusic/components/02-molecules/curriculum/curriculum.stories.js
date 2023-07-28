import curriculumComponent from './curriculum.twig';

import curriculumData from './curriculum.yml';

/**
 * Storybook Definition.
 */

export default { 
  title: 'Molecules/Curriculum',
  component: curriculumComponent,
 
};

export const Curriculum = () => 

curriculumComponent(curriculumData);  