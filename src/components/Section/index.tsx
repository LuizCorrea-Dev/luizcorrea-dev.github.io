/** @format */

import React from 'react';
import styled from 'styled-components';

import { getVal } from '../../styles/device';
import Linker from '../../components/Linker';

export type Variant = 'dark' | 'light';

export interface Props {
  variant: Variant;
  linker?: boolean;
  name?: string;
}

const side = {
  desktopL: 360,
  desktopM: 250,
  desktopS: 180,
  laptopL: 220,
  laptopM: 180,
  laptopS: 100,
  tabL: 60,
  tabM: 50,
  tabS: 48,
  mobileL: 40,
  mobileM: 22,
  mobileS: 22,
};

const top = {
  desktopL: 80,
  desktopM: 78,
  desktopS: 76,
  laptopL: 72,
  laptopM: 70,
  mobileL: 66,
  mobileM: 58,
};

const bottom = {
  desktopL: 110,
  desktopM: 105,
  desktopS: 100,
  laptopL: 95,
  laptopM: 90,
  tabL: 85,
  tabS: 70,
};

const Container = styled.section<Props>(({ theme, variant }) => ({
  padding: `${getVal(top)}px ${getVal(side)}px ${getVal(bottom)}px ${getVal(
    side
  )}px`,
  backgroundColor:
    variant === 'light' ? theme.colors.dark50 : theme.colors.dark80,
  position: 'relative',
}));

export const Section: React.FC<Props> = ({
  variant,
  linker,
  children,
  name,
}) => (
  <Container variant={variant} name={name}>
    {linker && <Linker type={variant === 'light' ? 'dark' : 'light'} />}
    {children}
  </Container>
);

export default Section;
