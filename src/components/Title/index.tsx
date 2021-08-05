/** @format */

import styled from 'styled-components';

interface Props {
  position?: 'left' | 'center' | 'right';
}

export const Title = styled.h2<Props>(({ theme, position = 'left' }) => ({
  fontSize: theme.fontSizes[8],
  paddingLeft:
    position === 'left' ? '55px' : position === 'center' ? '45px' : 0,
  paddingRight:
    position === 'right' ? '55px' : position === 'center' ? '45px' : 0,
  margin: 0,
  textAlign: position,
  position: 'relative',
  fontWeight: 500,
  color: theme.colors.primary100,
  display: position === 'center' ? 'inline-block' : 'block',

  '::after': {
    // eslint-disable-next-line quotes
    content: `''`,
    display: 'block',
    position: 'absolute',
    left: position !== 'right' ? 0 : 'auto',
    right: position === 'right' ? 0 : 'auto',
    top: '50%',
    transform: 'translate(0, -50%)',
    backgroundColor: theme.colors.primary100,
    height: '3px',
    width: position === 'center' ? '35px' : '40px',
  },

  '::before':
    position === 'center'
      ? {
          // eslint-disable-next-line quotes
          content: `''`,
          display: 'block',
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translate(0, -50%)',
          backgroundColor: theme.colors.primary100,
          height: '3px',
          width: '35px',
        }
      : undefined,
}));

export default Title;
