import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Bes from "../images/navbarIcon.png";
import "../Style/Header.css";

const Header = () => {
  const [navbarColor, setNavbarColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarColor("#080f18"); // Change the color based on scroll position
      } else {
        setNavbarColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" className="sticky-top align-items-center">
      <div className="continer-flued d-flex justify-content-between align-items-center">
        <nav
          className="navbar navbar-expand-lg navbar-background navbar-dark"
          style={{ backgroundColor: navbarColor }}
        >
          <Link to="about" className="navbar-brand">
            <img
              className="navbar-image"
              src={Bes}
              alt="Besmellah"
              width={90}
              height={90}
            ></img>
          </Link>
          <span className="navTxt">Besmellah Solaimankhil</span>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center "
            id="navbar"
          >
            <ul className="navbar-nav navbar-right">
              <li className="nav-ithem">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={100}
                  className="nav-link"
                >
                  About
                </Link>
              </li>
              <li className="nav-ithem">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={100}
                  className="nav-link"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-ithem">
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={100}
                  className="nav-link"
                >
                  Skills
                </Link>
              </li>

              <li className="nav-ithem">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={100}
                  className="nav-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
