import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";


function Navbar() {
  return (
      <nav className="navbar flex-column">
        <div className="col-12 col-md-auto"></div>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to ="/project" className="nav-link" >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to ="/contact" className="nav-link" data-toggle="modal" >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
  );
}
export default Navbar;
