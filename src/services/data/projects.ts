/** @format */

import projectsEnglish from '../../assets/data/projectsEnglish';
import projectsPortuguese from '../../assets/data/projectsPortuguese';
import { Language } from '.';

export interface Projects {
  title: string;
  description: string;
  github: string;
  demo: string;
  image: string;
}

export default function getProjects(language: Language): Projects[] {
  if (language === 'PT-BR') return projectsPortuguese;
  return projectsEnglish;
}
