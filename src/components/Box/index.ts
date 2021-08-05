/** @format */

import styled, { CSSProperties, DefaultTheme } from 'styled-components';
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  boxShadow,
  BoxShadowProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  system,
  textAlign,
  TextAlignProps,
} from 'styled-system';

type BoxPropsWithColor = FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  BackgroundProps &
  BorderProps &
  BoxShadowProps &
  TextAlignProps &
  ColorProps<DefaultTheme> &
  Pick<
    CSSProperties,
    | 'transform'
    | 'transition'
    | 'direction'
    | 'userSelect'
    | 'pointerEvents'
    | 'cursor'
  >;

// color is omited to avoid conflict with react props
export type BoxProps = Omit<BoxPropsWithColor, 'color'>;

export const boxStyle = compose(
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  boxShadow,
  textAlign,
  background,
  system({
    transition: {
      property: 'transition',
      scale: 'transitions',
    },
    cursor: true,
    pointerEvents: true,
    transform: true,
    direction: true,
    userSelect: true,
  })
);

const Box = styled.div<BoxProps>(
  {
    flexShrink: 0, // this is for Safari
  },
  boxStyle
);

export default Box;

export const FlexBox = styled(Box)({ display: 'flex' });
