import emailjs from "emailjs-com";
import React from "react";
import "./contact-form.styles.scss";


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_d6l67hs', 'template_3yhqp6d', e.target, 'user_PLZBfnoghGlJMYuWG3GB0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      
  }

  return (
    <div className="contact-form">
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <div className="form-group">
        <label>To:</label>
        <input
        className="form-control" placeholder="trosinski89@gmail.com" />
      </div>
      <div className="form-group">
        <label>Your Name</label>
        <input type="text" className="form-control" name="user_name" />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea name="message" className="form-control"/>
      </div>
      <div className="form-group">
        <label>Your Email</label>
        <input type="email" name="user_email" className="form-control" />
      </div>
      <input type="submit" value="Send" className="contact-us-button"/>
    </form>
    </div>
  );
}