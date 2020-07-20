import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import About from "./components/about/About";

function Navbar() {
  return (
    <Router>
      <nav className="navbar flex-column ">
        <div className="col-12 col-md-auto"></div>
        <ul className="nav ">
          <li className="nav-item">
            <Link to="/" className="nav-link ">About</Link>
          </li>
          <li className="nav-item">
            <Link to ="/project "className="nav-link " >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " data-toggle="modal" >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

    </Router>
  );
}

export default Navbar;
