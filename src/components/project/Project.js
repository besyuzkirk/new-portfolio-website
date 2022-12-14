import React from "react";
import "./Project.css";
import "aos/dist/aos.css";
function Project(props) {
  return (
    <div className="project" data-aos={props.animation}>
      <a href={props.projectLink} target="_blank">
        <img className="project-image" src={props.projectImg}></img>
        <p className="project-name">{props.projectName}</p>
      </a>
    </div>
  );
}

export default Project;
