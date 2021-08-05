/** @format */

import styled from 'styled-components';
import { getVal } from '../../../styles/device';

export const ToggleContainer = styled.div({
  display: 'block',
  position: 'fixed',
  right: getVal({
    desktopL: '7%',
    laptopL: '5%',
    laptopS: '3%',
  }),
  top: getVal({
    desktopL: 80,
    desktopM: 76,
    desktopS: 72,
    laptopL: 62,
    laptopM: 58,
    laptopS: 56,
  }),
  width: '100px',
  height: '100px',
  zIndex: 200,
  animation: 'fade-in 0.3s ease-out',
});

export const ToggleListContainer = styled.ul({
  position: 'absolute',
  top: 0,
  right: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)',

  marginTop: '-8px',
  marginRight: '30px',
  animation: 'move-in-left 0.2s ease-out',
});

export const ToggleElement = styled.li(({ theme }) => ({
  fontSize: theme.fontSizes[5],

  color: theme.colors.gray90,
  backgroundColor: theme.colors.dark50,
  backfaceVisibility: 'hidden',
  cursor: 'pointer',
  userSelect: 'none',

  transition: 'color 0.2s, transform 0.2s',

  ':nth-child(even)': {
    backgroundColor: theme.colors.dark80,
  },

  ':hover': {
    color: theme.colors.primary100,
    transform: 'scale(1.1)',
  },
  display: 'flex',
}));
