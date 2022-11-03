import React, { useEffect } from "react";
import Aos from "aos";
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
import {STORY_DATA} from "../../dummy_datas/StoryData"
import Projects from "../../layouts/project/Projects";

function UnderWater() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="header-section">
      <div className="scroll-down-icon">
        <p>Deep Dive And Learn More About Me</p>
        <a href="">
          <HiOutlineChevronDoubleDown size={50} />
        </a>
      </div>
      <div>
        <Box
          left={<p>{STORY_DATA}</p>}
          right={<img src={STORY_ILLUSTRATION}></img>}
        />
        <Box
          right={<ExperienceLayout title="My Experience" />}
          left={<img src={EXPERIENCE_ILLUSTRATION}></img>}
        />
        <Box
          title="My Certifications"
          right={<img src={CERTIFICATION_ILLUSTRATION}></img>}
          left={<CertificationLayout title="My Experience" />}
        />
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default UnderWater;