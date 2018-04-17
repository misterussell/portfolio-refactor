import React from 'react';

import logo from '../assets/logo.svg';

const About = () => (
  <div className="about">
    <div className="logo-block">
      <img src={logo} alt="logo" />
    </div>
    <div className="bio">
      <h3 className="section-name">About Me</h3>
      <p>My name is Maxwell Russell, and I'm a JavaScript enthusiast. I have a background in management and operations, and studied Art and Art History for my undergrad. I've always enjoyed helping others succeed, aiming to streamline productivity and rethink the way things are done. I'm translating this into code by striving to create thoughtful user experiences while having fun solving the problems that arise when trying to do so! My background in the arts has helped me maintain an eye for visual design as well, my favorite aspect of this being color theory. I enjoy being a mentor and working with others. Having lived around the world I have learned that we are all very different but for the most part just want to contribute, learn, and get along with one another.
      <br></br>
      <br></br>
      With an interest in efficiency and accessibility, I'm excited about creating interesting experiences and readable code, and learning new tools to do so.</p>
    </div>
    <div className="stack">
      <h3 className="section-name">Stack</h3>
      <ul>
        <li>HTML</li>
        <li>Javascript</li>
        <li>Functional Programming</li>
        <li>React</li>
        <li>DOM Manipulation</li>
        <li>SPAs</li>
        <li>REST APIs</li>
        <li>AJAX</li>
        <li>Backbone</li>
        <li>CSS3/CSS Modules</li>
        <li>SASS</li>
        <li>JQuery</li>
        <li>Underscore</li>
        <li>Bourbon/Neat</li>
        <li>MBaaS</li>
        <li>Unit Testing</li>
        <li>Git Version Control</li>
        <li>OSX + Terminal</li>
        <li>Adobe Illustrator</li>
        <li>Adobe Photoshop</li>
        <li>Adobe InDesign</li>
        <li>Google Analytics</li>
        <li>Google AdWords</li>
      </ul>
    </div>
    <div className="links">
      <a href="mailto:max@misterussell.com" label="email" className="email" content="email address"><i className="fa fa-envelope-o" aria-hidden="true" /></a>
      <a href="https://medium.com/@MisteRussell" label="medium blog" className="blog"><i className="fa fa-medium" aria-hidden="true"></i></a>
      <a href="https://twitter.com/MisteRussell" label="twitter" className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
      <a href="https://github.com/misterussell" label="github" className="github"><i className="fa fa-github" aria-hidden="true"></i></a>
    </div>
  </div>
);

export default About;
