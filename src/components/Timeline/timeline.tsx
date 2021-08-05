/** @format */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import { getVal, LAYOUT } from '../../styles/device';

import { PointProps } from '.';
import Box from '../Box';
import DropText from '../DropText';

const OFFSET = 0.25;

export const Node = styled.div<{ size: number }>(({ theme, size }) => ({
  display: 'flex',
  borderRadius: '100%',
  width: size,
  height: size,
  backgroundColor: theme.colors.primary100,
}));

export const Line = styled.div(({ theme }) => ({
  display: 'flex',
  width: '2px',
  height: getVal({
    desktopL: 130,
    desktopM: 125,
    desktopS: 120,
    laptopL: 110,
    tabS: 130,
    mobileL: 170,
    mobileM: 180,
  }),
  backgroundColor: theme.colors.primary100,
  marginLeft: getVal({
    desktopL: 0,
    desktopM: 0,
    desktopS: 0,
    laptopL: 0,
    tabS: 8.5,
    mobileL: 8.5,
    mobileM: 7.5,
  }),
  marginTop: window.innerWidth > LAYOUT ? 0 : -16,
}));

export const Container = styled.div<{ position: 'left' | 'right' }>(
  ({ theme, position }) => ({
    width: window.innerWidth > LAYOUT ? '48%' : '90%',
    display: 'flex',
    height: 50,
    left: position === 'right' ? '52%' : 'auto',
    right: position === 'left' ? '52%' : 'auto',
    position: window.innerWidth > LAYOUT ? 'absolute' : 'static',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: theme.fontSizes[4],
  })
);

export const Point: React.FC<PointProps> = ({
  start,
  end,
  title,
  description,
  position,
}) => {
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: `-${window.innerHeight * OFFSET}px 0px`,
  });

  useEffect(() => {
    if (!inView) setOpen(false);
  }, [inView]);

  if (position === 'right')
    return (
      <>
        <Node
          size={getVal({
            desktopL: 20,
            mobileL: 19,
            mobileM: 16,
          })}
        />
        <Container position="right" ref={ref}>
          <Box
            color="primary100"
            opacity={0.9}
            width={getVal({
              desktopL: '32%',
              mobileL: '32%',
              mobileM: '34%',
            })}
            style={{
              fontSize: getVal({
                desktopL: 'inherit',
                mobileL: 'inherit',
                mobileM: '11px',
              }),
            }}
            textAlign="center"
          >
            {start} - {end}
          </Box>
          <DropText
            title={title}
            description={description}
            align="left"
            open={open}
            setOpen={setOpen}
          />
        </Container>
      </>
    );

  return (
    <>
      {' '}
      <Node size={20} />
      <Container position="left" ref={ref}>
        <DropText
          title={title}
          description={description}
          align="right"
          open={open}
          setOpen={setOpen}
        />
        <Box color="primary100" opacity={0.95} width="32%" textAlign="center">
          {start} - {end}
        </Box>
      </Container>
    </>
  );
};
