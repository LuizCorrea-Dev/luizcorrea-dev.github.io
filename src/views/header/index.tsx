/** @format */

import React from 'react';
import { FiArrowDownCircle } from 'react-icons/fi';

import Box from '../../components/Box';
import LinkWrapper from '../../components/Navigation/Wrapper';
import Navbar from '../../components/Navbar';
import Animate from '../../components/Animate';
import SocialMedia, { Orientation } from '../../components/SocialMedia';

import { Container, HeaderBox, Down } from './header';

import BREAKS, { getVal } from '../../styles/device';

const Header: React.FC = () => {
  const size = getVal({
    desktopL: 42,
    desktopM: 38,
    desktopS: 34,
    laptopL: 28,
    laptopM: 26,
    tabL: 36,
    mobileM: 28,
  });

  const barTop = getVal({
    desktopL: '50%',
    laptopS: '50%',
    tabL: 'auto',
  });
  const barBottom = getVal({
    desktopL: 'auto',
    laptopS: 'auto',
    tabL: 70,
    tabM: 60,
    tabS: 44,
    mobileL: 45,
  });
  const barRight = getVal({
    desktopL: 110,
    laptopL: 105,
    laptopS: 80,
    tabL: 'auto',
  });
  const barLeft = getVal({
    desktopL: 'auto',
    laptopL: 'auto',
    laptopS: 'auto',
    tabL: 30,
    mobileM: '20px',
  });

  const barTransform = getVal({
    desktopL: 'translate(50%, -50%)',
    laptopL: 'translate(50%, -50%)',
    laptopS: 'translate(50%, -50%)',
    tabL: 'none',
  });

  const barDistance = getVal({
    desktopL: 14,
    laptopS: 14,
    tabL: 18,
    mobileM: 10,
  });

  const barShow = getVal({
    desktopL: false,
    tabL: true,
  });

  const orientation: Orientation =
    window.innerWidth <= BREAKS.tabL ? 'horizontal' : 'vertical';

  return (
    <Container name="home">
      <Navbar />
      <HeaderBox />
      <Animate animation="fade-in 1.8s ease-in-out 1.4s" margin={0}>
        <Down>
          <LinkWrapper link="nav-about">
            <FiArrowDownCircle size={size} />
          </LinkWrapper>
        </Down>
      </Animate>

      {barShow && (
        <Box
          position="absolute"
          top={barTop}
          right={barRight}
          bottom={barBottom}
          left={barLeft}
          transform={barTransform}
        >
          <SocialMedia orientation={orientation} distance={barDistance} />
        </Box>
      )}
    </Container>
  );
};

export default Header;
