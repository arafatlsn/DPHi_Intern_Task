import React from "react";
import "./ChallengeDetails.css";
import calander from "../../Assets/Icons/Vector (1).png";
import { Form } from "react-bootstrap";
import { MdCloudUpload } from 'react-icons/md'
import './CreateChallenge.css'

const CreateChallenge = () => {
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
            <input type="text" name="start" id="start" placeholder="Add start date" />
            <img className="calander-icon" src={calander} alt="" />
          </div>
          <div className="label-input-div">
            <label htmlFor="end">End Date</label>
            <br />
            <input type="text" name="end" id="end" placeholder="Add end date" />
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
          <div className="image-upload-div">
            <label htmlFor="description">Image</label>
            <br />
            <label className="file-upload-label" htmlFor="file-upload">
              <input type="file" name="file-upload" id="file-upload" />
              Upload <MdCloudUpload/>
            </label>
          </div>

          <div className="label-input-div">
            <label htmlFor="description">Level</label>
            <Form.Select
              name="level"
              className="level-secect-div"
              aria-label="Default select example"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </Form.Select>
          </div>

          <div className="save-button-div">
            <button id="save-button" type="submit">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateChallenge;
