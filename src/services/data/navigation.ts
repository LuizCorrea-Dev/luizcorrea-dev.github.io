/** @format */

import navigationEnglish from '../../assets/data/navigationEnglish';
import navigationPortuguese from '../../assets/data/navigationPortuguese';
import { Language } from '.';

export interface Navigation {
  name: string;
  link: string;
}

export default function getNavigation(language: Language): Navigation[] {
  if (language === 'PT-BR') return navigationPortuguese;
  return navigationEnglish;
}
