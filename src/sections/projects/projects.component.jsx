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
        <ProjectItem projectName="Habi-Sabi" projectLanguage="Javascript/React" projectImageUrl={HabiSabi} githubRepositoryUrl= "https://github.com/TeresaRosinski/HabiSabi.git" projectVision="How can we build habits that actually work for us? The goal of Habi-Sabi is to guide users as the build and experiment with new habits" projectTechnologies= {["Javascript", "React", "Firebase", "Sass"]} />
      </div>
      <div className="col-4">
          <ProjectItem projectName="Resourcey" projectLanguage="C#/.NET" projectImageUrl={Resourcey} githubRepositoryUrl= "https://github.com/TeresaRosinski/Resourcey.git" projectVision="How can we help learners and teachers minimize their time spent researching for great material and maximize their time spent learning? Resourcey creates a hub for learners to collaboratively collect excellent resources for their courses." projectTechnologies= {["Entity Framework", "Identity", "MySQL", ]} />
      </div>
      <div className="col-4">
          <ProjectItem projectName="Dream Team" projectLanguage="Javascript" projectImageUrl={Ball} githubRepositoryUrl= "https://github.com/TeresaRosinski/dreamteam.git" projectVision="How can we help basketball fans build their dream teams? DreamTeam works with an API to collect data on basketball players" projectTechnologies= {["BallDontLie Api", "Postman" ]} />
        </div>
      </div>
    </div>

  );
} 
export default Projects;
