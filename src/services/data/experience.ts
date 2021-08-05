/** @format */

import experienceEnglish from '../../assets/data/experienceEnglish';
import experiencePortuguese from '../../assets/data/experiencePortuguese';
import { Language } from '.';

export interface Experience {
  start: number;
  end: number;
  title: string;
  description: string;
}

export default function getExperience(language: Language): Experience[] {
  if (language === 'PT-BR') return experiencePortuguese;
  return experienceEnglish;
}
