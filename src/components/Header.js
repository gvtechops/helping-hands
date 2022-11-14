import React from "react";
import headerImage from "../media/bannerphoto.jpg";
import "../styles/Header.css"

function Header() {
  return (
    <div className="container">
        <img src={headerImage} title="Helping Hands Webpage Header Banner" alt="Header image of two hands" className="headerImage"/>
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
