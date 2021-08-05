/** @format */

import React from 'react';

import { Container, Photo } from './portrait';

interface Props {
  src: string;
  alt: string;
}

const Portrait: React.FC<Props> = ({ src, alt }) => {
  return (
    <Container>
      <Photo src={src} alt={alt} />
    </Container>
  );
};

export default Portrait;
