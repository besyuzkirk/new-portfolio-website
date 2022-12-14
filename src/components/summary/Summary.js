import React from "react";
import "./Summary.css";
import { FiInstagram, FiLinkedin, FiYoutube, FiGithub } from "react-icons/fi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { SiMedium } from "react-icons/si";

function Summary() {
  return (
    <div className="summary">
      <h1>Hello!</h1>
      <h2>I'm Ahmet Karademir</h2>
      <p>
        I am a highly motivated and ambitious MIS student at Boğaziçi University
        <span className="summary-mobile"> with strong communication skills and learning ability</span>. I am very serious
        about my career and I am driven to be the best at what I do. You can
        check out my accounts and say hello.
      </p>
      <ul>
        <li>
          <a href="https://github.com/besyuzkirk">
            <FiGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ahmet-karademir-66a53b16a/">
            <FiLinkedin />
          </a>
        </li>
        <li>
          <a href="/">
            <MdOutlineBusinessCenter />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@ahmtk1910">
            <SiMedium />
          </a>
        </li>
        <li>
          <a href="/">
            <FiYoutube />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/besyuzkirk/">
            <FiInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Summary;
