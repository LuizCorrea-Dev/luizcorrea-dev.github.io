/** @format */

import { useEffect, useState } from 'react';

export const useToggleNav = () => {
  const [showToggleNav, setShowToggleNav] = useState(false);
  const OFFSET = window.innerHeight - 350;

  useEffect(() => {
    const isToggleNav = () => {
      if (window.scrollY > OFFSET && !showToggleNav) setShowToggleNav(true);
      else if (window.scrollY <= OFFSET && showToggleNav)
        setShowToggleNav(false);
    };

    window.addEventListener('scroll', isToggleNav);

    return () => window.removeEventListener('scroll', isToggleNav);
  }, [showToggleNav, setShowToggleNav, OFFSET]);

  return showToggleNav;
};
