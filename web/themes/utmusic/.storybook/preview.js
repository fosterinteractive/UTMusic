import { addDecorator } from '@storybook/html';
import { useEffect } from '@storybook/client-api';
import Twig from 'twig';
import { setupTwig } from './setupTwig';

// If in a Drupal project, it's recommended to import a symlinked version of drupal.js.
import './_drupal.js';
import './jquery-global.js';

// GLOBAL CSS
import '../components/style.scss';
import '../components/storybook.scss';

import { create } from '@storybook/theming';
import logo from './.public/logo.png';

// addDecorator deprecated, but not sure how to use this otherwise.
addDecorator((storyFn) => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return storyFn();
});

setupTwig(Twig);

const lightMainspring =  create({
  base: 'light',

  // Branding
  brandTitle: 'Mainspring',
  brandUrl: '../',
  brandImage: logo,
  brandTarget: '_self',

  //UI 
  // colorPrimary: 'black',
  // colorSecondary: 'deepskyblue',

  // Toolbar default and active colors
  barTextColor: '#636569',
  barSelectedColor: '#0083d5',
  barBg: '#ddd',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',
  textMutedColor: '#636569',

  // Form colors
  inputBg: '#f2f2f2',
  inputBorder: '#bbb',
  inputTextColor: '#222',
  inputBorderRadius: 4,
});

const darkMainspring =  create({
  base: 'dark',

  // Branding
  brandTitle: 'Mainspring',
  brandUrl: '../',
  brandImage: logo,
  brandTarget: '_self',

  // UI
  appBg: '#555',
  colorPrimary: 'white',
  colorSecondary: '#45bc5a',
  appContentBg: '#444',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Toolbar default and active colors
  barTextColor: '#989898',
  barSelectedColor: '#45bc5a',
  barBg: '#333',

  // Text colors
  textColor: 'white',
  textInverseColor: '#eee',
  textMutedColor: '#989898',

  // Form colors
  inputBg: 'rgba(0,0,0,0.1)',
  inputBorder: '#444',
  inputTextColor: '#fff',
  inputBorderRadius: 4,

});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: darkMainspring,
    light: lightMainspring,
    darkClass: 'theme--dark-bg',
    lightClass: 'theme--light-bg',
    classTarget: 'html',
    stylePreview: true,
  },
  backgrounds: {
    default: 'light-test',
    values: [
      {
        name: 'light-test',
        value: '#fff',
      },
      {
        name: 'dark-test',
        value: '#000',
      },
    ],
  },
};
