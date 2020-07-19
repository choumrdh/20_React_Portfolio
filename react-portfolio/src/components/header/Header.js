import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="flex-column flex-md-row text-center container">
        <h1 className="display-4">Michelle Chou</h1>
        <h3>Full-Stack Developer</h3>
        <div className="container">
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/michelle-chou-ba1b2a52/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <i class="fab fa-linkedin"></i>
              </span>
            </a>
            <a
              href="https://github.com/choumrdh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <i class="fab fa-github"></i>
              </span>
            </a>
            <a
              href="./Images/MChou_Resume2020.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <i class="fas fa-file-alt"></i>
              </span>
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
