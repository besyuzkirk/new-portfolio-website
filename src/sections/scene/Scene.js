import React from "react";
import "./Scene.css";

function Scene() {
  return (
    <div className="body-start">
      <section className="main">
        <div className="absolute cloud_left">
          <ul className="inline-list">
            <li className="cloud"></li>
            <li className="cloud"></li>
            <li className="cloud"></li>
          </ul>
        </div>

        <div className="absolute cloud_right">
          <ul className="inline-list">
            <li className="cloud"></li>
            <li className="cloud"></li>
            <li className="cloud"></li>
          </ul>
        </div>

        <span className="absolute sun"></span>
        <span className="absolute moon"></span>

        <div className="absolute landscape left_m">
          <span className="grass gl">
            <span className="land_tree leftt-gras">
              <ul className="inline-list">
                <li className="t_grass"></li>
                <li className="t_grass"></li>
                <li className="t_grass"></li>
              </ul>
            </span>
          </span>

          <span className="absolute tree1"></span>
          <span className="absolute tree2"></span>
        </div>

        <div className="absolute landscape max_right">
          <span className="grass">
            <span className="land_tree">
              <ul className="inline-list">
                <li className="t_grass"></li>
                <li className="t_grass"></li>
                <li className="t_grass"></li>
              </ul>
            </span>
          </span>

          <div className="mountain">
            <div className="r-mountain"></div>
            <ul className="snow inline-list">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="absolute boat">
          <ul className="no-bullet">
            <ul className="no-bullet fume">
              <li className="fume4"></li>
              <li className="fume3"></li>
              <li className="fume2"></li>
              <li className="fume1"></li>
            </ul>
            <li className="smokestack"></li>
            <li className="white-body">
              <ul className="windows inline-list">
                <li className="circle"></li>
                <li className="circle"></li>
                <li className="circle"></li>
              </ul>
            </li>
            <li className="boat-body"></li>
          </ul>
        </div>

        <div className="absolute dark-back"></div>

        <div className="absolute plane">
          <ul className="no-bullet">
            <li className="plane-body">
              <ul className="windows inline-list">
                <li className="circle"></li>
                <li className="circle"></li>
                <li className="circle"></li>
                <li className="circle"></li>
                <li className="circle"></li>
              </ul>
            </li>

            <li className="wing1"></li>
            <li className="wing1 flipwing"></li>
            <li className="absolute teal"></li>
          </ul>
        </div>

        <div className="absolute sea">
          <span className="wave1"></span>
          <span className="wave2"></span>
          <span className="wave3"></span>
          <span className="wave4"></span>
        </div>
      </section>
    </div>
  );
}

export default Scene;
