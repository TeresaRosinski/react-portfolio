import React, {Component, useState} from "react";
import './project-item.styles.scss';
import ProjectItemDetails from '../project-item-details/project-item-details.component';



function ProjectItem (props) {
  const [showDetails, setShowDetails] = React.useState(false)
  const onClick = () => setShowDetails(!showDetails)
  const ButtonText = showDetails ? "HIDE DETAILS" : "SHOW DETAILS";

    return (
      <div className= "project-item" >
        <img className="project-image" src={props.projectImageUrl} alt="picture of project" onClick={onClick}  />
        <div className="project-description" onClick={onClick}  >
          <h4><strong>{props.projectName}</strong></h4> <h6> {props.projectLanguage}</h6>
          <h6>{props.date}</h6>
          <button className="more-details-button" onClick={onClick}>{ButtonText}</button>
        </div>
        {showDetails ? <ProjectItemDetails githubRepositoryUrl= {props.githubRepositoryUrl} projectTechnologies= {props.projectTechnologies} projectVision={props.projectVision}/> : null}
    </div>

  );
  } 

export default ProjectItem;
