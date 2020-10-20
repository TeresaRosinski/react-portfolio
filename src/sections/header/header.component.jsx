import React from "react";
import "./header.styles.scss";
import EverestImage from './everest.jpg';
import { Link, animateScroll as scroll } from "react-scroll";

function Header () {
  return (
    <div>
      <div className="row">
        <div className="col-3 text-box">
          <h1>Welcome</h1>
          <h2 >Teresa Rosinski</h2>
          <h2>Software Developer</h2>
          <button> <Link
                activeClass="active"
                to="projects-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >SEE MY WORK </Link></button>
        </div>
        <div className="col-9" >
          <img className="background-image" src={EverestImage} />
          </div>
      </div>
      </div>
  );
} 
export default Header;
