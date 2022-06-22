import React from "react";
import "./BannerUpSide.css";
import rocketImg from "../../Assets/Icons/PicsArt_04-14-04.42 1.png";
import { Link } from "react-router-dom";

const BannerUpSide = () => {
  return (
    <div className="banner-upside-parent">
      <div>
        <div>
          <h1 className="banner-heading">
            Accelerate Innovation <br /> with Global AI Challenges
          </h1>
          <p className="border-line"></p>
        </div>
        <div>
          <h3 className="banner-text">
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </h3>
        </div>
        <div>
          <Link to={'create-challenge'}><button className="chlng-button">Create Challenge</button></Link>
        </div>
      </div>
      <div>
        <img className="rocket-img" src={rocketImg} alt="" />
      </div>
    </div>
  );
};

export default BannerUpSide;
