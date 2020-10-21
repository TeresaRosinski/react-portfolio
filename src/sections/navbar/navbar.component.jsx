import React, {Component} from "react";
import './navbar.styles.scss';
import { Link, animateScroll as scroll } from "react-scroll";
import LOGO from './logo_transparent.png';

export default class NavBar extends Component {
  scrollToTop = () =>{
    scroll.scrollToTop();
  }

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img src={LOGO}
          className="nav-logo"
          alt="Logo"
          onClick={this.scrollToTop} />
          <ul className="nav-items">
            <li className="nav-item"> 
            <Link
                activeClass="active"
                to="contact-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} >
          CONTACT</Link></li>
          <li className="nav-item">
          <Link
                activeClass="active"
                to="education-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} >
            EDUCATION</Link></li>
                         
            <li className="nav-item"> 
            <Link
                activeClass="active"
                to="workexperience-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} >
            WORK EXPERIENCE</Link></li>
            <li className="nav-item">
          
            
            <Link
                activeClass="active"
                to="projects-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >PROJECTS </Link> </li>
          </ul>
        </div>
      </nav>
    );
  }
}