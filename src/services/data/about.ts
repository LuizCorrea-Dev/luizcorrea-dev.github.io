/** @format */

import * as aboutEnglish from '../../assets/data/aboutEnglish';
import * as aboutPortuguese from '../../assets/data/aboutPortuguese';
import { Language } from '.';

export interface About {
  logo: string;
  about: string;
  timeGreet: {
    morning: string;
    afternoon: string;
    evening: string;
  };
  languages: {
    english: string;
    portuguese: string;
  };
  title: string;
  subtitle: string;
  titles: Record<string, string>;
  contactMessage: string;
  copy: string;
  copyError: string;
  phone: string;
  email: string;
  linkResume: string;
  buttons: {
    contact: string;
    about: string;
    code: string;
    demo: string;
    showMore: string;
    showLess: string;
    resume: string;
  };
  footer: {
    copyright: string;
    createdBy: string;
  };
}

export default function getAbout(language: Language): About {
  if (language === 'PT-BR') return aboutPortuguese;
  return aboutEnglish;
}
