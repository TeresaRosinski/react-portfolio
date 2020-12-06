import React, {Component} from "react";
import './contact.styles.scss';
import EmailIcon from "./email.png";
import GithubIcon from "./github.png";
import LinkedInIcon from "./linkedIn.png";
import ContactUs from "../../components/contact-form/contact-form.components";


function Contact () {
  return (
    <div className="contact-container" id="contact-section">
        <div className="contact-header">
          <h1 className="light">CONTACT TERESA</h1>
          <p>Email Teresa using the interface below.</p>
        </div>
        <div className="contact-form">
          <ContactUs />
        </div>

      <div className="contact-icons">
        <a href="https://github.com/TeresaRosinski" target="_blank"> <img src={GithubIcon} alt="" className="icon-image"/></a>
        <a href="https://www.linkedin.com/in/teresarosinski/" target="_blank"><img src={LinkedInIcon} alt="" className="icon-image"/> </a>
      </div>
    </div>
  );
}  export default Contact;