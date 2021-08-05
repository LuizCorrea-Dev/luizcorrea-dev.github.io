/** @format */

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

import DataContext, { Language } from './services/data';
import getAbout from './services/data/about';
import getNavigation from './services/data/navigation';
import getExperience from './services/data/experience';
import getEducation from './services/data/education';
import getProjects from './services/data/projects';
import getSkills from './services/data/skills';

import { Styles } from './styles/styles';
import { Theme } from './styles/theme';

import Portfolio from './views/portfolio';

const App: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    (localStorage.getItem('language') as Language) || 'EN'
  );
  const [currentOpacity, setCurrentOpacity] = useState(0);

  // eslint-disable-next-line
  const [dimensions, setDimensions] = useState<number[]>([
    window.innerWidth,
    window.innerHeight,
  ]);

  const setResize = useCallback(() => {
    setDimensions([window.innerWidth, window.innerHeight]);
  }, []);

  const setLanguage = useCallback((language: Language): void => {
    localStorage.setItem('language', language);
    setCurrentLanguage(language);
  }, []);

  const language = currentLanguage;

  useEffect(() => {
    window.addEventListener('resize', setResize);
    return () => window.removeEventListener('resize', setResize);
  }, [setResize]);

  useEffect(() => {
    setTimeout(() => {
      setCurrentOpacity(1);
    }, 50);
  }, []);

  const data = useMemo(
    () => ({
      about: getAbout(language),
      navigation: getNavigation(language),
      experience: getExperience(language),
      education: getEducation(language),
      projects: getProjects(language),
      skills: getSkills(language),
      setLanguage,
      language,
    }),
    [language, setLanguage]
  );

  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Styles />
        <DataContext.Provider value={data}>
          <div style={{ opacity: currentOpacity, transition: 'opacity 1s' }}>
            <Portfolio />
          </div>
        </DataContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default App;
