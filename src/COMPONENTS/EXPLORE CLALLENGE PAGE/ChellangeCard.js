import React, { useState } from "react";
import "./ChellangeCard.css";
import checkImg from '../../Assets/Icons/Group.png'

const ChellangeCard = ({ el }) => {
  const { id, name, img, level, description, start, end } = el;

  const [days, setDaysTime] = useState(0);
  const [hours, setHoursTime] = useState(0);
  const [minutes, setMinutesTime] = useState(0);
  const [status, setStatus] = useState("");

  let interval;

  const startTimer = () => {
    const startCountDown = new Date(start).getTime();
    const endCountDown = new Date(end).getTime();
    const now = new Date().getTime();
    const startDistance = startCountDown - now;
    const endDistance = endCountDown - now;

    console.log(endDistance);

    interval = setInterval(() => {
      let distance;

      if (startDistance >= 0) {
        distance = startDistance;
      } else if (endDistance >= 0) {
        distance = endDistance;
      } else {
        distance = startDistance;
      }

      console.log(distance);

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      if (startDistance <= 0) {
        if (endDistance <= 0) {
          clearInterval(interval?.current);
          setStatus("Ended");
        } else {
          setDaysTime(days);
          setHoursTime(hours);
          setMinutesTime(minutes);
          setStatus("Active");
        }
      } else {
        setDaysTime(days);
        setHoursTime(hours);
        setMinutesTime(minutes);
        setStatus("Upcoming");
      }
    }, 1500);
  };

  startTimer();

  let bg;

  if (status === "Active") {
    bg = "rgba(68, 146, 76, 0.24)";
  } else if (status === "Upcoming") {
    bg = "rgba(242, 201, 76, 0.25)";
  } else {
    bg = "rgba(255, 60, 0, 0.170148)";
  }

  let countdown;

  if (status === "Active") {
    countdown = "Ends in";
  } else if (status === "Upcoming") {
    countdown = "Starts in";
  } else{
    countdown = "Ended on";
  }

  return (
    <div className="card-parent">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="card-text-div">
        <div className="status-button-container">
          <button
            className="status-button"
            style={{ backgroundColor: `${bg}` }}
          >
            {status}
          </button>
        </div>
        <h3>{name}</h3>
        <div className="countdown-div">
          <p>{countdown}</p>
          {
            minutes ? <h3>
            <span>{days}</span> : <span>{hours}</span> : <span>{minutes}</span>{" "}
          </h3> : <h3>{end.split('G')[0]}</h3>
          }
        </div>
        <div className="participate-now-div">
          <button> <img src={checkImg} alt="" /> Participate Now</button>
        </div>
      </div>
    </div>
  );
};

export default ChellangeCard;
