import React, {useState} from "react";
import "./BannerUpSide.css";
import rocketImg from "../../Assets/Icons/PicsArt_04-14-04.42 1.png";

const BannerUpSide = () => {
  const [daysTime, setDaysTime] = useState(0);
  const [hoursTime, setHoursTime] = useState(0);
  const [minutesTime, setMinutesTime] = useState(0);

  let interval;

  const startTimer = () => {
    const countDown = new Date("June 20, 22 20:17:40 GMT+5:30").getTime();
    const now = new Date().getTime();
    const distance = countDown - now;

    interval = setInterval(() => {
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      if (distance <= 0) {
        clearInterval(interval?.current);
      } else {
        setDaysTime(days);
        setHoursTime(hours);
        setMinutesTime(minutes);
      }
    }, 1000);
  };

  startTimer();

  // console.log(daysTime, hoursTime, minutesTime);
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
          <button className="chlng-button">Create Challenge</button>
        </div>
      </div>
      <div>
        <img className="rocket-img" src={rocketImg} alt="" />
      </div>
    </div>
  );
};

export default BannerUpSide;
