import React from "react";
import NHA from "../media/NHA.png";
import GRCC from "../media/GRCC.png";
import LighthouseAcademy from "../media/LighthouseAcademy.png";
import USALearns from "../media/USALearns.png"

function School() {
  return (
    <div className="main-div">
      <h1 className="title">Learn</h1>
      <h2 className="know-your-rights">Educational Resources</h2>

      <div className="two-column2">
        <img
          src={GRCC}
          title="Grand Rapids Community College Learning Center"
          alt="GRCC"
          className="widget-resize-childcare"
        />
        <h3>Grand Rapids Community College</h3>
        <p className="description-paragraphs">
          <b>Grand Rapids Learning Center</b>
          <br />
          Partnernship program with GRPS and GRCC to{" "}
          <b>help teens seeking their highschool diploma.</b> <br /> <br />
          GRCC also offers career path resources, help transitioning to college,
          and help entering the work force after highschool.
          <dl>
            <br />
            <dt>Basic Requirements</dt>
            <br />
            <dd>Sophomore in high school</dd>
            <dd>based on credits, not age.</dd>
            <br />
            <dd>Between the ages of 16-19</dd>
            <br />
            <dd>Must complete the on-line application</dd>
            <br />
            <dd>
              Meet with staff to determine eligibility prior to enrollment.
            </dd>
          </dl>
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.grcc.edu/students/high-school-programs/grand-rapids-learning-center"
        >
          <p className="access-link">Visit Website &gt; </p>
        </a>
      </div>
      <div className="two-column2">
        <img
          src={NHA}
          alt="NHA"
          title="National Heritage Academies"
          className="widget-resize-childcare"
        />
        <h3>National Heritage Academies</h3>
        <p className="description-paragraphs">
          "NHA partners with community groups to build and operate K-12 public
          charter schools."
        </p>
        <p className="description-paragraphs">
          Charter schools are tution free public schools that operate separately
          from the local public school district. NHA also offers online, virtual
          schooling for K-12 via their PrepNet Virtual Academy.
          <dl>
            <br />
            <dt>Basic Requirements</dt>
            <br />
            <dd>Admissions Form</dd>
            <dd>Official Release of Records</dd>
            <dd>Proof of residency</dd>
            <dd>Attendance Expectations Form</dd>
            <dd>Birth Certificate</dd>
          </dl>
          <dl>
            <br />
            <dt>Location</dt>
            <br />
            <dd>3850 Broadmoor Ave</dd>
            <dd>Grand Rapids, MI 49512</dd>
          </dl>
        </p>
        <p>
          <b>To find an NHA school near you, navigate to the website.</b>
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.nhaschools.com/en/school-finder?state=MI"
        >
          <p className="access-link">Visit Website &gt; </p>
        </a>
      </div>
      <div className="two-column2">
        <img
          src={LighthouseAcademy}
          alt="Lighthouse Academy"
          title="Lighthouse Academy"
          className="widget-resize-childcare"
        />
        <h3>Lighthouse Academy</h3>
        <p className="description-paragraphs">
          <b>
            Tuition free campus with core values of honesty, diversity, and
            forgiveness.{" "}
          </b>
        </p>
        <p className="description-paragraphs">
          Here to support individuals who were expelled, suspended,
          unaccompanied minor refugees, and court referred.
          <dl>
            <br />
            <dt>Basic Requirements</dt>
            <br />
            <dd>There are no prior schooling limitations</dd>
            <dd>Homeschooling students may apply</dd>
            <dd>Public and Private school students are eligible</dd>
            <dd>
              General Education Students between ages of 18 and 20 must be on
              track to graduate with their cohort year.
            </dd>
            <dd>Birth Certificate</dd>
          </dl>
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.lighthouseacademyschool.org/"
        >
          <p className="access-link">Visit Website &gt; </p>
        </a>
      </div>
      <div className="two-column2">
        <img
          src={USALearns}
          alt="Lighthouse Academy"
          title="Lighthouse Academy"
          className="widget-resize-childcare"
        />
        <h3>USA Learns </h3>
        <p className="description-paragraphs">
          Access <b>free courses to learn English, prepare to become a citizen,
          learn job skills,</b> and more through the USA Learns website.
          <br/>
          <br/>
          To access courses, signup free with your name and email
          <dl>
          <br/>
            <dt>Free English Courses</dt>
            <br/>
            <dd>Speaking</dd>
            <dd>Grammar</dd>
            <dd>Vocabulary</dd>
            <dd>Listening</dd>
            <dd>Reading</dd>
            <dd>Writing</dd>
          </dl>
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.usalearns.org/student-registration"
        >
          <p className="access-link">Visit Website &gt; </p>
        </a>
      </div>
      
    </div>
  );
}

export default School;
