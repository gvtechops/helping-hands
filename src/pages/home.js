import React from "react";
import "../styles/Homepage.css";
import Group from "../media/Group.jpg";
import MedicalHelp from "../media/MedicalHelp.jpg";
import DividingLine from "../media/DividingLine.jpg";
import LegalHelp from "../media/LegalHelp.jpg"
import Childcare from "../media/Childcare.jpg"
import Jobs from "../media/Jobs.jpg";
import Food from "../media/Food.jpg";
import School from "../media/School.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main-div">
      <h1 className="title">About Us</h1>
      <div className="three-column">
        <img
          src={Group}
          title="Question mark"
          alt="question mark icon"
          className="question-mark-icon"
        />
        <h2 className="about-us">Get in Contact</h2>
        <p className="p-text">
          Want to contact us for direct help? <br /> Reach out by email or
          phone!
        </p>
      </div>
      <div className="three-column">
        <img
          src={Group}
          title="Question mark"
          alt="question mark icon"
          className="question-mark-icon"
        />
        <h2 className="about-us">Who We Are</h2>
        <p className="p-text">
          Partners with AMA Sin Fronteras to provide a single stop guide to
          immigration resources located in the Grand Rapids area. How to find
          them and where to apply.
        </p>
      </div>
      <div className="three-column">
        <img
          src={Group}
          title="Question mark"
          alt="question mark icon"
          className="question-mark-icon"
        />
        <h2 className="about-us">What We Offer</h2>
        <p className="p-text">
          Local links to food banks, childcare providers, schools, lawyers,
          clinics, and job opportunities.{" "}
        </p>
      </div>
      <img
        src={DividingLine}
        className="div-line"
        alt="Content dividing line"
      />
      <h3 className="about-us">Resources</h3>
      <p>
        Explore options and resources below to find what best fits your needs
      </p>
      <div className="containing-div">
        <div className="two-column">
        <Link to='/medical'>
          <img
            src={MedicalHelp}
            title="Medical Help"
            alt="view health resources"
            className="widget-resize"
          />
          </Link>
        </div>
        <div className="two-column">
          <h4 className="widget-titles">See a doctor</h4>
          <p>
            Healthcare options near you <br /> Know your medical rights <br />{" "}
            Know what you qualify for
          </p>
          <Link to='/medical'>
          <p>View Resources &gt;</p>
          </Link>
        </div>
      </div>
      <div className="containing-div">
      <div className="two-column">
        <Link to='/legal'>
          <img
            src={LegalHelp}
            title="Medical Help"
            alt="view health resources"
            className="widget-resize"
          />
          </Link>
        </div>
        <div className="two-column">
          <h4 className="widget-titles">Know Your Rights</h4>
          <p>
            Find lawyers near you Immigration Process <br /> Help Learn your
            legal rights
          </p>
          <p>View Resources &gt;</p>
        </div>
      </div>
      <div className="containing-div">
        <div className="two-column">
          <Link to="/childcare">
          <img
            src={Childcare}
            title="Medical Help"
            alt="view health resources"
            className="widget-resize"
          />
          </Link>
        </div>
        <div className="two-column">
          <h4 className="widget-titles">Find Care for your Child</h4>
          <p>
            Find daycare options <br />
            Become care provider <br />
            Apply for help
          </p>
          <p>View Resources &gt;</p>
        </div>
      </div>
      <div className="containing-div">
      <div className="two-column">
        <Link to="/jobs">
          <img
            src={Jobs}
            title="Medical Help"
            alt="view health resources"
            className="widget-resize"
          />
          </Link>
        </div>
        <div className="two-column">
          <h4 className="widget-titles">Find Job Options</h4>
          <p>
            Learn how to get employed
            <br /> Explore work visas <br />
            Job opportunites near me
          </p>
          <p>View Resources &gt;</p>
        </div>
      </div>
      <div className="containing-div">
        <div className="two-column">
        <Link to="/food">
          <img
            src={Food}
            title="Medical Help"
            alt="view health resources"
            className="widget-resize"
          />
          </Link>
        </div>
        <div className="two-column">
          <h4 className="widget-titles">Food Needs</h4>
          <p>
            Find food banks near me <br />
            Learn about the Food Assistance Program
          </p>
          <p>View Resources &gt;</p>
        </div>
      </div>
      <div className="containing-div">
      <div className="two-column">
        <Link to="/school">
          <img
            src={School}
            title="Medical Help"
            alt="view health resources"
            className="widget-resize"
          />
          </Link>
        </div>
        <div className="two-column">
          <h4 className="widget-titles">Education Options</h4>
          <p>
            Learn how to get education <br/> School for children <br/> Community College
            Access
          </p>
          <p>View Resources &gt;</p>
        </div>
      </div>
    </div>
  );
}

export default Home;