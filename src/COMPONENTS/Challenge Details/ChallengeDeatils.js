import React from "react";
import { useParams } from "react-router-dom";
import "./ChallengeDetails.css";
import calander from "../../Assets/Icons/Vector (1).png";
import { BsCardImage } from "react-icons/bs";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Form } from "react-bootstrap";

const ChallengeDeatils = () => {
  const { id } = useParams();
  return (
    <div className="challenge-details-container">
      <div className="challenge-heading-parent">
        <div className="challenge-heading">
          <p>Challenge Details</p>
        </div>
      </div>
      <div className="challenge-details-parent">
        <form className="form div">
          <div className="label-input-div">
            <label htmlFor="name">Challenge Name</label>
            <br />
            <input type="text" name="name" id="name" />
          </div>
          <div className="label-input-div">
            <label htmlFor="start">Start Date</label>
            <br />
            <input type="text" name="start" id="start" />
            <img className="calander-icon" src={calander} alt="" />
          </div>
          <div className="label-input-div">
            <label htmlFor="end">End Date</label>
            <br />
            <input type="text" name="end" id="end" />
            <img className="calander-icon" src={calander} alt="" />
          </div>
          <div className="label-input-div">
            <label htmlFor="description">Description</label>
            <br />
            <textarea
              className="text-field"
              name="description"
              id="description"
            ></textarea>
          </div>
          <div className="label-input-div">
            <label htmlFor="description">Image</label>
            <br />
            <div className="challange-img-div">
              <img src="https://i.ibb.co/RY5VCX6/Group-1000002766.png" alt="" />
              <div className="change-img-text">
                <p>
                  <BsCardImage className="img-icon" /> Change image{" "}
                  <HiOutlineArrowSmRight className="arrow-icon" />
                </p>
              </div>
            </div>
            <div className="label-input-div">
              <label htmlFor="description">Level</label>
              <Form.Select name="level" className="level-secect-div" aria-label="Default select example">
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </Form.Select>
            </div>
            <div className="save-button-div">
              <button id="save-button" type="submit">Save Changes</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChallengeDeatils;
