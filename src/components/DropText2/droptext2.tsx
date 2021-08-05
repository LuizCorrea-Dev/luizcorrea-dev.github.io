/** @format */


import styled from 'styled-components';
import { getVal } from '../../styles/device';

const height = {
  desktopL: 132,
  tabS: 132,
  mobileL: 108,
};

const width = {
  desktopL: 204,
  tabS: 204,
  mobileL: 168,
};

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

export const Image = styled.div({
  display: 'flex',
  height: getVal(height),
  width: getVal(width),
  position: 'absolute',
  bottom: -180,
  right: 150,
  overflow: 'hidden',
  justifyContent: 'center',
  backgroundColor: 'transparent',
});
