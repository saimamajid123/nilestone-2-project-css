import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <div className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info">
          <h2 className="contact-title" data-aso="zoom-in-up">Get in Touch</h2>
          <p className="contact-description" data-aso="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>
          <div className="contact-detail" data-aso="zoom-in-up">
            <AiOutlineMail size={30} className="contact-icon" /> saimamajid618@gmail.com
          </div>
          <div className="contact-detail" data-aso="zoom-in-up">
            <BsFillTelephoneFill size={30} className="contact-icon" /> (021) 000-0000
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <div className="form-group" data-aso="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-input" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group" data-aso="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-input" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group" data-aso="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea className="form-input" id="msg" rows={6} placeholder="Enter your message"></textarea>
          </div>
          <button className="form-button" data-aso="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
