/** @format */

import styled from 'styled-components';
import { getVal } from '../../../styles/device';

export const Bar = styled.div<{ active: boolean }>(({ theme, active }) => ({
  width: '100%',
  display: 'block',
  height: getVal({
    desktopL: 5,
    laptopL: 4,
  }),
  backgroundColor: theme.colors.primary100,
  transition: 'opacity 0.2s, transform 0.2s',
  opacity: 1,

  ':not(:last-child)': {
    marginBottom: getVal({
      desktopL: '7px',
      laptopL: '6px',
    }),
  },

  ':first-child': {
    transform: active
      ? `translateY(${getVal({
          desktopL: '12px',
          laptopL: '10px',
        })}) rotate(45deg)`
      : undefined,
  },

  ':nth-child(2)': {
    opacity: active ? 0 : undefined,
  },
  ':last-child': {
    transform: active
      ? `translateY(${getVal({
          desktopL: '-12px',
          laptopL: '-10px',
        })}) rotate(-45deg)`
      : undefined,
  },
}));

export const Container = styled.div(() => ({
  display: 'block',
  width: getVal({
    desktopL: 44,
    laptopL: 42,
  }),
  height: getVal({
    desktopL: 35,
    laptopL: 26,
    tabL: 22,
  }),
  cursor: 'pointer',
  zIndex: 180,
}));
