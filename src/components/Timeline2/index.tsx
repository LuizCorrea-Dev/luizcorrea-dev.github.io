/** @format */

import React, { useMemo } from 'react';

import { LAYOUT } from '../../styles/device';

import { FlexBox } from '../Box';
import { Line, Point } from './timeline';

export interface PointProps {
  end: string | number;
  hours: string | number;
  description: string;
  title: string;
  image : string;
  position?: 'left' | 'right';
}

interface Props {
  points: PointProps[];
}

const Timeline: React.FC<Props> = ({ points }) => {
  const render = useMemo(
    () =>
      points.map((point, i) => (
        <FlexBox
          key={i}
          flexDirection="column"
          alignItems={window.innerWidth > LAYOUT ? 'center' : 'start'}
          width="100%"
          marginTop={window.innerWidth > LAYOUT || i === 0 ? 0 : -16}
        >
          <FlexBox
            width="100%"
            justifyContent={window.innerWidth > LAYOUT ? 'center' : 'left'}
            alignItems="center"
            position="relative"
          >
            <Point
              position={
                window.innerWidth > LAYOUT
                  ? i % 2 === 1
                    ? 'left'
                    : 'right'
                  : 'right'
              }
              {...point}
            />
          </FlexBox>
          

          {i !== points.length - 1 && <Line />}
        </FlexBox>
      )),
    [points]
  );

  return (
    <FlexBox alignItems="center" flexDirection="column" paddingBottom={11}>
      {render}
    </FlexBox>
  );
};

export default Timeline;
