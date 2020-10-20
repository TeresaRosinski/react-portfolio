import React from 'react';
import './project-item-details.styles.scss';


function ProjectItemDetails (props) {
  return (
    <div className="more-details">
    <p>{props.projectDescription}</p>
    <p><strong>Technologies Used: </strong></p>
    <ul className="no-bullets">
      {props.projectTechnologies.map(tech => <li>{tech}</li>)}
    </ul>
    </div>
);
} 
export default ProjectItemDetails;
