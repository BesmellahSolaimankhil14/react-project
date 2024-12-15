import React from "react";
// import { Link } from "react-scroll";
import "../Style/Footer.css";
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Add the solid icons to the library
library.add(fas);

export default function Footer() {
  return (
    <div className="footer pb-5 text-center">
      <p>©Besmellah Solaimankhil 2024</p>
      <a href="https://t.me/MZSEWSRB">
        <FaTelegram className="foot-icon" />
      </a>
    
      <a href="https://www.linkedin.com/in/besmellah-solaimankhil-b0838231b/">
        <FaLinkedin className="foot-icon" />
      </a>
      <a href="https://github.com/BesmellahSolaimankhil14">
        <FaGithub className="foot-icon" />
      </a>
    </div>
  );
}
