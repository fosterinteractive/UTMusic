import input from './input.twig';

import inputData from './input.yml';
// import inputDataSearch from './input--search.yml';
// import inputDataSubmitText from './input--submit-text.yml';
// import inputDataInvalid from './input--is-invalid.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Inputs' };

export const example = () => input(inputData);
// export const inputSearch = () => input(inputDataSearch);
// export const inputSubmitText = () => input(inputDataSubmitText);
// export const inputInvalid = () => input(inputDataInvalid);
