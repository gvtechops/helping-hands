import React from "react";
import WestMichiganWork from "../media/WestMichiganWork.jpg";
import OutgoingCall from "../media/OutgoingCall.jpg";
import WorkBoxStaffing from "../media/WorkboxStaffing.jpg";
import GillStaffing from "../media/GillStaffing.png";
import ResourceMFG from "../media/ResourceStaffing.png"
function Jobs() {
  return (
    <div className="main-div">
      <h1 className="title">Jobs</h1>
      <div className="medical-2-column-container">
        <div className="medical-2-column">
          <img
            src={WestMichiganWork}
            title="West Michigan Works"
            alt="logo for West Michigan Works in Grand Rapids Michigan"
            className="widget-resize-childcare"
          />
          <p className="subtitle-text">West Michigan Works</p>
          <p className="description-paragraphs">
            Michigan Works is a workforce agency in West Michigan. The agency is
            designed to help with employment regardless of your age, gender,
            education, and skills. Michigan Works also help with job skills,
            training, and GED based on your interests.
          </p>

          <p>
            <dl>
              <dt>Location: </dt>
              <br />
              <b>
                <dd>121 Franklin St. SE, </dd>
                <dd>Grand Rapids, MI 49507</dd>
              </b>
            </dl>
            <br />
            <dl>
              <dt>Contact: </dt>
              <br />
            </dl>
            <div className="clear">
              <img
                src={OutgoingCall}
                alt="phone icon for cell number"
                className="contact-two-column-img"
              />

              <p className="contact-two-column-paragraph">616-336-4040</p>
            </div>
          </p>
          <br />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.westmiworks.org/"
          >
            <p className="access-link">Visit Website &gt; </p>
          </a>
        </div>
        <div className="medical-2-column">
          <img
            src={WorkBoxStaffing}
            title="Work Box Staffing"
            alt="Construction Workers Work Box Staffing in Grand Rapids Michigan"
            className="widget-resize-childcare"
          />
          <p className="subtitle-text">Workbox Staffing</p>
          <p className="description-paragraphs">
            Workbox Staffing is an industrial staffing recruiting company in
            Grand Rapids, MI. Finding local jobs as simple and easy with a
            smooth onboarding process. Eligible for full benefits, direct
            deposit and online access to pay stubs and yearly tax forms.
          </p>
          <p>
            <dl>
              <dt>Location: </dt>
              <br />
              <b>
                <dd>530 76th St SW Suite 100, </dd>
                <dd>Byron Center, MI 49315</dd>
              </b>
            </dl>
            <br />
            <dl>
              <dt>Contact: </dt>
              <br />
            </dl>
            <div className="clear">
              <img
                src={OutgoingCall}
                alt="phone icon for cell number"
                className="contact-two-column-img"
              />

              <p className="contact-two-column-paragraph">616-608-8822</p>
            </div>
            <br />
            <br />
          </p>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.workboxstaffing.com/"
          >
            <p className="access-link">Visit Website &gt; </p>
          </a>
        </div>
        <div className="medical-2-column">
          <img
            src={GillStaffing}
            title="Spectrum Health"
            alt="logo for Spectrum Health in Grand Rapids Michigan"
            className="widget-resize-childcare"
          />
          <p className="subtitle-text">Gill Staffing</p>
          <p className="description-paragraphs">
            Gill Staffing helps you find part-time and full-time local jobs in
            Western and Northern Michigan. Helps with applicaiton and onboarding
            process in short period of time and{" "}
            <b>has immediate positions available.</b>
          </p>
          <p>
            <dl>
              <dt>Location: </dt>
              <br />
              <b>
                <dd>2843 East Paris Ave SE, </dd>
                <dd>Grand Rapids, MI 49512</dd>
              </b>
            </dl>
            <br />
            <dl>
              <dt>Contact: </dt>
              <br />
            </dl>
            <div className="clear">
              <img
                src={OutgoingCall}
                alt="phone icon for cell number"
                className="contact-two-column-img"
              />

              <p className="contact-two-column-paragraph">616-455-8600</p>
            </div>
            <br />
            <br />
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://www.gillstaffing.com/"
          >
            <p className="access-link">Visit Website &gt; </p>
          </a>
        </div>
        <div className="medical-2-column">
          <img
            src={ResourceMFG}
            title="Spectrum Health"
            alt="logo for Spectrum Health in Grand Rapids Michigan"
            className="widget-resize-childcare"
          />
          <p className="subtitle-text">ResourceMFG</p>
          <p className="description-paragraphs">
            ResourceMFG is one of the largest staffing companies <b>specializing in manufacturing.</b> Helps with finding
            and applying local jobs temporary, and direct hire positions.
          </p>
          <p>
          <dl>
              <dt>Location: </dt>
              <br />
              <b>
                <dd>3108 29th St SE,, </dd>
                <dd>Grand Rapids, MI 49512</dd>
              </b>
            </dl>
            <br />
            <dl>
              <dt>Contact: </dt>
              <br />
            </dl>
            <div className="clear">
              <img
                src={OutgoingCall}
                alt="phone icon for cell number"
                className="contact-two-column-img"
              />

              <p className="contact-two-column-paragraph">616-784-9100</p>
            </div>
            <br />
            <br />
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.resourcemfg.com/"
          >
            <p className="access-link">Visit Website &gt; </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
