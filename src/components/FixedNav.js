import React from "react";
import Navbar from "./Navbar";
//import NavBannerFixedPos from "../media/NavBannerFixedPos.png"
import SkinnierNav from "../media/SkinnierNav.png"
import "../styles/Header.css";
import { Link } from "react-router-dom";


function FixedNav() {
  return (
    <div>
      <div className="navbannerfixed">
        <img src={SkinnierNav} className="navimage" alt="navigation banner background shape" />
        <Link to="/">
          <p className="helping-hands-title">
            Helping <br /> Hands.
          </p>
        </Link>
        <Navbar />
      </div>
    </div>
  );
}

export default FixedNav;
