import React from "react";
import './Box.css'

function Box(props) {
  return (
    <div className="story-box">
      <div data-aos="fade-right" className="story-half-box">
        {props.left}
      </div>
      <div data-aos="fade-left" className="story-half-box">
        {props.right}
      </div>
    </div>
  );
}

export default Box;
