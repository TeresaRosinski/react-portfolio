import React from "react";
import "./header.styles.css";
import EverestImage from './everest.jpg';
import { Link, animateScroll as scroll } from "react-scroll";

function Header ({element}) {
  return (
    <div ref={element} >
      <div className="wrapper header-content">
        <div className="header-text-box">
          <div className="header-text">
            <h1 className="hello">Hello,</h1>
            <h2>My Name Is</h2> 
            <h2><strong>Teresa Rosinski</strong></h2>
            <h2>And I Work As A</h2>
            <h2><em>Software Developer</em></h2>
               <Link
               className="see-work-button"
                activeClass="active"
                to="projects-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >SEE MY WORK </Link>
          </div>
        </div>
          <div className="everest-image">
            <img className="background-image" src={EverestImage} />
          </div>
        </div>
      </div>
  );
} 
export default Header;
