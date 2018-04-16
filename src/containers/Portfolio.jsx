import React from 'react';

import { SingleProject } from './';

import Projects from '../Store';

const Portfolio = () => (
  <div className="all-projects">
    <h1 className="project-title">Projects</h1>
    {
      Projects.map(project => (
        <SingleProject
          key={project.name}
          name={project.name}
          image={project.image}
          background={project.background}
          about={project.about}
          tools={project.tools}
          challenges={project.challenges}
        />
      ))
    }
  </div>
);

export default Portfolio;
