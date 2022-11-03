import React from "react";
import "./Certification.css";

function Certification(props) {
  return (
    <div className="cert">
      <div className="cert-images">
        <img src={props.certImg}></img>
      </div>
      <div className="cert-info">
        <h2>{props.certTitle}</h2>
        <h3>{props.certGiver}</h3>
      </div>
    </div>
  );
}

export default Certification;
