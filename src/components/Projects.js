/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import ProjectGrid from './ProjectGrid';

class Projects extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div style={{
        alignContent: 'center',
        padding: '20px',
      }}>
        <p>Most projects I play around with are on <a href='https://github.com/alexchernous' target='_blank' rel='noopener noreferrer'>
          my GitHub</a>.
          Below are a few of my most enjoyed projects.
        </p><br></br>

        <ProjectGrid />
      </div>
    );
  }
}

export default Projects;
