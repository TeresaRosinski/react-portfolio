import React from 'react';
import './project-item-details.styles.scss';


function ProjectItemDetails (props) {
  return (
    <div className="more-details">
    <a href={props.githubRepositoryUrl} target="_blank">View Github Repository</a>
    <p>{props.projectDescription}</p>
    <p><strong>Technologies Used: </strong></p>
    <ul className="no-bullets">
      {props.projectTechnologies.map(tech => <p>{tech}</p>)}
    </ul>
    </div>
);
} 
export default ProjectItemDetails;
