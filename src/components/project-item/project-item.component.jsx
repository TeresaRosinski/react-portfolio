import React, {Component, useState} from "react";
import './project-item.styles.scss';
import ProjectItemDetails from '../project-item-details/project-item-details.component';



function ProjectItem (props) {
  const [showDetails, setShowDetails] = React.useState(false)
  const onClick = () => setShowDetails(!showDetails)
  const ButtonText = showDetails ? "HIDE DETAILS" : "SHOW DETAILS";

    return (
    <div className="project-item">
      <h4><strong>{props.projectName}</strong></h4> <h6> {props.projectLanguage}</h6>
      <img src={props.projectImageUrl} alt="picture of project" className="projectImage"/> 
      <br></br>
    <button onClick={onClick}>{ButtonText}</button>
      {showDetails ? <ProjectItemDetails githubRepositoryUrl= {props.projectDescription} projectTechnologies= {props.projectTechnologies} /> : null}
    </div>
  );
  } 

export default ProjectItem;
