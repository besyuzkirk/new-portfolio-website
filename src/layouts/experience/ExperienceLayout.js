import React from "react";
import "./ExperienceLayout.css";
import { DUMMY_EXPERIENCE } from "../../dummy_datas/ExperienceData";
import Experience from "../../components/experience/Experience";

function ExperienceLayout(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <hr></hr>
      <br></br>
      {DUMMY_EXPERIENCE.map((item) => (
        <Experience
          key={item.id}
          firmImageSrc={item.firmImageSrc}
          jobTitle={item.jobTitle}
          firmTitle={item.firmTitle}
          jobDate={item.jobDate}
          jobPlace={item.jobPlace}
        />
      ))}
    </div>
  );
}

export default ExperienceLayout;
