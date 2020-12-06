import React from 'react';
import './project-item-details.styles.scss';


function ProjectItemDetails (props) {
  return (
    <div className = "project-details-container">
      <div className="more-details">
        <p className="strong">PROJECT VISION:</p>
        <p className="light">{props.projectVision}</p>
        <p className="strong">TECHNOLOGIES USED:</p>
        <ul className="no-bullets">
          {props.projectTechnologies.map(tech => <p className="light">{tech}</p>)}  
        </ul>
        <a className="github-link strong" href={props.githubRepositoryUrl} target="_blank">VIEW GITHUB REPOSITORY</a>
      </div>
    </div>
);
} 
export default ProjectItemDetails;
