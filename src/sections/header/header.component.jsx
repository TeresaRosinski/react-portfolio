import React from "react";
import "./header.styles.css";
import EverestImage from './everest.jpg';
import { Link, animateScroll as scroll } from "react-scroll";

function Header ({element}) {
  return (
    <div ref={element} >
      <div className="header-content">
        <div className="header-text-box">
          <div className="header-text">
            <h1 className="hello larger-text">Hello,</h1>
            <h2 className = "smaller-text"> <span className="light">My Name Is</span>
            <span className="strong">Teresa Rosinski</span></h2>
            <h2 className = "smaller-text">
            <span className="light">I Work As A</span>
            <span><em>Software Developer</em></span></h2>
          </div>
          <div className="button-container">
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
