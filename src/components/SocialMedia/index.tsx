/** @format */
import React, { useMemo } from 'react';
import { AiOutlineLinkedin, AiFillGithub, AiFillProfile } from 'react-icons/ai';
import { getVal } from '../../styles/device';

import { SocialMediaItem, SocialMediaList } from './socialmedia';
import Link from '../Link';

export type Orientation = 'vertical' | 'horizontal';

export interface Props {
  orientation: Orientation;
  distance?: number;
  size?: number;
}

const SocialMedia: React.FC<Props> = ({ orientation, distance, size }) => {
  const defaultSize = getVal({
    desktopL: 24,
    desktopM: 23,
    desktopS: 22,
    laptopL: 21,
    laptopM: 20,
    tabL: 28,
    mobileM: 24,
  });
  const iconSize = size || defaultSize;
  const links = useMemo(
    () => [
      {
        link: 'https://www.linkedin.com/in/luizbatistacorrea/',
        label: 'LinkedIn',
        icon: <AiOutlineLinkedin size={iconSize} />,
      },
      {
        link: 'https://github.com/LuizCorrea-Dev',
        label: 'GitHub',
        icon: <AiFillGithub size={iconSize} />,
      }, 
      {
        link: 'https://drive.google.com/file/d/1LXSLSMzjdnXYABjMTIGS3SjqbdNoNhfa/view?usp=sharing',
        label: 'Currículo',
        icon: <AiFillProfile size={iconSize} />,
      },    
    ],
    [iconSize]
  );

  return (
    <SocialMediaList orientation={orientation}>
      {links.map((el) => (
        <SocialMediaItem
          key={el.label}
          orientation={orientation}
          distance={distance}
        >
          <Link link={el.link} label={el.label}>
            {el.icon}
          </Link>
        </SocialMediaItem>
      ))}
    </SocialMediaList>
  );
};

export default SocialMedia;
