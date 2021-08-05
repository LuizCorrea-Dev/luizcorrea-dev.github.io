/** @format */

import styled from 'styled-components';
import { getVal } from '../../styles/device';

const height = {
  desktopL: 220,
  tabS: 220,
  mobileL: 180,
};

const width = {
  desktopL: 340,
  tabS: 340,
  mobileL: 280,
};

export const Overlay = styled.div(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.colors.dark30,
  height: getVal(height),
  width: getVal(width),
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0.85,
}));

export const Container = styled.div({
  display: 'flex',
  height: getVal({
    desktopL: 240,
    tabS: 240,
    mobileL: 200,
  }),
  width: getVal({
    desktopL: 360,
    tabS: 360,
    mobileL: 300,
  }),
  position: 'relative',
});

export const Image = styled.div({
  display: 'flex',
  height: getVal(height),
  width: getVal(width),
  position: 'absolute',
  bottom: 0,
  right: 0,
  overflow: 'hidden',
  justifyContent: 'center',
  backgroundColor: 'transparent',
});

export const Title = styled.h3(({ theme }) => ({
  color: theme.colors.primary100,
  fontSize: theme.fontSizes[7],
  fontWeight: 600,
  opacity: '88%',
  marginTop: 20,
  marginBottom: 0,
}));
