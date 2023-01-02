import React from "react";
import "../styles/Footer.css";
import gmailImage from "../media/gmail.png";
import instagramImage from "../media/instagram.png";
import linkedinImage from "../media/linkedinIcon.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-background-color">
      <footer className="footer">
        <p className="footer">
        <a className="iconresize" href="mailto:info@amawithoutborders.org">
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
          <div>
            <Link to="/contact" className="footer">Contact Us</Link>
          </div>
          <div className="footer-disclaimer">
          <p className="footer">
          The inclusion of links to other websites on this site does not imply
          endorsement or approval of the content of those websites. We are not
          responsible for the content or accuracy of any external websites.
        </p>
          </div>
          <br/>
          &copy; Copyright 2022 <br />
          
        <br/>  
        </p>
      </footer>
    </div>
  );
}

export default Footer;
