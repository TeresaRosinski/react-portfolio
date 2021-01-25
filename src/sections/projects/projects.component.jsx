import React, { Component } from "react";
import "./projects.styles.scss";
import ProjectItem from "../../components/project-item/project-item.component";
import HabiSabi from "./tools.png";
import Resourcey from "./resourcey.png";
import Ball from "./ball.png";
import MarysSite from "./headerPic.png";

function Projects() {
  return (
    <div id="projects-section">
      <div className="projects-section-header">
        <h1 className="projects-title">PROJECTS</h1>
        <p className="projects-paragraph">
          From May 2020 - October 2020 I attended Epicodus' 6-month Web
          Development Bootcamp. We built daily projects with other students, and
          each Friday we built individual projects to be reviewed by our
          instructors. Additionally, we completed two team-week projects. This
          is a collection of some of the projects I completed while at Epicodus
          and since I graduated.
        </p>
      </div>
      <div className="projects-container">
        <div className="project">
          <ProjectItem
            projectName="Mary for 7th Ward Alderperson"
            projectLanguage="Javascript/React"
            projectImageUrl={MarysSite}
            date="January 2021"
            githubRepositoryUrl="https://github.com/TeresaRosinski/MaryRosinskiForAlderperson.git"
            projectVision="The purpose of this site is to inform voters in Evanston's 7th district of Mary Rosinski's views and qualifications. After a constituent views her webpage, they will hopefully be drawn to join her mailing list, donate money to her campaign and vote for her. Additionally, the webpage provides a way for users to contact Mary directly (through EmailJS) and stores their information in a firebase database."
            projectTechnologies={["Javascript", "React", "Firebase", "EmailJS"]}
          />
        </div>
        <div className="project">
          <ProjectItem
            projectName="Habi-Sabi"
            projectLanguage="Javascript/React"
            projectImageUrl={HabiSabi}
            date="October 2020"
            githubRepositoryUrl="https://github.com/TeresaRosinski/HabiSabi.git"
            projectVision="How can we build habits that actually work for us? The goal of Habi-Sabi is to guide users as the build and experiment with new habits"
            projectTechnologies={["Javascript", "React", "Firebase", "Sass"]}
          />
        </div>
        <div className="project">
          <ProjectItem
            projectName="Resourcey"
            projectLanguage="C#/.NET"
            projectImageUrl={Resourcey}
            date="August 2020"
            githubRepositoryUrl="https://github.com/TeresaRosinski/Resourcey.git"
            projectVision="How can we help learners and teachers minimize their time spent researching for great material and maximize their time spent learning? Resourcey creates a hub for learners to collaboratively collect excellent resources for their courses."
            projectTechnologies={["Entity Framework", "Identity", "MySQL"]}
          />
        </div>
        <div className="project">
          <ProjectItem
            projectName="Dream Team"
            projectLanguage="Javascript"
            projectImageUrl={Ball}
            githubRepositoryUrl="https://github.com/TeresaRosinski/dreamteam.git"
            projectVision="How can we help basketball fans build their dream teams? DreamTeam works with an API to collect data on basketball players"
            date="July 2020"
            projectTechnologies={["BallDontLie Api", "Postman"]}
          />
        </div>
      </div>
    </div>
  );
}
export default Projects;
