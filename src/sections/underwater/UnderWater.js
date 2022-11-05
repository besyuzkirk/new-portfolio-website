import React from "react";
import "aos/dist/aos.css";
import "./UnderWater.css";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import Box from "../../layouts/box/Box";
import Footer from "../../components/footer/Footer";
import {
  STORY_ILLUSTRATION,
  CERTIFICATION_ILLUSTRATION,
  EXPERIENCE_ILLUSTRATION,
} from "../../dummy_datas/IllustrationLinks.js";
import CertificationLayout from "../../layouts/certification/CertificationLayout";
import ExperienceLayout from "../../layouts/experience/ExperienceLayout";
import { STORY_DATA } from "../../dummy_datas/StoryData";
import Projects from "../../layouts/project/Projects";
import Contact from "../../components/contact/Contact";
import { Link } from "react-scroll";

function UnderWater() {
  return (
    <div className="header-section">
      <div className="scroll-down-icon">
        <p>Deep Dive And Learn More About Me</p>
        <Link
          className="scroll-link"
          activeClass="active"
          to="scroll-swipe"
          spy={true}
          smooth={true}
          offset={-200}
          duration={1000}
        >
          <HiOutlineChevronDoubleDown className="scroll-down-icon-svg" />
        </Link>
      </div>
      <span id="scroll-swipe"></span>
      <Box
        left={<p>{STORY_DATA}</p>}
        right={<img className="illustration" src={STORY_ILLUSTRATION}></img>}
      />
      <Box
        right={<ExperienceLayout title="My Experiences" />}
        left={
          <img className="illustration" src={EXPERIENCE_ILLUSTRATION}></img>
        }
      />
      <Box
        title="My Certifications"
        right={
          <img className="illustration" src={CERTIFICATION_ILLUSTRATION}></img>
        }
        left={<CertificationLayout title="My Certifications" />}
      />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default UnderWater;
