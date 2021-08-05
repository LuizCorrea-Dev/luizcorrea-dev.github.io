/** @format */

import React, { useContext } from 'react';

import Section from '../../components/Section';
import Box, { FlexBox } from '../../components/Box';
import Animate from '../../components/Animate';
import Portrait from '../../components/Portrait';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';

import DataContext from '../../services/data';
import { getVal } from '../../styles/device';

import Photo from '../../assets/images/portrait.png';
import Button from '../../components/Button';

import { LAYOUT } from '../../styles/device';


import { TIME } from '../../constants/constants';

const About: React.FC = () => {
  const {
    about: { titles, about, buttons, linkResume},
  } = useContext(DataContext);

  const flex = getVal({
    desktopL: 'row',
    tabM: 'row',
    tabS: 'column',
    mobileS: 'column',
  });

  const textWidth = getVal({
    desktopL: '65%',
    tabL: '60%',
    tabS: '100%',
  });

  const portraitWidth = getVal({
    desktopL: '35%',
    tabM: '35%',
    tabS: '60%',
    mobileS: '50%',
  });

  const margin = getVal({
    desktopL: 0,
    tabM: 0,
    tabS: 40,
  });

  const mobile = window.innerWidth <= LAYOUT;

  
  
  const resume = () => {

    

    window.open(linkResume);
  };

  return (
    <Section variant="dark" linker name="nav-about">
      <FlexBox
        justifyContent="space-between"
        flexDirection={flex}
        alignItems="center"
      >
        <Box
          width={portraitWidth}
          marginRight={getVal({
            desktopL: 12,
            tabL: 8,
            tabS: 0,
          })}
          marginBottom={margin}
        >
          <Animate animation={`fade-in ${TIME}s ease-out`}>
            <Portrait src={Photo} alt="Portrait" />
          </Animate>
        </Box>

        <Box width={textWidth}>
          <Animate animation={`move-in-right-short ${TIME}s ease-out`}>
            <Title position="left">{titles.about}</Title>
            {about.split('\n').map((text, idx) => (
      
              <Box key={idx} margin="15px 0">
                <Paragraph fontSize={4} lineHeight={1.8}>
                  {text}
                </Paragraph>            
              </Box>        
         
            ))}
          </Animate>
          <FlexBox justifyContent="center" marginTop={!mobile ? 50 : 0}>
            <Button onClick={resume}>{buttons.resume}</Button>
          </FlexBox>
        </Box>
      </FlexBox>
    </Section>
  );
};

export default About;
