import React, {Component} from "react";
import './projects.styles.scss';
import ProjectItem from '../../components/project-item/project-item.component';
import HabiSabi from "./tools.png";
import Resourcey from "./resourcey.png";
import Ball from "./ball.png";


function Projects () {
  return (
    
    <div id="projects-section" className="projects">
      <h1 className="section-header">Projects</h1>
      <div className="row projects">
      <div className="col-4">
        <ProjectItem projectName="Habi-Sabi" projectLanguage="Javascript/React" projectImageUrl={HabiSabi} githubRepositoryUrl= "https://github.com/TeresaRosinski/HabiSabi.git" projectDescription="Great" projectTechnologies= {["Javascript", "React", "Firebase", "Sass"]} />
      </div>
        <div className="col-4">
          <ProjectItem projectName="Resourcey" projectLanguage="C#/.NET" projectImageUrl={Resourcey}  />
        </div>
        <div  className="col-4">
          <ProjectItem projectName="Dream Team" projectLanguage="Javascript" projectImageUrl={Ball}  />
        </div>
      </div>
    </div>

  );
} 
export default Projects;
