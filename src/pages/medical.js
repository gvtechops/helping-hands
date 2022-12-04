import React from "react";
import DividingLine from "../media/DividingLine.jpg";
import "../styles/Medical.css";
import CherryHealth from "../media/CherryHealth.jpg";
import ExaltaHealth from "../media/ExaltaHealth.png";
import SpectrumHealth from "../media/SpectrumHealth.jpg";
import TrinityHealth from "../media/TrinityHealth.png";


function Medical() {
  return (
    <div className="main-div">
      <h1 className="title">Medical</h1>
      <div className="containing-divider">
        <p className="intro-paragraph">
          The high costs of healthcare is an important challenge that confronts
          all Americans, but especially immigrants. Out-of-pocket health care
          costs are much higher than those paid by the insured.
        </p>
        <p className="intro-paragraph">
          <b>
            Learn your medical rights, and find local resources to connect with
            below.
          </b>
        </p>
        <img
          src={DividingLine}
          className="div-line"
          alt="Content dividing line"
        />
      </div>
      <div className="know-rights">
        <h2 className="know-your-rights">Common Medical Questions</h2>
        <p className="question">
          <ol>
            <li>If I can’t speak English can I get a translator? </li>
            <p className="answer">
              <b>Yes,</b> you have the right to be helped by a translator at no
              cost.
            </p>
            <li>Do I need to provide my immigration status to see a doctor?</li>
            <p className="answer">
              <b>No,</b> You do not have to provide your immigration status to
              get Health Care.
            </p>
            <li>What do I say if they ask for health insurance?</li>
            <p className="answer">
              You can say{" "}
              <b>
                “I am not eligible for health insurance and do not want to
                apply.”
              </b>
            </p>
            <li>Can I apply for insurance representing other individuals?</li>
            <p className="answer">
              <b>Yes,</b> you do not have to provide your immigration status
              when when getting insurance for someone else.{" "}
            </p>
            <li>Do I need a photo ID to get medical care? </li>
            <p className="answer">
              <b>No,</b> you can say “I need medical care but I do not have a
              photo ID.”
            </p>
            <li>
              Can a woman get prenatal care without proper immigration status?{" "}
            </li>
            <p className="answer">
              <b>Yes,</b> Michigan currently provides prenatal care and up to 60
              days of postpartum care regardless of immigration status.
            </p>
          </ol>
        </p>
      </div>
      <h2 className="know-your-rights">Local Resources</h2>
      <div className="medical-2-column-container">
        <div className="medical-2-column">
          <img
            src={CherryHealth}
            title="Cherry Health"
            alt="logo for Cherry Health in Grand Rapids Michigan"
            className="widget-resize-childcare"
          />
          <p className="subtitle-text">Cherry Health</p>
          <p className="description-paragraphs">
            Committed to providing health care for everyone, regardless of
            income.
          </p>

          <p>
            <dl>
              <dt>Services Provided</dt>
              <br />
              <dd>Sliding Fee program to help pay</dd>
              <dd>Free interpretation services</dd>
              <dd>Enrolling in health insurance</dd>
              <dd>Verifying Medicaid eligibility</dd>
              <dd>Assisting with the Marketplace</dd>
              <dd>Answering questions about your health insurance</dd>
              <dd>Understanding your health insurance</dd>
            </dl>
            <br />
            <dl>
              <dt>Location: </dt>
              <br />
              <b>
                <dd>550 Cherry St SE, </dd>
                <dd>Grand Rapids, MI 49503</dd>
              </b>
            </dl>
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://cherryhealth.org/es/locations/ubicacion-de-la-prueba-de-bridget/"
          >
            <p className="access-link">Visit Website in Spanish&gt; </p>
          </a>
        </div>
        <div className="medical-2-column">
          <img
            src={ExaltaHealth}
            title="Exalta Health"
            alt="logo for Exalta Health in Grand Rapids Michigan"
            className="widget-resize-childcare"
          />
          <p className="subtitle-text">Exalta Health</p>
          <p className="description-paragraphs">
            <b>Faith based non-profit</b> for accessible care Serves the
            uninsured, under-insured, and refugees to create a healthier
            community.
          </p>
          <p>
            <dl>
              <dt>Services Provided</dt>
              <br />
              <dd>Integrated Healthcare Model</dd>
              <dd>Medical Services</dd>
              <dd>Dental Services</dd>
              <dd>Spiritual Services</dd>
              <dd>Behavioral Services</dd>

              <dd>Sliding Fee program to help pay</dd>
            </dl>
            <br />
          </p>
          <p>
            <dl>
              <dt>Eligibility Details</dt>
              <br />
              <dd>Income at or below 250% of the</dd>
              <dd>Federal Poverty Index</dd>
              <br />
              <dd>Agree to contribute financially</dd>
              <dd>as you are able</dd>
              <br />
              <dd>Be willing to participate</dd>
              <dd>in your healthcare</dd>
            </dl>
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://exaltahealth.org/services/#medical"
          >
            <p className="access-link">Visit Website in Spanish&gt; </p>
          </a>
        </div>
        <div className="medical-2-column">
          <img
            src={SpectrumHealth}
            title="Spectrum Health"
            alt="logo for Spectrum Health in Grand Rapids Michigan"
            className="widget-resize-childcare"
          />
          <p className="subtitle-text">Spectrum Health More Life Mas Vida</p>
          <p className="description-paragraphs">
            More Life Más Vida is designed to help participants understand the
            status of their current health, and simple behavior changes they can
            make to positively impact their well-being.
          </p>
          <p>
            <dl>
              <dt>Services Provided</dt>
              <br />
              <dd>Free health screening</dd>
              <dd>Dedicated care team</dd>
              <dd>Includes registered nurse and community health worker</dd>
              <dd>Health education</dd>
              <dd>Physical activity and nutrition classes</dd>

              <dd>Sliding Fee program to help pay</dd>
            </dl>
            <br />

            <dl>
              <dt>Eligibility Details</dt>
              <br />
              <dd>Age 18 or older</dd>
              <dd>Kent County Resident</dd>
              <br />
              <dd>Not previously diagnosed with</dd>
              <dd>diabetes, heart attack, or stroke</dd>
              <br />
              <dd>Not pregnant or within</dd>
              <dd>6 months postpartum</dd>
              <dd>Limited access to healthcare</dd>
            </dl>
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.spectrumhealth.org/healthier-communities/our-programs/more-life-mas-vida"
          >
            <p className="access-link">Visit Website &gt; </p>
          </a>
        </div>
        <div className="medical-2-column">
          <img
            src={TrinityHealth}
            title="Spectrum Health"
            alt="logo for Spectrum Health in Grand Rapids Michigan"
            className="widget-resize-childcare"
          />
          <p className="subtitle-text">Trinity Health</p>
          <p className="description-paragraphs">
            Everything we do is rooted in our heritage as a faith-based
            organization and our strong commitment to improving health in the
            communities we serve.
          </p>
          <p>
            <dl>
              <dt>Services Provided</dt>
              <br />
              <dd>Answer questions about health insurance</dd>
              <dd>Financial Assistance</dd>
              <dd>Enrollment Assistance</dd>
              <dd>Preventative Case Services without fees</dd>
              <dd>Community Benefit Programs</dd>

              <dd>Pharmaceutical Assistance Program</dd>
              <dd>Uncompensated Care</dd>
              <dd>Wheels of Mercy mobile assistance</dd>
            </dl>
            <br />
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.mercyhealth.com/location/trinity-health-saint-marys-grand-rapids"
          >
            <p className="access-link">Visit Website &gt; </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Medical;
