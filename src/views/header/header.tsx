/** @format */

import React, { useContext } from 'react';
import styled, { keyframes, css } from 'styled-components';

import Box, { FlexBox } from '../../components/Box';
import LinkWrapper from '../../components/Navigation/Wrapper';
import Button from '../../components/Button';

import DataContext from '../../services/data';

import { getVal } from '../../styles/device';

export const Container = styled.section<{ name?: string }>({
  width: '100%',
  height: '100vh',
  position: 'relative',
});

const WIDTH = {
  desktopL: 70,
  desktopM: 50,
  desktopS: 45,
  laptopL: 40,
  laptopM: 36,
  tabL: 34,
  mobileL: 30,
  mobileM: 26,
};

const moveStrips = keyframes`
0% {
  width: 0;
}

100% {
  width: ${getVal(WIDTH)}px;
}
`;

export const Title = styled.h1<{ fontSize?: number }>(
  ({ theme, fontSize = 55 }) => ({
    fontSize: `${fontSize}px`,
    color: theme.colors.white,
    fontWeight: theme.fontWeights.semiBold,
    textAlign: getVal({
      desktopL: 'center',
      tabS: 'center',
      mobileL: 'left',
    }),
    margin: getVal({
      desktopL: '22px 0',
      desktopM: '16px 0',
      desktopS: '16px 0',
      laptopL: '14px 0',
      laptopM: '12px 0',
      tabL: '14px 0',
      mobileM: '8px 0',
    }),
    animation: 'fade-in 1.4s ease-out 0.6s',
    animationFillMode: 'backwards',
  })
);

export const Greeting = styled.div(
  ({ theme }) => ({
    fontSize: getVal({
      desktopL: 20,
      desktopM: 18,
      desktopS: 18,
      laptopL: 16,
      laptopM: 14,
      tabL: 16,
      mobileM: 12,
    }),
    color: theme.colors.primary100,
    display: 'flex',
    alignItems: 'center',
    animation: 'fade-in 0.8s ease-out 0.2s',
    animationFillMode: 'backwards',

    '&:after': {
      content: `''`,
      display: getVal({
        desktopL: 'block',
        tabS: 'block',
        mobileL: 'none',
      }),
      height: '2px',
      width: `${getVal(WIDTH)}px`,
      backgroundColor: theme.colors.primary100,
      marginLeft: getVal({
        desktopL: '20px',
        desktopS: '18px',
        laptopL: '16px',
        laptopM: '14px',
      }),
    },

    '&:before': {
      content: `''`,
      display: 'block',
      width: `${getVal(WIDTH)}px`,
      height: '2px',
      backgroundColor: theme.colors.primary100,
      marginRight: getVal({
        desktopL: '20px',
        desktopS: '18px',
        laptopL: '16px',
        laptopM: '14px',
      }),
    },
  }),
  css`
    &::after {
      animation: ${moveStrips} 1s ease-out;
      animationfillmode: backwards;
    }
    &::before {
      animation: ${moveStrips} 1s ease-out;
      animationfillmode: backwards;
    }
  `
);

export const Subtitle = styled.p(({ theme }) => ({
  fontSize: getVal({
    desktopL: 20,
    desktopM: 18,
    desktopS: 18,
    laptopL: 17,
    laptopM: 16,
    tabL: 18,
    tabS: 16,
    mobileM: 13,
  }),
  color: theme.colors.white,
  fontWeight: theme.fontWeights.light,
  textAlign: getVal({
    desktopL: 'center',
    tabS: 'center',
    mobileL: 'left',
  }),
  lineHeight: getVal({
    desktopL: '34px',
    desktopM: '30px',
    desktopS: '30px',
    laptopL: '28px',
    laptopM: '26px',
    mobileM: '21px',
  }),
  margin: 0,
  marginBottom: '8px',
  animation: 'fade-in 1.8s ease-out 1.0s',
  animationFillMode: 'backwards',
}));

export const HeaderBox: React.FC = () => {
  const { about } = useContext(DataContext);
  let greeting = about.timeGreet.evening;
  const time = new Date().getHours();
  if (time >= 6 && time < 12) {
    greeting = about.timeGreet.morning;
  } else if (time >= 12 && time < 18) {
    greeting = about.timeGreet.afternoon;
  }

  const titleFont = getVal({
    desktopL: 55,
    desktopM: 48,
    desktopS: 46,
    laptopL: 40,
    laptopM: 36,
    tabL: 38,
    mobileL: 36,
    mobileM: 30,
  });

  const longTitleFont = getVal({
    desktopL: 45,
    desktopM: 42,
    desktopS: 38,
    laptopL: 38,
    laptopM: 33,
    tabL: 34,
    mobileL: 32,
    mobileM: 28,
  });

  const width = getVal({
    desktopL: 700,
    laptopL: 600,
    laptopM: 550,
    tabL: 600,
    tabS: 500,
    mobileL: 400,
    mobileM: window.innerWidth * 0.82,
    mobileS: window.innerWidth * 0.86,
  });

  const buttonSpace = getVal({
    desktopL: 30,
    laptopL: 28,
    laptopM: 22,
    mobileM: 16,
  });

  const top = getVal({
    desktopL: '50%',
    laptopL: '52%',
    tabL: '50%',
    mobileL: '48%',
  });

  return (
    <FlexBox
      position="absolute"
      top={top}
      left="50%"
      transform="translate(-50%, -50%)"
      flexDirection="column"
      alignItems={getVal({
        desktopL: 'center',
        tabS: 'center',
        mobileL: 'start',
      })}
      width={width}
    >
      <Greeting>{greeting?.toUpperCase()}</Greeting>
      <Title fontSize={about.title.length > 5 ? longTitleFont : titleFont}>
        {about.title}{' '}
        <Box display="inline-flex" color="primary100">
          Luiz
        </Box>{' '}
        Correa
      </Title>
      <Subtitle>{about.subtitle}</Subtitle>
      <FlexBox
        marginTop="28px"
        style={{
          animation: 'move-in-up 1.8s ease-out 1.4s',
          animationFillMode: 'backwards',
        }}
      >
        <LinkWrapper link="nav-contact">
          <Button fill="full">{about.buttons.contact}</Button>
        </LinkWrapper>
        <FlexBox marginX={buttonSpace} />
        <LinkWrapper link="nav-about">
          <Button fill="empty">{about.buttons.about}</Button>
        </LinkWrapper>
      </FlexBox>
    </FlexBox>
  );
};

export const Down = styled.button(({ theme }) => ({
  position: 'absolute',
  bottom: getVal({
    desktopL: 36,
    desktopM: 28,
    desktopS: 28,
    laptopL: 26,
    laptopM: 20,
    tabL: 70,
    tabM: 60,
    tabS: 44,
    mobileL: 45,
  }),
  right: getVal({
    desktopL: '50%',
    laptopM: '50%',
    tabL: 50,
  }),
  transform: getVal({
    desktopL: 'translate(50%, -50%)',
    laptopM: 'translate(50%, -50%)',
    tabL: 'none',
  }),
  opacity: '60%',
  color: theme.colors.white,
  transition: 'opacity 0.1s, color 0.1s',

  ':hover': {
    color: theme.colors.primary100,
    opacity: '80%',
  },
}));
