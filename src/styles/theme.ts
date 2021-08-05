/** @format */

import { getVal } from './device';
import { DefaultTheme } from 'styled-components';
import { BREAKS } from './device';

export const SPACE = getVal({
  desktopL: [0, 6, 12, 18, 22, 30, 36, 42, 48, 54, 60, 66, 72, 80, 88],
  laptopL: [0, 6, 12, 18, 22, 30, 36, 42, 48, 54, 60, 66, 72, 80, 88],
  laptopS: [0, 6, 12, 18, 22, 30, 36, 42, 48, 54, 60, 66, 72, 80, 88],
  tabL: [0, 4, 10, 16, 20, 28, 34, 38, 44, 50, 52, 56, 58, 76, 82],
});

export const COLOR = {
  black: '#000',
  blackRgb: '0,0,0',
  transparent: 'transparent',
  white: '#fff',
  primary100: '#ffcc73',
  primary50: '#a0814c',
  dark30: '#222838',
  dark50: '#191d28',
  dark80: '#161922',
  dark100: '#0f1118',
  gray10: '#333',
  gray90: 'rgb(197, 197, 197)',
  gray50: '#555',
};

export const RADIUS = {
  regular: 2,
  medium: 6,
  big: 20,
  fullCircle: '100%',
};

export const FONT_SIZE = getVal({
  desktopL: [0, 12, 14, 16, 18, 20, 24, 30, 36, 55],
  desktopM: [0, 11, 13, 15, 17, 19, 23, 28, 34, 52],
  laptopL: [0, 10, 11, 12, 14, 16, 18, 22, 26, 38],
  laptopS: [0, 9, 10, 11, 13, 15, 17, 21, 24, 36],
  mobileM: [0, 9, 10, 11, 13, 15, 17, 21, 24, 36],
  mobileS: [0, 8, 9, 10, 12, 14, 16, 20, 22, 32],
});

export const FONT_WEIGHT = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  M: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

export const TRANSITION = {
  default: 'all .3s ease-in-out',
};

export const SHADOW = {};

export const TEXT_VARIANT = {};

export const Z_INDEX = [0, 1, 5, 10, 50, 100, 500, 1000];

export const BUTTON_VARIANTS = {
  primary: {
    backgroundColor: COLOR.primary100,
    color: COLOR.white,
    ':hover:not(:disabled)': {
      transform: 'scale(1.1)',
    },
    ':active:not(:disabled)': {
      transform: 'translateY(2px)',
    },
    ':disabled': {
      backgroundColor: COLOR.primary50,
      cursor: 'not-allowed',
    },
  },
};

export const DEFAULTS = {
  duration_ms: 300,
  duration: '.3',
  easing: 'ease-in-out',
  transition: 'all .3s ease-in-out',
};

export const Theme: DefaultTheme = {
  breakpoints: BREAKS,
  space: SPACE,
  fontSizes: FONT_SIZE,
  fontWeights: FONT_WEIGHT,
  colors: COLOR,
  radii: RADIUS,
  shadow: SHADOW,
  textVariants: TEXT_VARIANT,
  buttonVariants: BUTTON_VARIANTS,
  zIndices: Z_INDEX,
  transition: TRANSITION,
};
