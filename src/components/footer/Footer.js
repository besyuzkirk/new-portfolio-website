import React from "react";
import "./Footer.css";
import { BsFillSuitHeartFill } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      Developed By Ahmet Karademir{" "}
      <a href="/">
        <BsFillSuitHeartFill className="heart" color="red" />
      </a>
    </div>
  );
}

export default Footer;
