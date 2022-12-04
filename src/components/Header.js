import React, { useEffect } from "react";
//import headerImage from "../media/bannerphoto.jpg";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import Header2 from "../media/Header2.png";
import UpdatedHeader from "../media/UpdatedHeader.png";

function Header() {


  return (
    <div>
      <div className="container">
        <Link to="/home">
          <img
            src={UpdatedHeader}
            title="Helping Hands Webpage Header Banner"
            alt="Header of two hands"
            className="header-image"
          />
        </Link>
        {/* <div className="textshadow">
        <h1 className="textshadowcolor">Immigration Resource Center</h1>
      </div> */}
        <div className="centered">
        <h1>Immigration Resource Center</h1>
          <p className="header-description">
            Find medical, legal, career, food, childcare resources and more in
            the Grand Rapids area
          </p>
        </div>
      </div>
      {/* <div className="navbannerfixed">
        <img src={NavBannerFixedPos} className="navimage" />
        <Link to="/home">
          <p className="helping-hands-title">
            Helping <br /> Hands.
          </p>
        </Link>
        <Navbar />
      </div> */}
    </div>
  );
}

export default Header;
