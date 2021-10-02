import React from 'react';
import Project from './Project';
import './Projects.css';
import tasksTrackingImg from './Images/trackingApp.png';


const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">The Project</h3>
          <p className="separator" />
          <p className="subtitle" style={{textAlign: 'center'}}>
            This is a prototype of the project that reflex the real data from the site  <br />
            <a href="https://celestrak.com/NORAD/elements/">the source</a>
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="Space Watch & Catch"
            img={tasksTrackingImg}
            tech="js css react node"
            link="https://codepen.io/abdulaziz-bidani/full/gORyoga"
            repo="https://codepen.io/abdulaziz-bidani/pen/gORyoga"
          >
            <small>
              the app built in with
              Node CSS React.js and React Router.
            </small>
            <p>
              application to track debris
            </p>
          </Project>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
