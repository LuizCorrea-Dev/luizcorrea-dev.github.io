/** @format */
import React, { useContext } from 'react';

import DataContext from '../../../services/data';
import { Navigation } from '../../../services/data/navigation';

import { getVal } from '../../../styles/device';

import LinkWrapper from '../Wrapper';
import { NavigationList, NavigationItem } from './desktopnavigation';

const DesktopNavigation: React.FC = () => {
  const { navigation } = useContext(DataContext);

  const padding = getVal({
    desktopL: '10px 25px',
    desktopM: '10px 22px',
    laptopL: '8px 18px',
    laptopM: '8px 16px',
    laptopS: '8px 10px',
  });

  return (
    <NavigationList>
      {navigation.slice(1).map((nav: Navigation) => (
        <NavigationItem key={nav.name}>
          <LinkWrapper link={nav.link} padding={padding}>
            {nav.name}
          </LinkWrapper>
        </NavigationItem>
      ))}
    </NavigationList>
  );
};

export default DesktopNavigation;
