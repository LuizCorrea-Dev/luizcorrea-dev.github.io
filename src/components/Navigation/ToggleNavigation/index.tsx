/** @format */

import React, { useContext, useState } from 'react';

import {
  ToggleContainer,
  ToggleListContainer,
  ToggleElement,
} from './togglenavigation';

import LinkWrapper from '../Wrapper';
import MobileNavigationIcon from '../MobileNavigationIcon';

import DataContext from '../../../services/data';

import { getVal } from '../../../styles/device';

const ToggleNavigation: React.FC = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const { navigation } = useContext(DataContext);

  const padding = getVal({
    desktopL: '10px 25px',
    laptopL: '8px 20px',
  });

  const fixPortuguese = () => (
    <span>
      Sobre<span style={{ opacity: 0 }}>..</span>min
    </span>
  );

  const nav = (
    <ToggleListContainer>
      {navigation.map((elem, id) => (
        <ToggleElement key={id}>
          <LinkWrapper
            padding={padding}
            onClick={() => setShowNavigation((val) => !val)}
            link={elem.link}
          >
            {elem.name === 'Sobre mim' ? fixPortuguese() : elem.name}
          </LinkWrapper>
        </ToggleElement>
      ))}
    </ToggleListContainer>
  );

  return (
    <ToggleContainer>
      <MobileNavigationIcon
        onClick={() => setShowNavigation((val) => !val)}
        active={showNavigation}
      />
      {showNavigation && nav}
    </ToggleContainer>
  );
};

export default ToggleNavigation;
