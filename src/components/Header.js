import React from "react";
//import headerImage from "../media/bannerphoto.jpg";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import Header2 from  '../media/Header2.png';
import BannerNav from '../media/BannerNav.jpg'

function Header() {
  return (
    <div className="container">
      <Link to="/home">
        {/* <img src={BannerNav}
          title="Helping Hands Webpage Header Banner"
          alt="Header of two hands"
          /> */}
        <img
          src={Header2}
          title="Helping Hands Webpage Header Banner"
          alt="Header of two hands"
          className="header-image"
        />
      </Link>
      <div className="textshadow">
        <h1 className="textshadowcolor">Helping Hands.</h1>
        <h2 className="textshadowcolor">Immigration Resource Center</h2>
      </div>
      <div className="centered">
        <h1>Helping Hands.</h1>
        <h2>Immigration Resource Center</h2>
      </div>
    </div>
  );
}

export default Header;
