import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Nav() {
  const [clicked, setclicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  //for sticky navbar
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div>
      <nav className={scrolled ? "nav-items scrolled" : "nav-items"}>
        <div
          className="menu-icon"
          onClick={() => {
            setclicked(!clicked);
          }}
        >
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <li className="nav-links">
            <Link
              activeClass="active"
              to="banner"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Home
            </Link>
          </li>
          <li className="nav-links">
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              About
            </Link>
          </li>
          <li className="nav-links">
            <Link
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              offset={-150}
              duration={1000}
            >
              Projects
            </Link>
            </li>
            <li className="nav-links">
            <Link
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              offset={-150}
              duration={1000}
            >
              Skills
            </Link>
            </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
