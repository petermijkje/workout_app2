import React from "react";
import "./contact.styles.scss";
import RetrainLogo from "../../components/retrain-logo/RetrainLogo.component";
import Instagram from "../../instagram.webp";
import Twitter from "../../twitter.webp";
import Facebook from "../../facebook.webp";
import Person from "../../images/person.png"

import Header from "../../components/Header/Header.component.jsx"
import Email from "../../images/email.png"
import Message from "../../images/message.png"

function Contact() {
  return (
    <div className="contact">
      <div className="contact-us">
        <h2>CONTACT US</h2>
        <div className="contact-text">Feel Free to leave us a message.</div>
        <div class="contact-us-text">
          <img class="contact-us-image" src={Person} />
          NAME</div>
        <input
          className="contact-us-input"
          placeholder="Enter name here..."
        ></input>
        <div class="contact-us-text">          
          <img class="contact-us-image" src={Email} />
          EMAIL
        </div>
        <input
          className="contact-us-input"
          placeholder="Enter email here..."
        ></input>
        <div class="contact-us-text">          <img class="contact-us-image" id="message-icon" src={Message} />
MESSAGE</div>
        <textarea
          className="contact-us-input"
          id="message"
          placeholder="Enter text here..."
        ></textarea>
        <button>contact us</button>
      </div>
      {/*
      <img class="social-logo" id="instagram" src={Instagram} alt="instagram-logo" />
      <img class="social-logo" id="twitter" src={Twitter} alt="Twitter-logo" />
      <img class="social-logo" id="facebook" src={Facebook} alt="Facebook-logo" />
      */}
    </div>
  );
}

export default Contact;
