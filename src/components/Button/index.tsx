/** @format */

import React from 'react';

import { FullButton, EmptyButton } from './button';

export type ButtonFill = 'empty' | 'full';

interface Props {
  onClick?: () => void;
  fill?: ButtonFill;
  margin?: string | number;
  padding?: string | number;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  padding,
  margin,
  fill,
  type,
}) => {
  const props = { onClick, margin, padding };
  if (fill === 'empty')
    return (
      <EmptyButton {...props} type={type || 'button'}>
        {children}
      </EmptyButton>
    );

  return (
    <FullButton {...props} type={type || 'button'}>
      {children}
    </FullButton>
  );
};

export default Button;
