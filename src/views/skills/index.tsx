/** @format */

import React, { useContext, useMemo } from 'react';

import DataContext from '../../services/data';

import { getVal, LAYOUT } from '../../styles/device';

import Section from '../../components/Section';
import Title from '../../components/Title';
import Box from '../../components/Box';
import GridSelector from '../../components/GridSelector';

const Skills: React.FC = () => {
  const {
    about: { titles },
    skills,
  } = useContext(DataContext);

  const cols = [`${titles.skillsSE}:`, `${titles.skillsDSAI}:`];

  const padding = getVal({
    desktopL: 150,
    laptopL: 125,
    laptopS: 110,
    tabL: 100,
    tabS: 0,
  });

  const vertical = getVal({
    desktopL: '-60%',
    laptopS: '-60%',
    tabL: '-90%',
  });

  const horizontal = getVal({
    desktopL: '-25%',
    laptopS: '-25%',
    tabL: '-30%',
    tabM: '-38%',
  });

  const verticalTitle = useMemo(
    () => (
      <Box
        position="absolute"
        top="50%"
        left="0"
        transform={`translate(${horizontal}, ${vertical})`}
      >
        <Box transform={'rotate(-90deg)'}>
          <Title position="left">{titles.skills}</Title>
        </Box>
      </Box>
    ),
    [titles.skills, vertical, horizontal]
  );

  const horizontalTitle = useMemo(
    () => (
      <Box
        marginBottom={getVal({
          desktopL: 8,
          tabS: 8,
          mobileL: 5,
        })}
      >
        <Title position="left">{titles.skills}</Title>
      </Box>
    ),
    [titles.skills]
  );

  return (
    <Section variant="light" linker name="nav-skills">
      <Box paddingLeft={padding} position="relative">
        {window.innerWidth > LAYOUT ? verticalTitle : horizontalTitle}
        <GridSelector
          cols={cols}
          items={skills.map((skill, i) => ({
            ...skill,
            col: skill.type === 'SE' ? cols[0] : cols[1],
            idx: i,
          }))}
          selected={10}
        />
      </Box>
    </Section>
  );
};

export default Skills;
