import React from 'react'
import './Portfolio.css'


function Project(props) {
  return (
    <div className='project' data-aos={props.animation}>
        <a href={props.link}>
            <img className='project-image' src={ process.env.PUBLIC_URL + 'images/portfolio/node-movie-api.png'}></img>
            <p className='project-name'>NodeJS / JWT Bearer - Movie Director Api</p>
        </a>
    </div>
  )
}

export default Project