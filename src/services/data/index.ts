/** @format */

import { createContext } from 'react';

import getAbout, { About } from './about';
import getExperience, { Experience } from './experience';
import getEducation, { Education } from './education';
import getNaivation, { Navigation } from './navigation';
import getProjects, { Projects } from './projects';
import getSkills, { Skill } from './skills';

const DEFAULT_LANGUAGE = 'EN';
export type Language = 'EN' | 'PT-BR';

interface DataInterface {
  about: About;
  experience: Experience[];
  education: Education[];
  navigation: Navigation[];
  projects: Projects[];
  language: Language;
  skills: Skill[];
  setLanguage: null | ((language: Language) => void);
}

const DataContext = createContext<DataInterface>({
  about: getAbout(DEFAULT_LANGUAGE),
  experience: getExperience(DEFAULT_LANGUAGE),
  education: getEducation(DEFAULT_LANGUAGE),
  navigation: getNaivation(DEFAULT_LANGUAGE),
  projects: getProjects(DEFAULT_LANGUAGE),
  skills: getSkills(DEFAULT_LANGUAGE),
  language: DEFAULT_LANGUAGE,
  setLanguage: null,
});

export default DataContext;
