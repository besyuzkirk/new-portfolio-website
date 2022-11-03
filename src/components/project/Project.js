import React from 'react'
import './Project.css'
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from 'react'
function Project(props) {

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className='project' data-aos={props.animation}>
        <a href={props.link}>
            <img className='project-image' src={ props.projectImg}></img>
            <p className='project-name'>{props.projectName}</p>
        </a>
    </div>
  )
}

export default Project