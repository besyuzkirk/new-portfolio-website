import React from "react";
import "./Experience.css";

function Experience(props) {
  return (
    <div className="experience">
      <div className="firm-icon">
        <img src={props.firmImageSrc}></img>
      </div>
      <div className="experience-information">
        <p className="job-title">{props.jobTitle}</p>
        <p className="firm-title">{props.firmTitle}</p>
        <p className="job-date">{props.jobDate}</p>
        <p className="job-place">{props.jobPlace}</p>
      </div>
    </div>
  );
}

export default Experience;
