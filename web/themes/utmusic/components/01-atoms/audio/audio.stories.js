import audio from './audio.twig';

import audioData from './audio.yml';


/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Audio' };

export const Audio = () => audio(audioData);
