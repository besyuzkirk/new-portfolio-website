import React from "react";
import "./Projects.css";
import Project from "../../components/project/Project";
import { PROJECTS } from "../../dummy_datas/ProjectData";

function Projects() {
  return (
    <div className="portfolio">
      <h1 className="my-projects">My Projects</h1>
      <div className="gallery">
        {PROJECTS.map((item) => (
          <Project
            animation={"zoom-in"}
            link=""
            projectImg={item.projectImg}
            projectName={item.projectName}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
