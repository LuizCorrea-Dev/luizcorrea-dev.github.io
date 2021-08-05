/** @format */

import React from 'react';

interface Props {
  link: string;
  label: string;
}

const Link: React.FC<Props> = ({ link, label = 'external-link', children }) => {
  return (
    <a href={link} aria-label={label} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default Link;
