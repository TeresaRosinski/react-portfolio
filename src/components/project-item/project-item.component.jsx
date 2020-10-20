import React, {Component, useState} from "react";
import './project-item.styles.scss';
import ProjectItemDetails from '../project-item-details/project-item-details.component';



function ProjectItem (props) {
  const [showDetails, setShowDetails] = React.useState(false)
  const onClick = () => setShowDetails(!showDetails)
  const ButtonText = showDetails ? "HIDE DETAILS" : "SHOW DETAILS";

    return (
    <div className="project-item">
      <h2>{props.projectName} - {props.projectLanguage}</h2>
      <img src={props.projectImageUrl} alt="picture of project" className="projectImage"/> 
      <br></br>
    <button onClick={onClick}>{ButtonText}</button>
      {showDetails ? <ProjectItemDetails projectDescription="Great" projectTechnologies= {["Javascript", "React", "Firebase", "Sass"]} /> : null}
    </div>
  );
  } 

export default ProjectItem;
