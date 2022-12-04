import React from "react";
import "../styles/Childcare.css";
import DividingLine from "../media/DividingLine.jpg";
import MIBridgesLogo from "../media/MIBridgesLogo.jpg";
import KentCountyHeadstart from "../media/KentCountyHeadstart.jpg";
import MommyRecharge from "../media/MommyRecharge.jpg";
import KentwoodChurch from "../media/KentwoodChurch.jpg";
import GreatStartReadiness from "../media/GreatStartReadiness.jpg";
import GreatStartLogo from "../media/GreatStartLogo.jpg";
import EligibilityCalculator from "../media/EligibilityCalculator.jpg";

function Childcare() {
  return (
    <div className="main-div">
      <h1 className="title">Childcare</h1>
      <div className="containing-divider">
        <p className="intro-paragraph">
          Struggling to get help caring for your child? Access MIBridges to
          quickly apply for state-funded assistance
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
          <p className="subtitle-text">Visit Website &gt; </p>
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
        <h2 className="know-your-rights">Licensed Providers in Michigan</h2>
      </div>
      <div className="two-column-wrapper">
        
          <div className="two-column2">
            <img
              src={KentCountyHeadstart}
              title="Kent County Headstart"
              alt="child playing with blocks"
              className="widget-resize-childcare"
            />
            <p className="subtitle-text">Kent County Headstart </p>
            <p className="description-paragraphs">
              HS4KC offers a variety of programs including in-home visits for
              pregnant mothers, with interpreters, half-day classes for babies
              and toddlers, and full-day preschool classrooms for 3-5 year olds
            </p>
            <p>
              <ul>
                <li>Non-Profit</li>

                <li>No cost for qualifying families</li>
                <li>Early Head Start</li>
                <dd>Children aged 0-3 years old</dd>
                <dd>Home visit for babies &amp; pregnant women</dd>

                <li>Child must be 4 before Sept. 1st</li>

                <li>Central Office Location:</li>
                <dd>2626 Walker NW,</dd>
                <dd>Walker, MI 49544</dd>

                <li>Contact:</li>
                <dd>(616) 453-4145</dd>
              </ul>
            </p>

            <p>Enrollment based on priority &amp; availability</p>
            <a target="_blank" rel="noreferrer" href="https://hs4kc.org/apply/">
              <p className="access-link">Visit Website &gt; </p>
            </a>
          </div>
          <div className="two-column2">
            <img
              src={MommyRecharge}
              title="Mommy and Me Recharge"
              alt="child playing with play dough"
              className="widget-resize-childcare"
            />
            <p className="subtitle-text">Mommy &amp; Me Recharge </p>
            <p className="description-paragraphs">
              Daycare for children ages 1 - 12 years old. Approved license for
              CDC funding through 9/27/2024. No webpage currently, only accessed
              through Facebook page.{" "}
            </p>
            <p>
              <dl>
                
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
            <br />
            <br />
            <br />
            <p>Enrollment based on priority &amp; availability</p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/MommyRecharge/"
            >
              <p className="access-link">Visit Website &gt; </p>
            </a>
         
        </div>

        <img
        src={DividingLine}
        className="div-line"
        alt="Content dividing line"
      />
        
        <div className="two-column2">
          <img
            src={KentwoodChurch}
            title="Kentwood Church"
            alt="Kentwood Community Church logo"
            className="widget-resize-childcare"
          />
          <p className="subtitle-text">Explore &amp; Grow Christian Child </p>
          <p className="description-paragraphs">
            Strives to help children grow and learn new skills and ideas in a
            Christian learning environment. Fully licensed by the State of
            Michigan.
          </p>
          <p>
            <dl>
             
              <dt>Location:</dt>
              <dd>1200 60th Street, SE</dd>
              <dd>Kentwood, MI 49508</dd>
              <br />
              <dt>Price:</dt>
              <dd>
                <b>Contact for Rates</b>
              </dd>
              <dd>
                <b>$90</b> Registration Fee
              </dd>
              <dd>
                <b>$50</b> Per Day
              </dd>
              <br />
              <dt>Contact:</dt>
              <dd>(616) 455-1740</dd>
            </dl>
          </p>
          <p>
            <b>Want to schedule a tour and apply?</b>
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://kentwoodcommunitychurch.com/parent-resources"
          >
            <p className="access-link">
              Visit Website &gt;{" "}
            </p>
          </a>
        </div>
        <div className="two-column2">
          <img
            src={GreatStartReadiness}
            title="Great Start Readiness Sherwood Park"
            alt="Great Start Readiness Logo"
            className="widget-resize-childcare"
          />
          <p className="subtitle-text">Sherwood Park</p>
          <p className="description-paragraphs">
            Licensed preschool and readiness program. Serves children ages 3
            years &amp; 9 months - 5 years.
          </p>
          <p>
            <dl>
              
              <dt>Location:</dt>
              <dd>3859 Chamberlain SE, </dd>
              <dd>Grand Rapids, MI 49508</dd>
              <br />
              <dt>Price:</dt>
              <dd>
                Many families qualify for free preschool through the Great Start
                Readiness Programs
              </dd>
              <br />
              <dt>Contact:</dt>
              <dd>earlychildhood@grps.org</dd>
              <dd>(616) 819-2165</dd>
            </dl>
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://kentwoodcommunitychurch.com/parent-resources"
          >
            <p className="access-link">Visit Website &gt;</p>
          </a>
      
        </div>
      </div>
      <div className="outro-paragraph">
        <p className="subtitle-text">
          How can I apply to be a License-exempt Child Care Provider instead?
        </p>
        <p>
          <b>License-exempt Child Care Providers:</b> 
        </p>
        <p>Adults, age 18 or
          older, who are enrolled to provide child care for up to six children
          at a time. License-exempt providers can provide care in their own home
          or the child's home if they are related by blood, marriage, or
          adoption as a grand parent, aunt, uncle, or sibling if not living together.
          </p>
          <p>
            <dt>Becoming License-exempt Child Care Provider- 5 Steps:</dt>
            <br/>
          <dt>1. Application and Orientation</dt>
          <dt>2. Submitting Application</dt>
          <dt>3. Interviewing</dt>
          <dt>4. Enrollment Process</dt>
          <dt>5. Eligibility Decision</dt>
          </p>

          <p>Find more information and the application on the Michigan.gov website </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="michigan.gov/mikidsmatter/providers/license-exempt"
          >
            <p className="access-link">Visit Website &gt;</p>
          </a>
      </div>
      <img
        src={DividingLine}
        className="div-line"
        alt="Content dividing line"
      />
      <h3>Want to Access More Options?</h3>
      <div className="containing-div2">
        <div className="two-column2">
          <img
            src={GreatStartLogo}
            title="Great Start Readiness Sherwood Park"
            alt="Great Start Readiness Logo"
            className="widget-resize-childcare"
          />
          <p className="subtitle-text">Great Start to Quality</p>
          <p>
            <b>If none of the above options will work for your family,</b>{" "}
            access the Great Start to Quality webpage, enter your address, and
            find all licensed provider options in your area.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://greatstarttoquality.org/find-programs/"
          >
            <p className="access-link">
            Visit Website &gt;
            </p>
          </a>
        </div>
        <div className="two-column2">
          <img
            src={EligibilityCalculator}
            title="Calculator for Eligibility"
            alt="Great Start Readiness Calculator Logo"
            className="widget-resize-childcare"
          />
          <p className="subtitle-text">Great Start Eligibility Calculator</p>
          <p>
            <b>
              If you want to quickly find out if you qualify for funding for your
              childcare,
            </b>{" "}
            fill out the survey below on the Great Start to Quality website
            before filling out MIBridges appication.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://greatstarttoquality.org/calculator/"
          >
            <p className="access-link">Visit Eligibility Calculator &gt;</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Childcare;
