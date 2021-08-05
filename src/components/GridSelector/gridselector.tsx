/** @format */

import styled from 'styled-components';

import { getVal } from '../../styles/device';

export const Container = styled.div(() => ({}));

export const ColTitle = styled.h3(({ theme }) => ({
  display: 'flex',
  color: theme.colors.primary100,
  fontSize: theme.fontSizes[5],
  textAlign: 'center',
  fontWeight: 500,
  marginBottom: '30px',
}));

export const Title = styled.h3(({ theme }) => ({
  fontSize: theme.fontSizes[4],
  color: theme.colors.primary100,
  fontWeight: 400,
  margin: 0,
}));

export const Grid = styled.div(() => ({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: getVal({
    desktopL: 'repeat(4, 1fr)',
    tabS: 'repeat(4, 1fr)',
    mobileL: 'repeat(5, 1fr)',
  }),
  gridGap: '18px',
  gridTemplateRows: 'auto',
}));

export const Wrapper = styled.div<{ selected?: boolean }>(
  ({ theme, selected }) => ({
    color: theme.colors.white,
    opacity: selected ? 1 : 0.5,
    fontSize: getVal({
      desktopL: 60,
      desktopM: 58,
      desktopS: 56,
      laptopL: 52,
      laptopM: 50,
      laptopS: 46,
      tabL: 44,
      tabM: 42,
      mobileL: 44,
      mobileM: 36,
      mobileS: 28,
    }),
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    ':hover': {
      color: theme.colors.primary100,
      opacity: 1,
    },
  })
);
