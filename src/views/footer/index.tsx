/** @format */

import React, { useContext } from 'react';
import styled from 'styled-components';

import DataContext from '../../services/data';

export const Container = styled.footer(({ theme }) => ({
  textAlign: 'center',
  padding: '18px 10px',
  backgroundColor: theme.colors.dark80,
  color: theme.colors.gray90,
}));

export const Copyright = styled.div(({ theme }) => ({
  fontSize: theme.fontSizes[3],
  marginBottom: '8px',
}));

export const Name = styled.div(({ theme }) => ({
  fontSize: theme.fontSizes[2],
}));

export const Golden = styled.span(({ theme }) => ({
  color: theme.colors.primary100,
}));

const Footer: React.FC = () => {
  const {
    about: { footer },
  } = useContext(DataContext);

  return (
    <Container>
      <Copyright>&copy; {footer.copyright} 2021</Copyright>
      <Name>
        {footer.createdBy} <Golden>Luiz Correa</Golden>
      </Name>
    </Container>
  );
};

export default Footer;
