/** @format */

import styled from 'styled-components';

export type Type = 'dark' | 'light';

interface Props {
  type: Type;
}

export const Linker = styled.div<Props>(({ theme, type }) => ({
  display: 'block',
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translate(-50%)',
  width: '55px',
  height: '20px',
  clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
  backgroundColor: type === 'dark' ? theme.colors.dark80 : theme.colors.dark50,
}));

export default Linker;
