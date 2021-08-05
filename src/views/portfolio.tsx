/** @format */

import React from 'react';

import Header from './header';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Experience from './experience';
import Education from './education';
import Contact from './contact';
import Footer from './footer';

const Portfolio: React.FC = () => {
  return (
    <main>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
};

export default Portfolio;
