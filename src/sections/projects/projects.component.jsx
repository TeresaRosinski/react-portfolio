import React, {Component} from "react";
import './projects.styles.scss';
import ProjectItem from '../../components/project-item/project-item.component';
import example1 from "./example1.jpg"


function Projects () {
  return (
    
    <div id="projects-section" className="projects">
      <h1 className="section-header">Projects</h1>
      <div className="row projects">
      <div className="col-4">
      <ProjectItem projectName="Habi-Sabi" projectLanguage="Javascript/React" projectImageUrl={example1}  />
      </div>
        <div className="col-4 project-item" >
        <h1 className="projectName"  >asdfhksjdhfaksf</h1>
        </div>
        <div className="col-4 project-item">
        <h1 className="projectName" >asdfhksjdhfaksf</h1>
        </div>
      </div>
      </div>

  );
} 
export default Projects;
