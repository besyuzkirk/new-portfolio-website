import React, { useEffect, useState } from "react";
import "./Navigation.css";
import { Link } from "react-scroll";

function Navigation() {

  const [navBackround , setNavBackround] = useState(false)

  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavBackround(true)
    } else {
      setNavBackround(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <ul className= { navBackround ? "navbar nav-active" : "navbar"}>
      <li>
        <Link
          className="scroll-link"
          activeClass="active"
          to="content-section"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="scroll-link"
          activeClass="active"
          to="scroll-swipe"
          spy={true}
          smooth={true}
          offset={-200}
          duration={1000}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className="scroll-link"
          activeClass="active"
          to="my-projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1500}
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          className="scroll-link"
          activeClass="active"
          to="contact-container"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
