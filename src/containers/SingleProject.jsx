import React from 'react';
import PropTypes from 'prop-types';

const SingleProject = props => (
  <div className="single-project">
    <h2 className="name">{props.name}</h2>
    <img className="quickview" src={props.image} alt="project-snapshot" />
    <div className="project-details" style={{ background: props.background }}>
      <h3 className="about-project">About the project: {props.about}</h3>

    </div>
  </div>
);

SingleProject.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
};

// <h2 className="name">{ this.props.project.name }</h2>
// <img className="quickview" src={ this.props.project.image} />
// <div className="project-details" style={ background }>
//   <h3 className="about-project">About the project: { this.props.project.about }</h3>
//   <h3 className="tools-title">Tools</h3>
//   <ul className="tools">{ tools }</ul>
//   <h3 className="challenges">Challenges: { this.props.project.challenge }</h3>
// </div>
export default SingleProject;
