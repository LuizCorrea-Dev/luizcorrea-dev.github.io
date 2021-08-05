/** @format */

import educationEnglish from '../../assets/data/educationEnglish';
import educationPortuguese from '../../assets/data/educationPortuguese';
import { Language } from '.';

export interface Education {
  end: number;
  hours: number;
  title: string;
  description: string;
  image: string;
}

export default function getEducation(language: Language): Education[] {
  if (language === 'PT-BR') return educationPortuguese;
  return educationEnglish;
}
