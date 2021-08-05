/** @format */

import React from 'react';
import { Link } from 'react-scroll';
import { getVal } from '../../../styles/device';

interface Props {
  link: string;
  padding?: number | string;
  onClick?: () => void;
}

export const LinkWrapper: React.FC<Props> = ({
  padding = 0,
  link,
  children,
  onClick,
}) => {
  const offset = getVal({
    desktopL: -70,
    laptopL: -40,
    laptopM: -30,
    tabL: 0,
    tabM: -110,
    mobileL: -80,
    mobileM: -60,
  });

  return (
    <Link
      style={{ padding: padding, cursor: 'pointer' }}
      activeClass="active"
      to={link}
      spy={true}
      smooth={true}
      offset={offset}
      duration={500}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default LinkWrapper;
