import React, { useEffect } from "react";
import './Box.css'
import "aos/dist/aos.css";
import Aos from "aos";

function Box(props) {

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  
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
