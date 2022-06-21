import React, { useContext } from "react";
import "./ChellangeCard.css";
import checkImg from "../../Assets/Icons/Group.png";
import useStatus from "../../Hooks/useStatus";

const ChellangeCard = ({ el, filter }) => {
  const { id, name, img, level, description, start, end } = el;

  const { status, days, hours, minutes } = useStatus(start, end, el);

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
  } else {
    countdown = "Ended on";
  }

  for (let i = 0; i < filter.length; i++) {
    if (filter[i] === status || filter[i] === level) {
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
              {minutes ? (
                <h3>
                  <span>{days}</span> : <span>{hours}</span> :{" "}
                  <span>{minutes}</span>{" "}
                </h3>
              ) : (
                <h3>{end.split("G")[0]}</h3>
              )}
            </div>
            <div className="participate-now-div">
              <button>
                {" "}
                <img src={checkImg} alt="" /> Participate Now
              </button>
            </div>
          </div>
        </div>
      );
    } 
  }

  if(!filter.length) {
    return <div className="card-parent">
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
          {minutes ? (
            <h3>
              <span>{days}</span> : <span>{hours}</span> :{" "}
              <span>{minutes}</span>{" "}
            </h3>
          ) : (
            <h3>{end.split("G")[0]}</h3>
          )}
        </div>
        <div className="participate-now-div">
          <button>
            {" "}
            <img src={checkImg} alt="" /> Participate Now
          </button>
        </div>
      </div>
    </div>;
  }
};

export default ChellangeCard;
