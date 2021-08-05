/** @format */

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  animation: string;
  animationFillMode?: string;
  margin?: number;
  style?: Record<string, string | number>;
}

const Animate: React.FC<Props> = ({
  children,
  animation,
  animationFillMode = 'backwards',
  margin = -150,
  style = {},
}) => {
  const [view, setView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: `${margin}px 0px`,
  });

  useEffect(() => {
    if (inView) setView(true);
  }, [inView]);

  const parentStyle = { ...style };
  const animationStyle = { animation, animationFillMode, ...parentStyle };

  return (
    <div
      ref={ref}
      style={inView || view ? animationStyle : { opacity: 0, ...parentStyle }}
    >
      {children}
    </div>
  );
};

export default Animate;
