/** @format */

import React, { useEffect, useState } from 'react';
import { Icon, IconifyIcon } from '@iconify/react';

import { getVal } from '../../styles/device';

import { ColTitle, Container, Grid, Wrapper, Title } from './gridselector';

import { TIME } from '../../constants/constants';

import Box, { FlexBox } from '../Box';
import Animate from '../Animate';
import Paragraph from '../Paragraph';

interface Item {
  icon: IconifyIcon;
  name: string;
  description: string;
  scale?: number;
  col: string;
  idx: number;
}

interface Props {
  cols: string[];
  items: Item[];
  selected?: number;
}

const GridSelector: React.FC<Props> = ({ cols, items, selected = 0 }) => {
  const [select, setSelect] = useState(items[selected]);

  useEffect(() => {
    setSelect((item) => items[item.idx || 0]);
  }, [items]);

  const icon = getVal({
    desktopL: 84,
    desktopM: 80,
    desktopS: 78,
    laptopL: 74,
    laptopM: 72,
    laptopS: 68,
    tabL: 66,
    mobileL: 60,
    mobileM: 52,
    mobileS: 32,
  });

  const iconRight = getVal({
    desktopL: 50,
    desktopM: 46,
    desktopS: 42,
    laptopL: 38,
    tabS: 20,
    mobileL: 0,
    mobileM: 0,
  });

  const iconBottom = getVal({
    desktopL: 0,
    tabS: 0,
    mobileL: '16px',
  });

  const iconWidth = getVal({
    desktopL: 100,
    desktopM: 90,
    desktopS: 80,
    laptopL: 75,
    tabL: 75,
    mobileL: 75,
  });

  const horizontal = getVal({
    desktopL: 110,
    laptopL: 0,
  });

  const bottom = getVal({
    desktopL: 30,
    laptopL: 20,
  });

  const left = getVal({
    desktopL: 50,
    laptopL: 30,
    laptopM: 20,
    tabS: 0,
  });

  const width = getVal({
    desktopL: 600,
    laptopL: 500,
    laptopM: 480,
    laptopS: 460,
    tabL: 440,
    tabS: 390,
    mobileL: '95%',
  });

  const align = getVal({
    desktopL: 'left',
    tabS: 'left',
    mobileL: 'center',
  });

  const colDirection = getVal({
    desktopL: 'row',
    tabS: 'row',
    mobileL: 'column',
  });

  const height = getVal({
    desktopL: 120,
    tabL: 120,
    mobileL: 150,
  });

  const itemDirection = getVal({
    desktopL: 'row',
    tabL: 'row',
    mobileL: 'column',
  });

  return (
    <Container>
      <FlexBox
        paddingX={horizontal}
        marginBottom={bottom}
        justifyContent="center"
        alignItems="center"
        minHeight={height}
        flexDirection={itemDirection}
      >
        <FlexBox
          marginRight={iconRight}
          marginBottom={iconBottom}
          width={iconWidth}
          justifyContent="center"
        >
          <Animate animation={`fade-in ${TIME}s ease-out`}>
            <Icon
              icon={select.icon}
              style={{
                fontSize: icon,
                transform: `scale(${select.scale || 1.0})`,
              }}
            />
          </Animate>
        </FlexBox>

        <Box style={{ width: width }} textAlign={align}>
          <Animate animation={`move-in-right-short ${TIME}s ease-out`}>
            <Title>{select.name}</Title>
            <Paragraph
              color="gray90"
              style={{ margin: '4px 0' }}
              textAlign={
                align === 'center' && select.description?.length > 30
                  ? 'justify'
                  : 'left'
              }
            >
              {select.description}
            </Paragraph>
          </Animate>
        </Box>
      </FlexBox>

      <FlexBox
        justifyContent={'space-between'}
        alignItems={colDirection === 'column' ? 'center' : undefined}
        width="100%"
        flexDirection={colDirection}
      >
        {cols.map((colTitle, colNum) => (
          <FlexBox
            key={colTitle}
            width={colDirection === 'column' ? '100%' : `${86 / cols.length}%`}
            marginLeft={colNum === 0 ? left : undefined}
            marginBottom={
              colDirection === 'column' && colNum !== cols.length - 1 ? 30 : 0
            }
          >
            <Animate
              animation={`fade-in ${TIME}s ease-out ${colNum * 0.3 + 0.2}s`}
              style={{ width: '100%' }}
            >
              <FlexBox flexDirection="column" alignItems="center" width="100%">
                <ColTitle>{colTitle}</ColTitle> 
                <Grid>
                  {items
                    ?.filter((item) => item.col === colTitle)
                    .map((item, index) => (
                      <Wrapper
                        key={index}
                        onClick={() => setSelect(item)}
                        selected={item === select}
                      >
                        <Icon
                          icon={item.icon}
                          style={{
                            transform: `scale(${item.scale || 1.0})`,
                          }}
                        />
                      </Wrapper>
                    ))}
                </Grid>
              </FlexBox>
            </Animate>
          </FlexBox>
        ))}
      </FlexBox>
    </Container>
  );
};

export default GridSelector;
