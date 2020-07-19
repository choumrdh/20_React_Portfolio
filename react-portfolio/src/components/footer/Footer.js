import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer fixed-bottom mt-auto py-3 mt-5 text-center container">
      <div >
        <span>
          Copyright. Mich.Chou<img src={process.env.PUBLIC_URL + "./assets/img/MichelleLogo.png"} alt="Me"/>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
