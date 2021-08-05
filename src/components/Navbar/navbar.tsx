/** @format */

import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import Selector from '../Selector';

import DataContect from '../../services/data';

import { getVal } from '../../styles/device';

export const LanguageSelector: React.FC = () => {
  const {
    about: { languages },
    language,
    setLanguage,
  } = useContext(DataContect);

  const LANGUAGES = [languages.english, languages.portuguese];

  const [currentLanguage, setCurrentLanguage] = useState(
    language === 'EN' ? LANGUAGES[0] : LANGUAGES[1]
  );

  return (
    <Selector
      width={getVal({
        desktopL: 120,
        laptopL: 110,
        laptopS: 100,
      })}
      options={LANGUAGES}
      value={currentLanguage}
      onChange={(lang) => {
        if (!setLanguage) return;
        if (lang === languages.english) setLanguage('EN');
        else setLanguage('PT-BR');

        if (lang === 'Enlish') setCurrentLanguage('English');

        if (currentLanguage === languages.english && lang === 'Portuguese')
          setCurrentLanguage('Português');
        else if (currentLanguage === languages.portuguese && lang === 'English')
          setCurrentLanguage('English');
        else setCurrentLanguage(lang);
      }}
    />
  );
};

export const Overlay = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 8888,
  animation: 'fade-in 0.2s ease-in',
});
