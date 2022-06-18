import React from "react";
import "./WhyParticipate.css";
import img1 from "../../Assets/Icons/carbon_notebook-reference.png";
import img2 from "../../Assets/Icons/Vector (4).png";
import img3 from "../../Assets/Icons/Robot.png";
import img4 from "../../Assets/Icons/IdentificationCard.png";

const WhyParticipate = () => {
  return (
    <div className="why-participate-parent">
      <h1 className="ai-participate-heading">
        Why Participate in <span className="">AI Challenges?</span>
      </h1>
      <div className="why-participate-cards">
        <div className="why-participate-card">
          <div className="why-participate-img">
            <img src={img1} alt="" />
          </div>
          <div className="why-participate-text">
            <h5>Prove your skills</h5>
            <p>
              Gain substantial experience by solving real-world problems and pit
              against others to come up with innovative solutions.
            </p>
          </div>
        </div>
        <div className="why-participate-card">
          <div className="why-participate-img">
            <img src={img2} alt="" />
          </div>
          <div className="why-participate-text">
            <h5>Learn from community</h5>
            <p>
              One can look and analyze the solutions submitted by the other Data
              Scientists in the community and learn from them.
            </p>
          </div>
        </div>
        <div className="why-participate-card">
          <div className="why-participate-img">
            <img src={img3} alt="" />
          </div>
          <div className="why-participate-text">
            <h5>Challenge yourself</h5>
            <p>
              There is nothing for you to lose by participating in a challenge.
              You can fail safe, learn out of the entire experience and bounce
              back harder.
            </p>
          </div>
        </div>
        <div className="why-participate-card">
          <div className="why-participate-img">
            <img src={img4} alt="" />
          </div>
          <div className="why-participate-text">
            <h5>Earn recognition</h5>
            <p>
              You will stand out from the crowd if you do well in AI challenges,
              it not only helps you shine in the community but also earns
              rewards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyParticipate;
