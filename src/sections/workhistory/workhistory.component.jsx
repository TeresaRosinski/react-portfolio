import React, {Component} from "react";
import './workhistory.styles.scss';
import ProfilePicture from "./example1.jpg";



function WorkHistory () {
  return (
    <div className="workhistory-container" id="workexperience-section">
    <div className="container row align-items-center intro">
      <div className="col-8">
        <h1>
          Growth Mindset Oriented. <strong>Forward Moving.</strong> Looking to
          make an <em>impact</em> through technology.
        </h1>
      </div>
      <div className="col-4">
        <img
          src={ProfilePicture}
          className="img-fluid profile-picture"
        />
      </div>
    </div>
    <div class="row resume">
      <div class="col-4">
        <h2>Work Experience</h2>
      </div>
      <div class="col-8">
        <h5><bold>Education and Development Intern </bold></h5>
        <h6><em>Centro: Chicago, IL - 01/2020 – 03/2020</em></h6>
        <p>
          Designed and built 4 eLearning courses using Articulate Rise and
          Storyline 360
        </p>

        <h5><bold>Foreign Language Instructor</bold></h5>
        <h6>
          <em>Chungdahm Learning: Seoul, South Korea - 02/2015 - 08/2018</em>
        </h6>
        <p>
          Researched and incorporated new educational trends and instructional
          strategies such as the Growth Mindset and Daring Classrooms
        </p>
        <p>Taught over 500 beginner to advanced English learners.</p>

        <h5><bold>Team Leader/Head Instructor</bold></h5>
        <h6>
          <em>Chungdahm Learning: Seoul, South Korea - 02/2017 - 11/2017</em>
        </h6>
        <p>
          Performed weekly skills assessments for 11 teachers to acknowledge
          their strengths while collaborating with them to develop strategies
          for improvement
        </p>
        <p>
          Collaborated with head management to evaluate the needs and desires of
          clientele, brainstormed solutions for branch growth
        </p>
        <p>
          Facilitated weekly meetings with branch employees to co-create
          methodologies for empowering clients to achieve their academic goals
        </p>
      </div>
    </div>
    </div>

  );
}  export default WorkHistory;