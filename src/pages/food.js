import React from "react";
import WIC from "../media/WIC.jpg";
import DividingLine from "../media/DividingLine.jpg";
import SNAP from "../media/SNAP.png";
import MIBridgesLogo from "../media/MIBridgesLogo.jpg";
import FeedingAmerica from "../media/FeedingAmerica.jpg";

function Food() {
  return (
    <div className="main-div">
      <h1 className="title">Food Resources</h1>
      <h2 className="know-your-rights">Assisted Funding Resources</h2>

      <div className="containing-div2">
        <div className="two-column2">
          <img
            src={WIC}
            title="WIC Logo"
            alt="WIC Logo for Access Kent"
            className="widget-resize-childcare"
          />
          <p className="subtitle-text">Access Kent WIC Program</p>
          <p className="description-paragraphs">
            WIC is a federally-fundeded supplemental nutrition program. The
            program offers the nutrition education, supplemental food, and
            breastfeeding support. WIC supports more than 200,000 moms, babies,
            and children under 5 years of age every month.
          </p>
          <p>
            <b>WIC Eligibility</b>
            <ul>
              <li>Michigan Resident</li>
              <li>
                Must Meet Income Guidelines linked under "WIC Income Calculation
                Reference"
              </li>
              <li>Children age birth to 5 years old</li>
            </ul>
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/url?client=internal-element-cse&cx=002464469049091051884:lys7yhzv5-c&q=https://www.accesskent.com/Health/WIC/pdfs/wic_income_guidelines.pdf&sa=U&ved=2ahUKEwiS-cuhmdT7AhUVk4kEHRjnDBsQFnoECAkQAg&usg=AOvVaw2NHsvk48_l7D5ORh2SsQjD"
          >
            <p className="access-link">View WIC Calculation Sheet &gt; </p>
          </a>
          <p>
            <dl>
              <dt>Location:</dt>
              <dd>4700 Kalamazoo Ave SE,</dd>
              <dd>Kentwood, MI 49508</dd>
              <br />
              <dt>Contact:</dt>
              <dd>(616) 632-7025</dd>
            </dl>
          </p>
          <p>
            <b>Want to learn more about the program?</b>
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.accesskent.com/Health/WIC/"
          >
            <p className="access-link">Visit Website &gt; </p>
          </a>
        </div>
        <div className="two-column2">
          <img
            src={SNAP}
            title="SNAP Logo"
            alt="SNAP, otherwise known as Food Stamps"
            className="widget-resize-childcare"
          />
          <p className="subtitle-text">
            Supplemental Nutrition Assistance Program
          </p>
          <p className="description-paragraphs">
            <b>SNAP</b> is a federall program also known as Food Stamps. The
            program is designed to help low-income people. Eligibility is based on
            the income, expenses, asset limits, and residency status of all
            members in a household. There are multiple offices around Michigan
            to get information from.
          </p>
          <p>
            <b>
              In Michigan, SNAP is commonly called the Food Assistance Program-
              FAP
            </b>
          </p>
          <p>
            <b>In order to apply, you must access MIBridges</b>
          </p>
          <p>
            the Kent County Michigan Department of Health and Human Services is
            located at the address below
          </p>
          <p>
            <dl>
           
              <dt>Location:</dt>
              <dd>121 MLK Jr. St SE #200,</dd>
              <dd>Grand Rapids, MI 49507</dd>
              <br />
              <dt>Contact:</dt>
              <dd>(616) 248-1000</dd>
            </dl>
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.michigan.gov/mdhhs/assistance-programs/food/application-process"
          >
            <img src={MIBridgesLogo} alt="Logo for MIBridges" />
            <p className="access-link">
             View Website &gt;{" "}
            </p>
          </a>
        </div>
        <img
        src={DividingLine}
        className="div-line"
        alt="Content dividing line"
      />
        <h2 className="know-your-rights">Local Foodbank Resources</h2>
        <div className="two-column2">
          <img
            src={FeedingAmerica}
            title="Feeding America Logo"
            alt="Feeding America offers food assistance to those in need"
            className="widget-resize-childcare"
          />
          <p className="subtitle-text">Feeding America West Michigan </p>
          <p className="description-paragraphs">
            <b>Feeding America provides the free food for families</b> who face
            barriers to putting foods on the table by offering food to 40 of the
            83 Michigan counties. Mobile Pantry has variety of fresh fruits,
            vegetables, and dairy products etc.
          </p>
          <p>
            <dl>
          
              <dt>Location:</dt>
              <dd>4700 Kalamazoo Ave SE,</dd>
              <dd>Kentwood, MI 49508</dd>
              <br />
              <dt>Contact:</dt>
              <dd>(616) 784-3250</dd>
            </dl>
          </p>
          <p>
            <b>
              To find more locations offering food services, enter your zip code
              into the map on the Feeding America Webpage
            </b>
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.feedwm.org/findfood/"
          >
            <p className="access-link">Visit Website &gt; </p>
          </a>
        </div>
        <div className="two-column2">
          <img
            src={WIC}
            title="Great Start Readiness Sherwood Park"
            alt="Great Start Readiness Logo"
            className="widget-resize-childcare"
          />
          <p className="subtitle-text">The Green Apple Pantry</p>
          <p className="description-paragraphs">
            The Green Apple Pantry helps our local neighbors bring food for
            their families. Their holiday meals bring smiles to your table. They are currently giving out boxes outdoors.
          </p>
          <p>
            <dl>
    
              <dt>Location:</dt>
              <dd>4307 Kalamazoo Ave SE, </dd>
              <dd>Grand Rapids, MI 49508</dd>
              <br />
              <dt>Contact:</dt>
              <dd>info@thegreenapplepantry.org</dd>
              <dd>(616) 455-9411</dd>
            </dl>
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://thegreenapplepantry.org/"
          >
            <p className="access-link">Visit Website &gt;</p>
          </a>
        </div>
      </div>
      <img
        src={DividingLine}
        className="div-line"
        alt="Content dividing line"
      />
      </div>
  );
}

export default Food;
