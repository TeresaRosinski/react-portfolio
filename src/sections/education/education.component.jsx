import React, {Component} from "react";
import './education.styles.scss';



function Education () {
  return (
    <div className="workhistory-container" id="education-section">
    <div class="row resume">
      <div class="col-4">
        <h2>Education</h2>
      </div>
      <div class="col-8">
        <h5><bold>Web and Mobile APP Development Bootcamp</bold></h5>
        <h6><em>Epicodus: Online - 05/2020 – 11/2020</em></h6>
        <h6><strong>Languages/Framworks Practiced:</strong> Javascript, C#/.NET, React</h6>
        <p>
         The Epicodus program runs 5 days per week, 8 hours per day. <br>
         </br>
         Each day we pair-program and work through the curriculum collaboratively.<br>
         </br>
         Daily projects are completed and posted to Github.
        </p>
        

        <h5><bold>International Studies with minors in: Economics, Spanish and Business Management</bold></h5>
        <h6>
          <em>Loyola University Chicago - 09/2010 - 05/2013</em>
        </h6>
        <p><strong>Example Courses:</strong> International Conflict Management, Global History from a Global Perspective, International Management, Accounting, International Economics, Micro Economics</p>
      </div>
    </div>
    </div>

  );
}  export default Education;