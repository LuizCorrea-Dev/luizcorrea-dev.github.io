/** @format */

import { IconifyIcon } from '@iconify/react';

import skillsEnglish from '../../assets/data/skillsEnglish';
import skillsPortuguese from '../../assets/data/skillsPortuguese';
import { Language } from '.';

export interface Skill {
  name: string;
  description: string;
  icon: IconifyIcon;
  type: 'SE' | 'DSAI';
  scale?: number;
}

export default function getSkills(language: Language): Skill[] {
  if (language === 'PT-BR') return skillsPortuguese;
  return skillsEnglish;
}
