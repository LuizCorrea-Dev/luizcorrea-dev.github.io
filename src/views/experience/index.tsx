/** @format */

import React, { useContext } from 'react';

import DataContext from '../../services/data';

import { TIME } from '../../constants/constants';

import Section from '../../components/Section';
import Animate from '../../components/Animate';
import Title from '../../components/Title';
import Box from '../../components/Box';
import Timeline from '../../components/Timeline';

const Experience: React.FC = () => {
  const {
    about: { titles },
    experience,
  } = useContext(DataContext);

  return (
    <Section variant="light" linker name="nav-experience">
      <Animate animation={`move-in-right-short ${TIME}s ease-out`}>
        <Title position="left">{titles.experience}</Title>
      </Animate>
      
      <Box paddingY={12}>
        <Animate animation={`fade-in ${TIME}s ease-out`} margin={0}>
          <Timeline points={experience} />
        </Animate>
      </Box>

     
    </Section>
  );
};

export default Experience;
