// Contact.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import '../App.css';

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>Follow or contact me through social media below:</p>
      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={40} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={40} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} />
        </a>
      </div>
    </div>
  );
}

export default Contact;