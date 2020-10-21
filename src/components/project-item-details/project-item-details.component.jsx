import React from 'react';
import './project-item-details.styles.scss';


function ProjectItemDetails (props) {
  return (
    <div className="more-details">
      <div className="project-description">
      <p><strong>PROJECT VISION: </strong></p>
      <p>{props.projectVision}</p>
      <p><strong>TECHNOLOGIES USED: </strong></p>
    <ul className="no-bullets">
      {props.projectTechnologies.map(tech => <p>{tech}</p>)}  
    </ul>
    <a href={props.githubRepositoryUrl} target="_blank">VIEW GITHUB REPOSITORY</a>
    </div>
    </div>
);
} 
export default ProjectItemDetails;
