import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div>
            <Link to='/school'>Learn</Link>
        </div>
        <div>
            <Link to='/jobs'>Job</Link>
        </div>
        <div>
            <Link to='/legal'>Legal</Link>
        </div>
        <div>
            <Link to='/childcare'>Child</Link>
        </div>
        <div>
            <Link to='/medical'>Medical</Link>
        </div>
        <div>
            <Link to='/food'>Food</Link>
        </div>
        <div>
            <Link to='/contact'>Contact</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
