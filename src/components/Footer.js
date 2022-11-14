import React from "react";
import '../styles/Footer.css'
import gmailImage from '../media/gmail.png'
import instagramImage from '../media/instagram.png'
import linkedinImage from '../media/linkedinIcon.png'

function Footer() {
  return (
    <footer className="footer">
    <p>
      &copy; Copyright 2022. All Rights Reserved. <br />
      <a
        className="iconresize"
        href="mailto:catherinekettner1@gmail.com"
      >
        <img src={gmailImage} alt="gmail image link" />
      </a>
      <a
        className="iconresize"
        href="https://www.instagram.com/katherinekettner/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagramImage} alt="Instagram logo link" />
      </a>
      <a
        className="iconresize"
        href="https://www.linkedin.com/in/catherine-kettner/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinImage} alt="LinkedIn logo with link" />
      </a>
    </p>
  </footer>
  )
}

export default Footer;
