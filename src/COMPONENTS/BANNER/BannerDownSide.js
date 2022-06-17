import React from "react";
import "./BannerDownSide.css";
import img1 from "../../Assets/Icons/eos-icons_ai.png";
import img2 from "../../Assets/Icons/eos-icons_data-scientist.png";
import img3 from "../../Assets/Icons/eos-icons_ai-healing.png";

const BannerDownSide = () => {
  return (
    <div className="banner-downside-parent-contain">
      <div className="banner-downside-parent">
        <div className="ai-model-parent">
          <div className="ai-model-img-div">
            <img className="ai-model-img" src={img1} alt="" />
          </div>
          <div className="ai-model-text-div">
            <h3>100K+</h3>
            <p>AI model submissions</p>
          </div>
        </div>
        <div>
          <p className="devider"></p>
        </div>
        <div className="ai-model-parent">
          <div className="ai-model-img-div">
            <img className="ai-model-img" src={img2} alt="" />
          </div>
          <div className="ai-model-text-div">
            <h3>50K+</h3>
            <p>Data Scientists</p>
          </div>
        </div>
        <div>
          <p className="devider"></p>
        </div>
        <div className="ai-model-parent">
          <div className="ai-model-img-div">
            <img className="ai-model-img" src={img3} alt="" />
          </div>
          <div className="ai-model-text-div">
            <h3>100K+</h3>
            <p>AI Challenges hosted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDownSide;
