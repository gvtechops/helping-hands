import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div>
            <Link to='/'>School</Link>
        </div>
        <div>
            <Link to='/'>Job</Link>
        </div>
        <div>
            <Link to='/'>Legal</Link>
        </div>
        <div>
            <Link to='/'>Child</Link>
        </div>
        <div>
            <Link to='/'>Medical</Link>
        </div>
        <div>
            <Link to='/'>Food</Link>
        </div>
        <div>
            <Link to='/'>Contact</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
