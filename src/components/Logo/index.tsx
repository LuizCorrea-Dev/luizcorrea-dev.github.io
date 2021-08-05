/** @format */

import React, { useContext } from 'react';

import { FlexBox } from '../Box';
import Text from '../Text';

import { getVal } from '../../styles/device';

import DataContext from '../../services/data';

const Logo: React.FC = () => {
  const { about } = useContext(DataContext);

  const fontSize = getVal({
    desktopL: 30,
    laptopL: 26,
    laptopM: 22,
    tabL: 26,
    mobileM: 22,
  });

  const height = getVal({
    desktopL: 46,
    laptopL: 42,
    laptopM: 38,
  });

  return (
    <FlexBox
      height={height}
      justifyContent="center"
      alignItems="center"
      background="white"
      color="dark50"
      paddingX={2}
    >
      <Text fontSize={fontSize} fontWeight="bold">
        {about.logo.toUpperCase()}
      </Text>
    </FlexBox>
  );
};

export default Logo;
