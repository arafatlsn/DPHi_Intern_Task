import React from "react";
import "./BannerUpSide.css";
import rocketImg from "../../Assets/Icons/PicsArt_04-14-04.42 1.png";
import { Link } from "react-router-dom";

const BannerUpSide = () => {

  setTimeout(()=> {
    document.getElementById('animate-rocket').classList.add('animate__shakeX')
  }, 3100)
  setTimeout(()=> {
    document.getElementById('animate-rocket').classList.remove('animate__shakeX')
  }, 3400)
  setTimeout(()=> {
    document.getElementById('animate-rocket').classList.add('animate__fadeOutUpBig')
  }, 3400)
  setTimeout(()=> {
    document.getElementById('animate-rocket').classList.remove('animate__fadeOutUpBig')
  }, 5500)
  setTimeout(()=> {
    document.getElementById('animate-rocket').classList.add('animate__fadeInUpBig',  'animate__slower')
  }, 5500)
  
  setInterval(() => {
    setTimeout(()=> {
      document.getElementById('animate-rocket').classList.remove('animate__slower')
    })
    setTimeout(()=> {
      document.getElementById('animate-rocket').classList.add('animate__fadeOutUpBig', 'animate__faster')
    })
    setTimeout(()=> {
      document.getElementById('animate-rocket').classList.remove('animate__fadeOutUpBig', 'animate__fast')
    }, 2500)
    setTimeout(()=> {
      document.getElementById('animate-rocket').classList.add('animate__fadeInUpBig',  'animate__slower')
    }, 2500)
  }, 30000)
  
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
          <Link to={'create-challenge'}><button className="chlng-button animate__animated animate__flipInX animate__slow">Create Challenge</button></Link>
        </div>
      </div>
      <div id="animate-rocket" className="animate__animated">
        <img className="rocket-img" src={rocketImg} alt="" />
      </div>
    </div>
  );
};

export default BannerUpSide;


