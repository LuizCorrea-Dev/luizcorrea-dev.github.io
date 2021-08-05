/** @format */

import styled from 'styled-components';

import { getVal } from '../../styles/device';

interface StyleProps {
  margin?: string | number;
  padding?: string | number;
}

const HOVER = 1.08;

const FONT = {
  desktopL: 20,
  desktopM: 18,
  desktopS: 18,
  laptopL: 16,
  laptopM: 14,
  tabL: 14,
  mobileM: 12,
};

const PADDING = {
  desktopL: '16px 26px',
  desktopM: '15px 24px',
  desktopS: '14px 22px',
  laptopL: '14px 20px',
  laptopM: '8px 20px',
  tabL: '8px 17px',
  mobileM: '9px 15px',
};

const HEIGHT = {
  desktopL: 48,
  desktopM: 46,
  desktopS: 46,
  laptopL: 44,
  laptopM: 42,
  tabL: 38,
  mobileM: 34,
};

export const FullButton = styled.button<StyleProps>(
  ({ theme, padding, margin }) => ({
    backgroundColor: theme.colors.primary100,
    fontSize: getVal(FONT),
    color: theme.colors.dark50,
    padding: padding || getVal(PADDING),
    height: getVal(HEIGHT),
    margin,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform .2s ease-in-out',
    fontWeight: theme.fontWeights.light,
    border: 'none',

    '&:hover:not(:disabled)': {
      transform: `scale(${HOVER})`,
    },
    '&:active:not(:disabled)': {
      transform: 'scale(1)',
    },
  })
);

export const EmptyButton = styled.button<StyleProps>(
  ({ theme, padding, margin }) => ({
    backgroundColor: theme.colors.transparent,
    fontSize: getVal(FONT),
    height: getVal(HEIGHT),
    color: theme.colors.primary100,
    padding: padding || getVal(PADDING),
    margin,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform .2s ease-in-out',
    fontWeight: theme.fontWeights.light,
    border: `2px solid ${theme.colors.primary100}`,

    '&:hover:not(:disabled)': {
      transform: `scale(${HOVER})`,
    },
    '&:active:not(:disabled)': {
      transform: 'scale(1)',
    },
  })
);
