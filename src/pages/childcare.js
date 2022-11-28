import React from "react";
import "../styles/Childcare.css";
import DividingLine from "../media/DividingLine.jpg";
import MIBridgesLogo from "../media/MIBridgesLogo.jpg";
import KentCountyHeadstart from "../media/KentCountyHeadstart.jpg";
import MommyRecharge from "../media/MommyRecharge.jpg";

function Childcare() {
  return (
    <div className="main-div">
      <h1 className="title">Childcare</h1>
      <div className="containing-divider">
        <p className="intro-paragraph">
          Struggling to get help caring for your child? Access MIBridges to
          quickly apply for state funded assistance
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://newmibridges.michigan.gov/s/isd-landing-page?language=en_US"
        >
          <img src={MIBridgesLogo} alt="Logo for MIBridges" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://newmibridges.michigan.gov/s/isd-landing-page?language=en_US"
        >
          <p className="subtitle-text">Access MIBridges Application &gt; </p>
        </a>
        <p className="intro-paragraph">
          MIBridges offers an application for help through the{" "}
          <b>Child Development and Care program (CDC).</b> Apply to get funding
          for chiIldcare to have your child cared for by either{" "}
          <b>
            License Exempt-Related, License-Exempt Unrelated Providers, or
            already Licensed Providers in Michigan.
          </b>{" "}
        </p>
        <img
          src={DividingLine}
          className="div-line"
          alt="Content dividing line"
        />
        <p className="subtitle-text">Licensed Providers in Grand Rapids </p>
      </div>
      <div className="containing-div2">
        <div className="two-column2">
          <img
            src={KentCountyHeadstart}
            title="Kent County Headstart"
            alt="child playing with blocks"
            className="widget-resize"
          />
          <p className="subtitle-text">Kent County Headstart </p>
          <p className="description-paragraphs">
            HS4KC offers a variety of programs including in-home visits for
            pregnant mothers, with interpreters, half day classes for babies and
            toddlers, and full day preschool classrooms for 3-5 year olds
          </p>
          <p>
            <ul>
              <li>Non-Profit</li>
              <br />
              <li>No cost for qualifying families</li>
              <br />
              <li>Early Head Start</li>
              <dd>Children aged 0-3 years old</dd>
              <dd>Home visit for babies &amp; pregnant women</dd>
              <br />
              <li>Child must be 4 before Sept. 1st</li>
              <br />
              <li>Central Office Location:</li>
              <dd>2626 Walker NW,</dd>
              <dd>Walker, MI 49544</dd>
              <br />
              <li>Contact:</li>
              <dd>(616) 453-4145</dd>
            </ul>
            <br />
          </p>

          <p>Enrollment based on priority &amp; availability</p>
          <a target="_blank" rel="noreferrer" href="https://hs4kc.org/apply/">
            <p className="access-link">Access Headstart Webpage &gt; </p>
          </a>
        </div>
        <div className="two-column2">
          <img
            src={MommyRecharge}
            title="Mommy and Me Recharge"
            alt="child playing with play dough"
            className="widget-resize"
          />
          <p className="subtitle-text">Mommy &amp; Me Recharge </p>
          <p className="description-paragraphs">
            Daycare for children ages 1 - 12 years old. Approved license for CDC
            funding through 9/27/2024
          </p>
          <p>
            <dl>
              <dt>Hours:</dt>

              <dd>Monday - Friday 6 - 9 pm</dd>
              <dd>Saturday 9 - 5 pm</dd>
              <dd>Sunday Closed</dd>
              <br />
              <dt>Location:</dt>

              <dd>3219 Easter Ave. Suite B,</dd>
              <dd>Grand Rapids, MI 49508</dd>
              <br />
              <dt>Price:</dt>
              <dd>
                <b>$10</b> Per Hour
              </dd>
              <dd>
                <b>$50</b> Per Day
              </dd>
              <br />
              <dt>Contact:</dt>
              <dd>mommyrecharge@gmail.com</dd>
              <dd>(616) 724-4366</dd>
            </dl>
          </p>
          <p>Enrollment based on priority &amp; availability</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/MommyRecharge/"
          >
            <p className="access-link">Access Mommy &amp; Me Webpage &gt; </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Childcare;
