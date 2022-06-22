import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useData from "../../Hooks/useData";
import { FiClock } from "react-icons/fi";
import { BsReception2, BsReception3, BsReception4 } from "react-icons/bs";
import "./ParticipateNow.css";

const ParticipateNow = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState({});
  const { start, name, description, level } = challenge;

  const { dataArr } = useData();
  useEffect(() => {
    const findChallenge = dataArr.find((el) => el.id === Number(id));
    setChallenge(findChallenge);
  }, [id]);
  console.log(challenge);

  let levelStatus;
  if (level === "Easy") {
    levelStatus = <BsReception2 />;
  }
  if (level === "Medium") {
    levelStatus = <BsReception3 />;
  }
  if (level === "Hard") {
    levelStatus = <BsReception4 />;
  }

  return (
    <div className="participate-chellange-container">
      <div className="participate-parent-bg">
        <div className="participate-chellange-parent">
          <div className="start-time-div">
            <p>
              <span className="clock-icon">
                <FiClock />
              </span>{" "}
              Starts on {start} (India Standard Time)
            </p>
          </div>
          <div className="heading-div">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
          <div className="level-div">
            <p>
              <span>{levelStatus}</span> {level}
            </p>
          </div>
        </div>
      </div>
      <div className="overview-container">
        <div className="overview-div">
          <div className="overview-text">
            <p>Overview</p>
          </div>
          <div className="edit-div">
            <Link to={`/challenge-details/${id}`}><button className="edit-button">Edit</button></Link>
            <button className="delete-button">Delete</button>
          </div>
        </div>
      </div>
      <div className="text">
        <p>
          Butterflies are the adult flying stage of certain insects belonging to
          an order or group called Lepidoptera. The word "Lepidoptera" means
          "scaly wings" in Greek. This name perfectly suits the insects in this
          group because their wings are covered with thousands of tiny scales
          overlapping in rows.
        </p>
        <p>
          An agency of the Governmental Wildlife Conservation is planning to
          implement an automated system based on computer vision so that it can
          identify butterflies based on captured images. As a consultant for
          this project, you are responsible for developing an efficient model.
        </p>
        <p>
          Your Task is to build an Image Classification Model using CNN that
          classifies to which class of weather each image belongs to.
        </p>
      </div>
    </div>
  );
};

export default ParticipateNow;
