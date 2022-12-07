import React from "react";
//import headerImage from "../media/bannerphoto.jpg";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import UpdatedHeader from "../media/UpdatedHeader.png";

function Header() {


  return (
    <div>
      <div className="container">
        <Link to="/">
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
    
    </div>
  );
}

export default Header;
