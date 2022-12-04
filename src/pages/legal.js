import React from "react";
import "../styles/Legal.css";
import Petition from "../media/Petition.jpg";
import Gun from "../media/Gun.jpg";
import Military from "../media/Military.jpg";
import FourthAmend from "../media/FourthAmend.jpg";
import Court from "../media/Court.jpg";
import Lawyer from "../media/Lawyer.jpg";
import Judge from "../media/Judge.jpg";
import Jail from "../media/Jail.jpg";
import USA from "../media/USA.jpg";

function Legal() {
  return (
    <div className="main-div">
      <h1 className="title">Legal</h1>
      <div className="intro-paragraph">
        Every Immigrant and US citizen is protected under the consitutional
        rights of the United States of America
      </div>
      <h2 className="know-your-rights">Learn your Consitutional Rights</h2>
      <div className="two-column-wrapper">
        <div className="two-column2">
          <h3>First Ammendment</h3>
          <div className="legal-rights">
            <img
              src={Petition}
              title="Kent County Headstart"
              alt="child playing with blocks"
              className="widget-resize-childcare"
            />
            <p>
              <b>
                Congress protects the right to freedom of speech, press,
                assembly, and petition
              </b>
            </p>
            <p>
              You have the right to practice any religious belief, attend
              religious ceremonies, speak freely of your opinions, and assemble
              peaceful petitions as long as no one is harmed and no threats are
              made.
            </p>
          </div>
        </div>
        <div className="two-column2">
          <h3>Second Ammendment</h3>
          <div className="legal-rights">
            <img
              src={Gun}
              title="Kent County Headstart"
              alt="child playing with blocks"
              className="widget-resize-childcare"
            />
            <p>
              <b>Congress protects the right to bear arms</b>
            </p>
            <p>
              "A well regulated militia, being necessary to the security of a
              free state, the right of the people to keep and bear arms, shall
              not be infringed."
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
        <div className="two-column2">
          <h3>Third Ammendment</h3>
          <div className="legal-rights">
            <img
              src={Military}
              title="Kent County Headstart"
              alt="child playing with blocks"
              className="widget-resize-childcare"
            />
            <p>
              <b>
                Congress prohibits prohibits the goverment from quartering
                troops in private homes.
              </b>
            </p>
            <p>
              "No soldier shall, in time of peace be quartered in any house,
              without the consent of the owner, nor in time of war, but in a
              manner to be prescribed by law."
            </p>
          </div>
        </div>
        <div className="two-column2">
          <h3>Fourth Ammendment</h3>
          <div className="legal-rights">
            <img
              src={FourthAmend}
              title="Fourth Ammendment"
              alt="Right to be secure in your home, police standing outside house"
              className="widget-resize-childcare"
            />
            <p>
              <b>
                The goverment may not conduct any searches without a warrant,
                and warrants must be issued by a judge based on probable cause
              </b>
            </p>
            <p>
              "The right of the people to be secure in their persons, houses,
              papers, and effects, against unreasonable searches and seizures,
              shall not be violated"
            </p>
          </div>
        </div>
        <div className="two-column2">
          <h3>Fifth Ammendment</h3>
          <div className="legal-rights">
            <img
              src={Court}
              title="Court"
              alt="court room gavel and papers fifth amendment representation"
              className="widget-resize-childcare"
            />
            <p>
              <b>
                Provides that citizens not be subject to criminal prosecution
                without due process. Citizens and Immigrants may not be tried.
              </b>
            </p>
            <p>
              You cannot be tried for the same crime twice, cannot be made a
              witness against yourself, and your private property cannot be
              taken without compensation. You have the right to remain silent.
            </p>
          </div>
        </div>
        <div className="two-column2">
          <h3>Sixth Ammendment</h3>
          <div className="legal-rights">
            <img
              src={Lawyer}
              title="Lawyer"
              alt="court room lawyer sixth amendment representation"
              className="widget-resize-childcare"
            />
            <p>
              Assures the right to a speedy trial by a jury of one's peers, to
              be informed of the crimes with which one is charged, and to
              confront the witnesses brought forward by the government.
            </p>
            <p>
              Also provides the right to compel testimony from witnesses, as
              well as <b>the right to a lawyer</b> even if you cannot afford
              legal representation.
            </p>
            <br />
            <br />
          </div>
        </div>
        <div className="two-column2">
          <h3>Seventh Ammendment</h3>
          <div className="legal-rights">
            <img
              src={Judge}
              title="Judge"
              alt="court room judge seventh amendment representation"
              className="widget-resize-childcare"
            />
            <p>
              <b>
                Provides that civil cases preserve the right to trial by jury.
              </b>
            </p>
            <p>
              "In Suits at common law, where the value in controversy shall
              exceed twenty dollars, the right of trial by jury shall be
              preserved, and no fact tried by a jury, shall be otherwise
              re-examined in any Court of the United States, than according to
              the rules of the common law."
            </p>
          </div>
        </div>
        <div className="two-column2">
          <h3>Eighth Ammendment</h3>
          <div className="legal-rights">
            <img
              src={Jail}
              title="Jail"
              alt="man behind bars eighth amendment representation"
              className="widget-resize-childcare"
            />
            <p>
              <b>
                Prohibits excessive bail, excessive fines, and cruel and unusual
                punishments.{" "}
              </b>{" "}
              Bail allows you to leave jail while awaiting trial date in
              exchange for money. You can receieve money back after attending
              all court dates.
            </p>
            <p>
              "Excessive bail shall not be required, nor excessive fines
              imposed, nor cruel and unusual punishments inflicted."
            </p>
          </div>
        </div>
        <div className="two-column2">
          <h3>Ninth Ammendment</h3>
          <div className="legal-rights">
            <img
              src={USA}
              title="Jail"
              alt="man behind bars eighth amendment representation"
              className="widget-resize-childcare"
            />
            <p>
              <b>
                Simply put, the rights of the people are not <i>only</i> the
                rights written in the Constitution
              </b>
            </p>
            <p>
              "The enumeration in the Constitution, of certain rights, shall not
              be construed to deny or disparage others retained by the people."
            </p>
          </div>
        </div>
        <div className="two-column2">
          <h3>Tenth Ammendment</h3>
          <div className="legal-rights">
            <img
              src={Jail}
              title="Jail"
              alt="man behind bars eighth amendment representation"
              className="widget-resize-childcare"
            />
            <p>
              <b>
                Federal Government reach and abilities are limited to that of
                the Constituion. This leaves some power to the states.
              </b>
            </p>
            <p>
              "The powers not delegated to the United States by the
              Constitution, nor prohibited by it to the States, are reserved to
              the States respectively, or to the people."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Legal;
