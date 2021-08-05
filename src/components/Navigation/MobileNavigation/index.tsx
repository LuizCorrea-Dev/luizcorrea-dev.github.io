/** @format */

import React, { useContext, useMemo } from 'react';

import { FlexBox } from '../../Box';
import LinkWrapper from '../Wrapper';
import {
  MobileContainer,
  MobileList,
  MobileElement,
  LanguageContainer,
} from './mobilenavigation';

import DataContext from '../../../services/data';

const MobileNavigation: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const { navigation, language, setLanguage } = useContext(DataContext);

  const list = useMemo(
    () =>
      navigation.map((el) => (
        <LinkWrapper link={el.link} key={el.name} onClick={onClick}>
          <MobileElement>{el.name}</MobileElement>
        </LinkWrapper>
      )),
    [navigation, onClick]
  );

  return (
    <MobileContainer>
      <MobileList>{list}</MobileList>
      <FlexBox onClick={onClick}>
        <LanguageContainer
          active={language === 'EN'}
          onClick={() => setLanguage && setLanguage('EN')}
        >
          EN
        </LanguageContainer>
        <LanguageContainer
          active={language === 'PT-BR'}
          onClick={() => setLanguage && setLanguage('PT-BR')}
        >
          PT-BR
        </LanguageContainer>
      </FlexBox>
    </MobileContainer>
  );
};

export default MobileNavigation;
