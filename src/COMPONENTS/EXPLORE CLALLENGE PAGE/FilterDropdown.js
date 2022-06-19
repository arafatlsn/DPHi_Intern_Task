import React from "react";
import "./FilterDropdown.css";
import { IoIosArrowDown } from "react-icons/io";

const FilterDropdown = () => {
  return (
    <div className="filter-container">
      <div className="filter-heading">
        <span className="filter-text">Filter</span>
        <span className="arrow-symbol">
          <IoIosArrowDown />
        </span>
      </div>
      <div className="filter-categories-container">
        <div>
          <hr />
        </div>
        <div className="filter-categories">
          <div className="status-heading">
            <span>Status</span>
          </div>
          <div className="all-status">
            <div className="each-option-div">
              <input type="checkbox" name="all" id="all" />{" "}
              <label htmlFor="all">All</label>
            </div>
            <div className="each-option-div">
              <input type="checkbox" name="active" id="active" />{" "}
              <label htmlFor="active">Active</label>
            </div>
            <div className="each-option-div">
              <input type="checkbox" name="upcoming" id="upcoming" />{" "}
              <label htmlFor="upcoming">Upcoming</label>
            </div>
            <div className="each-option-div">
              <input type="checkbox" name="ended" id="ended" />{" "}
              <label htmlFor="ended">Ended</label>
            </div>
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div className="filter-categories">
          <div className="status-heading">
            <span>Level</span>
          </div>
          <div className="all-status">
            <div className="each-option-div">
              <input type="checkbox" name="easy" id="easy" />{" "}
              <label htmlFor="easy">Easy</label>
            </div>
            <div className="each-option-div">
              <input type="checkbox" name="medium" id="medium" />{" "}
              <label htmlFor="medium">Medium</label>
            </div>
            <div className="each-option-div">
              <input type="checkbox" name="hard" id="hard" />{" "}
              <label htmlFor="hard">Hard</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;
