/** @format */

import React, { useEffect } from 'react';

const OutsideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) => {
  const onClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  });
};

export default OutsideClick;
