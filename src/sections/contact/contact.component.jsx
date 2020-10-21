import React, {Component} from "react";
import './contact.styles.scss';
import EmailIcon from "./email.png";
import GithubIcon from "./github.png";
import LinkedInIcon from "./linkedIn.png";
import ContactUs from "../../components/contact-form/contact-form.components";


function Contact () {
  return (
    <div className="contact-container align-items-center" id="contact-section">
      <div className="row">
        <div className="col-4">
          <h2>Contact Teresa</h2>
        </div>
        <div className="col-8">
          <ContactUs />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
    
        </div>
        <div className="col-8 align-items-center contact-icons">
           <a href="https://github.com/TeresaRosinski" target="_blank"> <img src={GithubIcon} alt="" className="icon-image"/></a>
            <a href="https://www.linkedin.com/in/teresarosinski/" target="_blank"><img src={LinkedInIcon} alt="" className="icon-image"/> </a>
      </div>
      </div>
    </div>

  );
}  export default Contact;