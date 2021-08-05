/** @format */

import styled from 'styled-components';

export const SelectorContainer = styled.div({
  cursor: 'pointer',
  position: 'relative',
});

export const SelectedOptionContainer = styled.div<{ width?: number }>(
  ({ theme, width }) => ({
    border: '1px solid',
    borderColor: theme.colors.gray90,
    padding: '8px 12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: theme.colors.gray90,
    width: width ? `${width}px` : 'auto',
  })
);

export const SelectedOptionText = styled.div(({ theme }) => ({
  fontSize: theme.fontSizes[3],
}));

export const SelectorOptionsList = styled.ul({
  position: 'absolute',
  top: '140%',
  left: 0,
  width: '100%',
});

export const SelectorOptionItem = styled.div(({ theme }) => ({
  display: 'flex',
  width: '100%',
  padding: '8px 12px',
  fontSize: theme.fontSizes[3],
  color: theme.colors.gray90,
  backgroundColor: theme.colors.dark80,
  borderTopColor: theme.colors.transparent,
  borderBottomColor: theme.colors.transparent,
  transition: 'all 0.2s',

  ':hover': {
    transform: 'scale(1.08)',
  },

  ':nth-child(even)': {
    backgroundColor: theme.colors.dark100,
  },
}));
