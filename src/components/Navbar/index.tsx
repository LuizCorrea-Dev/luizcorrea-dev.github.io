/** @format */

import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';

import { useToggleNav } from './hooks';

import OutsideClick from '../../hooks/OutsideClick';

import { FlexBox } from '../Box';
import Logo from '../Logo';
import DesktopNavigation from '../Navigation/DesktopNavigation';
import ToggleNavigation from '../Navigation/ToggleNavigation';
import MobileNavigationIcon from '../Navigation/MobileNavigationIcon';
import MobileNavigation from '../Navigation/MobileNavigation';

import { LanguageSelector, Overlay } from './navbar';

import BREAKS, { getVal } from '../../styles/device';

const Navbar = () => {
  const showToggleNav = useToggleNav();
  const theme: any = useTheme();
  const navRef = useRef(null);

  const [mobileNav, setMobileNav] = useState(false);
  const [isTop, setIsTop] = useState(true);

  OutsideClick(navRef, () => {
    setMobileNav(false);
  });

  const MOBILE_BREAK = BREAKS.tabL;

  const paddingX = getVal({
    desktopL: 220,
    desktopM: 160,
    desktopS: 150,
    laptopL: 140,
    laptopM: 130,
    laptopS: 70,
    tabS: 50,
    mobileM: 26,
  });
  const paddingY = getVal({
    desktopL: 0,
    laptopM: 0,
    laptopS: 0,
    tabL: 42,
    mobileM: 34,
  });

  const positionTop = getVal({
    desktopL: 50,
    desktopM: 40,
    laptopL: 40,
    laptopM: 30,
    tabL: 0,
  });

  const onMobile = window.innerWidth <= MOBILE_BREAK;

  const onScroll = () => {
    if (window.scrollY > 20) {
      if (isTop) setIsTop(false);
    } else {
      if (!isTop) setIsTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line
  }, [isTop]);

  const showMobileNav = () => setMobileNav((prev) => !prev);

  return (
    <>
      <FlexBox
        width="100%"
        paddingX={paddingX}
        paddingY={isTop ? paddingY : paddingY - 10}
        justifyContent="space-between"
        alignItems="center"
        position={!onMobile ? 'absolute' : 'fixed'}
        top={positionTop}
        left={0}
        zIndex={9999}
        transition="all 0.2s"
        backgroundColor={theme.colors['dark50']}
        boxShadow={
          !isTop && onMobile ? '0 15px 20px rgba(0,0,0,.25)' : undefined
        }
        ref={navRef}
      >
        <Logo />
        {!onMobile && (
          <>
            <DesktopNavigation />
            <LanguageSelector />
            {showToggleNav && <ToggleNavigation />}
          </>
        )}
        {onMobile && (
          <>
            <MobileNavigationIcon onClick={showMobileNav} active={mobileNav} />
            {mobileNav && (
              <MobileNavigation
                onClick={() => {
                  setMobileNav(false);
                }}
              ></MobileNavigation>
            )}
          </>
        )}
      </FlexBox>
      {mobileNav && <Overlay />}
    </>
  );
};

export default Navbar;
