import styled from 'styled-components';

import { Orientation } from './';

import { getVal } from '../../styles/device';

export interface Props {
  orientation: Orientation;
  distance?: number;
}
export const SocialMediaList = styled.ul<Props>(({ orientation }) => ({
  display: 'flex',
  flexDirection: orientation === 'vertical' ? 'column' : 'row',

  '&:hover > :not(:hover)': {
    transform: 'scale(0.86)'
  }
}));

export const SocialMediaItem = styled.li<Props>(
  ({ theme, orientation, distance }) => ({
    margin:
      orientation === 'vertical'
        ? `${
            distance ||
            getVal({
              desktopL: 14,
              desktopM: 13,
              desktopS: 12,
              laptopL: 11,
              laptopM: 10
            })
          }px 0`
        : ` 0 ${
            distance ||
            getVal({
              desktopL: 14,
              desktopM: 13,
              desktopS: 12,
              laptopL: 11,
              laptopM: 10
            })
          }px`,
    transition: 'all 0.15s ease-in-out',
    color: theme.colors.gray90,

    '&:hover': {
      color: theme.colors.primary100,

      transform: 'scale(1.2)'
    }
  })
);