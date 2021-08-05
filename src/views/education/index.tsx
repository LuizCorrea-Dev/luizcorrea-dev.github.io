/** @format */

import React, { useContext } from 'react';

import DataContext from '../../services/data';

import { TIME } from '../../constants/constants';

import Section from '../../components/Section';
import Animate from '../../components/Animate';
import Title from '../../components/Title';
import Box from '../../components/Box';
import Timeline2 from '../../components/Timeline2';

const Education: React.FC = () => {
  const {
    about: { titles },
    education,
  } = useContext(DataContext);

  return (
    <Section variant="dark" linker name="nav-education">
      <Animate animation={`move-in-right-short ${TIME}s ease-out`}>
        <Title position="right">{titles.education}</Title>
      </Animate>
      
      <Box paddingY={12}>
        <Animate animation={`fade-in ${TIME}s ease-out`} margin={0}>
          <Timeline2 points={education} />
        </Animate>
        
      </Box>

    </Section>
  );
};

export default Education;
