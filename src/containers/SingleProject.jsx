import React from 'react';
import PropTypes from 'prop-types';

const SingleProject = props => (
  <div className="single-project">
    <h2 className="name">{props.name}</h2>
    <img className="quickview" src={props.image} alt="project-snapshot" />
    <div className="project-details" style={{ backgroundImage: `url(${props.background})` }}>
      <h3 className="about-project">About the project: {props.about}</h3>
      <h3 className="tools-title">Tools</h3>
      <ul className="tools">
        {
          props.tools.map(tool => <li key={tool}>{tool}</li>)
        }</ul>
      <h3 className="challenges">Challenges: {props.challenges}</h3>
      <div className="url">
        <a href={props.url} alt="project-url">{props.url}</a>
      </div>
    </div>
  </div>
);

SingleProject.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  challenges: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

//   <h3 className="tools-title">Tools</h3>
//   <ul className="tools">{ tools }</ul>
//   <h3 className="challenges">Challenges: { this.props.project.challenge }</h3>
// </div>
export default SingleProject;
