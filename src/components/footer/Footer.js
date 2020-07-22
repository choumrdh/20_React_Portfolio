import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer fixed-bottom mt-auto py-1 mt-5 text-center container">
      <div >
        <img src={process.env.PUBLIC_URL + "./assets/img/MichelleLogo.png"} alt="Me"/>
        <span className="text-white">
           M.Chou Copyright 2020
        </span>
      </div>
    </footer>
  );
}

export default Footer;
