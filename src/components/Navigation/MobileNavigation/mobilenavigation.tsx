/** @format */

import styled from 'styled-components';
import { getVal } from '../../../styles/device';

export const MobileContainer = styled.nav(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  zIndex: 9999,
  animation: 'move-in-down 0.15s ease-out',
  color: theme.colors.primary100,
  backgroundColor: theme.colors.dark50,
}));

export const MobileList = styled.div(() => ({
  width: '100%',
}));

export const MobileElement = styled.div(({ theme }) => ({
  display: 'block',
  width: '100%',
  padding: getVal({
    tabL: 25,
    mobileL: 24,
    mobileM: 20,
  }),
  textAlign: 'center',
  backgroundColor: theme.colors.dark50,
  fontSize: getVal({
    tabL: theme.fontSizes[5],
    mobileL: theme.fontSizes[5],
    mobileM: theme.fontSizes[4],
  }),

  cursor: 'pointer',

  '&:nth-child(odd)': {
    backgroundColor: theme.colors.dark80,
  },
}));

export const LanguageContainer = styled.div<{ active?: boolean }>(
  ({ theme, active }) => ({
    width: '50%',
    textAlign: 'center',
    padding: getVal({
      tabL: 12,
      mobileL: 12,
      mobileM: 8,
    }),
    fontSize: getVal({
      tabL: theme.fontSizes[6],
      mobileL: theme.fontSizes[6],
      mobileM: theme.fontSizes[5],
    }),
    color: active ? theme.colors.dark80 : theme.colors.primary100,
    backgroundColor: active ? theme.colors.primary100 : theme.colors.dark80,
  })
);
