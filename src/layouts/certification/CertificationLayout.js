import React from "react";
import "./CertificationLayout.css";
import { CERTIFICATION_DATA } from "../../dummy_datas/CertificationData";
import Certification from "../../components/certification/Certification";

function CertificationLayout(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <hr></hr>
      <br></br>
      {CERTIFICATION_DATA.map((item) => (
        <Certification
          key={item.id}
          certImg={item.certImg}
          certTitle={item.certTitle}
          certGiver={item.certGiver}
        />
      ))}
    </div>
  );
}

export default CertificationLayout;
