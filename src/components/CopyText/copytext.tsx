import styled from 'styled-components';

import { getVal } from '../../styles/device';

export const Container = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.colors.gray90,
  marginBottom: getVal({
    desktopL: '30px',
    tabM: '30px',
    tabS: '12px'
  }),
  cursor: 'pointer',
  userSelect: 'none',
  ':hover': {
    color: theme.colors.white
  }
}));

export const Copy = styled.div<{ showMessage: boolean }>(
  ({ theme, showMessage }) => ({
    color: theme.colors.dark80,
    background: theme.colors.primary100,
    marginLeft: '20px',
    opacity: showMessage ? 1 : 0,
    transition: 'all 0.2s',
    fontSize: theme.fontSizes[3],
    fontWeight: 400,
    padding: '4px 8px'
  })
);
