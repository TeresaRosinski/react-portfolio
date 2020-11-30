import React from "react";
import "./header.styles.scss";
import EverestImage from './everest.jpg';
import { Link, animateScroll as scroll } from "react-scroll";

function Header ({element}) {
  return (
    <div ref={element} >
      <div className="container-fluid row no-gutters header-content">
        <div className="col-4 text-box">
          <div className="text">
          <h1 className="hello">Hello,</h1>
          <h2>My Name Is</h2> 
          <h2><strong>Teresa Rosinski</strong></h2>
          <h2>And I Work As A</h2>
          <h2><em>Software Developer</em></h2>
          <button> <Link
                activeClass="active"
                to="projects-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >SEE MY WORK </Link></button>
        </div>
        </div>
        <div className="col-8" >
          <img className="background-image" src={EverestImage} />
          </div>
      </div>
      </div>
  );
} 
export default Header;
