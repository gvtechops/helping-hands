import React from "react";
import '../styles/Footer.css'
import gmailImage from '../media/gmail.png'
import instagramImage from '../media/instagram.png'
import linkedinImage from '../media/linkedinIcon.png'

function Footer() {
  return (
    <div className="footer-background-color">
    <footer className="footer">
    <p>
      &copy; Copyright 2022. All Rights Reserved. <br />
      <p>Contact Us</p>
      <a
        className="iconresize"
        href="mailto:info@amawithoutborders.org"
      >
        <img src={gmailImage} alt="gmail link" />
      </a>
      <a
        className="iconresize"
        href="https://www.instagram.com/ama_without_borders/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagramImage} alt="Instagram logo link" />
      </a>
      <a
        className="iconresize"
        href="https://www.linkedin.com/company/ama-international-inc/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinImage} alt="LinkedIn logo with link" />
      </a>
      
    </p>
  </footer>
  </div>
  )
}

export default Footer;
