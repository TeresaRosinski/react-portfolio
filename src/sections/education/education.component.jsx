import React, {Component} from "react";
import './education.styles.scss';

function Education () {
  return (
    <div className="education-container" id="education-section">
      <div class="education-examples">
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
      <div class="education-header">
        <h1 className="light">EDUCATION</h1>
      </div>
    </div>
  );
}  export default Education;