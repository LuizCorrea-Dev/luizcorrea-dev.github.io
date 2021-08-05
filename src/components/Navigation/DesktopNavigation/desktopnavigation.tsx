/** @format */
import styled from 'styled-components';

const WIDTH = 10;

export const NavigationList = styled.ul(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  color: theme.colors.white,
  transform: 'translateY(5px)',
}));

export const NavigationItem = styled.li(({ theme }) => ({
  textDecoration: 'none',
  color: theme.colors.gray90,

  fontSize: theme.fontSizes[3],
  textTransform: 'uppercase',
  letterSpacing: '1px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',

  transition: 'all 0.2s',
  userSelect: 'none',
  alignItems: 'center',
  height: 'auto',

  '&:after': {
    content: `''`,
    display: 'block',
    margin: '4px auto',
    width: 0,
    backfaceVisibility: 'hidden',
    height: '2px',
    backgroundColor: theme.colors.primary100,
    transition: 'width 0.2s',
    transform: 'translateY(-7px)',
  },
  '&:hover': {
    color: theme.colors.primary100,

    '&:after': {
      width: `${WIDTH}px`,
      opacity: 1,
    },
  },
}));
