/** @format */
import React from 'react';

import { Container, Bar } from './mobilenavigationicon';

interface Props {
  onClick: () => void;
  active: boolean;
}

const MobileNavigationIcon: React.FC<Props> = ({ onClick, active }) => {
  return (
    <Container onClick={onClick}>
      <Bar active={active} />
      <Bar active={active} />
      <Bar active={active} />
    </Container>
  );
};

export default MobileNavigationIcon;
