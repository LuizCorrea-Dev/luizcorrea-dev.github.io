/** @format */

import styled from 'styled-components';

export const Title = styled.h3<{ open: boolean }>(({ theme, open }) => ({
  color: open ? theme.colors.primary100 : theme.colors.gray90,
  fontWeight: 300,
  fontSize: 'inherit',
  margin: 0,
  transition: 'color 0.2s',

  ':hover': {
    color: open ? theme.colors.primary100 : theme.colors.white,
  },
}));
