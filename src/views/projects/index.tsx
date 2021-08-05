/** @format */

import React, { useContext, useState } from 'react';

import DataContext from '../../services/data';

import { LAYOUT } from '../../styles/device';

import Section from '../../components/Section';
import { FlexBox } from '../../components/Box';
import Title from '../../components/Title';
import Project from '../../components/Project';
import Button from '../../components/Button';

const Projects: React.FC = () => {
  const {
    about: { titles, buttons },
    projects,
  } = useContext(DataContext);

  const [totProjects, setTotProjects] = useState(3);

  const showMore = () => {
    setTotProjects((tot) => tot + 3);
  };

  const showLess = () => {
    setTotProjects((tot) => tot - 3);
  };

  const mobile = window.innerWidth <= LAYOUT;

  return (
    <Section variant="dark" linker name="nav-projects">
      <FlexBox justifyContent="center" marginBottom={!mobile ? 20 : 0}>
        <Title position="center">{titles.projects}</Title>
      </FlexBox>
      {projects.slice(0, totProjects).map((project, i) => (
        <Project
          key={project.title}
          position={i % 2 ? 'right' : 'left'}
          title={project.title}
          description={project.description}
          github={project.github}
          demo={project.demo}
          image={project.image}
        />
      ))}
      {totProjects < projects.length && (
        <FlexBox justifyContent="center" marginTop={!mobile ? 50 : 0}>
          <Button onClick={showMore}>{buttons.showMore}</Button>
        </FlexBox>
      )}
      {totProjects >= projects.length && (
        <FlexBox justifyContent="center" marginTop={!mobile ? 50 : 0}>
          <Button onClick={showLess} fill="empty">
            {buttons.showLess}
          </Button>
        </FlexBox>
      )}
    </Section>
  );
};

export default Projects;
