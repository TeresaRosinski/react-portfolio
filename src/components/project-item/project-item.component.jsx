import React, {Component} from "react";
import './project-item.styles.scss';
import ProjectItemDetails from '../project-item-details/project-item-details.component';



function ProjectItem (props) {
    return (
    <div className="project-item">
      <h2>{props.projectName} - {props.projectLanguage}</h2>
      <img src={props.projectImageUrl} alt="picture of project" className="projectImage"/> 
      <br></br>
      <button>MORE DETAILS</button>
      <div>
      <ProjectItemDetails projectDescription="Great" projectTechnologies= {["Javascript", "React", "Firebase", "Sass"]} />
      </div>
    </div>
  );
  } 

export default ProjectItem;
