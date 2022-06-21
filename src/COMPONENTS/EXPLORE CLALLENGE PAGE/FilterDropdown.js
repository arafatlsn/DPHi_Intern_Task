import React, { useContext, useEffect, useState } from "react";
import "./FilterDropdown.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FilterContext } from "../../App";

const FilterDropdown = ({ primaryFilter, setPrimaryFilter }) => {
  const [activeDropDown, setActiveDropDown] = useState(false);

  const { setFilter } = useContext(FilterContext);

  useEffect(() => {
    setFilter(primaryFilter);
  }, [primaryFilter]);

  return (
    <div className="filter-container">
      <div
        onClick={() => setActiveDropDown(!activeDropDown)}
        className="filter-heading"
      >
        <span className="filter-text">Filter</span>
        {!activeDropDown ? (
          <span className="arrow-symbol">
            <IoIosArrowDown />
          </span>
        ) : (
          <span className="arrow-symbol">
            <IoIosArrowUp />
          </span>
        )}
      </div>
      {activeDropDown && (
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
                <input
                  onChange={(e) => {
                    if (e.target.checked) {
                      const optionArr = [
                        "Active",
                        "Upcoming",
                        "Ended",
                        "Easy",
                        "Medium",
                        "Hard",
                      ];
                      const filterOption = optionArr.filter((el) => {
                        return primaryFilter.indexOf(el) === -1;
                      });
                      const newArr = [...filterOption, ...primaryFilter];
                      setPrimaryFilter(newArr);
                    } else {
                      setPrimaryFilter([]);
                    }
                  }}
                  type="checkbox"
                  name="all"
                  id="all"
                />{" "}
                <label htmlFor="all">All</label>
              </div>
              <div className="each-option-div">
                <input
                  onChange={(e) => {
                    if (e.target.checked) {
                      const newOption = [...primaryFilter, "Active"];
                      setPrimaryFilter(newOption);
                    } else {
                      const newOption = primaryFilter.filter(
                        (el) => el !== "Active"
                      );
                      setPrimaryFilter(newOption);
                    }
                  }}
                  type="checkbox"
                  name="active"
                  id="active"
                  checked={primaryFilter.find(el => el === 'Active')}
                />{" "}
                <label htmlFor="active">Active</label>
              </div>
              <div className="each-option-div">
                <input
                  onChange={(e) => {
                    if (e.target.checked) {
                      const newOption = [...primaryFilter, "Upcoming"];
                      setPrimaryFilter(newOption);
                    } else {
                      const newOption = primaryFilter.filter(
                        (el) => el !== "Upcoming"
                      );
                      setPrimaryFilter(newOption);
                    }
                  }}
                  type="checkbox"
                  name="upcoming"
                  id="upcoming"
                  checked={primaryFilter.find(el => el === 'Upcoming')}
                />{" "}
                <label htmlFor="upcoming">Upcoming</label>
              </div>
              <div className="each-option-div">
                <input
                  onChange={(e) => {
                    if (e.target.checked) {
                      const newOption = [...primaryFilter, "Ended"];
                      setPrimaryFilter(newOption);
                    } else {
                      const newOption = primaryFilter.filter(
                        (el) => el !== "Ended"
                      );
                      setPrimaryFilter(newOption);
                    }
                  }}
                  type="checkbox"
                  name="ended"
                  id="ended"
                  checked={primaryFilter.find(el => el === 'Ended')}
                />{" "}
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
                <input
                  onChange={(e) => {
                    if (e.target.checked) {
                      const newOption = [...primaryFilter, "Easy"];
                      setPrimaryFilter(newOption);
                    } else {
                      const newOption = primaryFilter.filter(
                        (el) => el !== "Easy"
                      );
                      setPrimaryFilter(newOption);
                    }
                  }}
                  type="checkbox"
                  name="easy"
                  id="easy"
                  checked={primaryFilter.find(el => el === 'Easy')}
                />{" "}
                <label htmlFor="easy">Easy</label>
              </div>
              <div className="each-option-div">
                <input
                  onChange={(e) => {
                    if (e.target.checked) {
                      const newOption = [...primaryFilter, "Medium"];
                      setPrimaryFilter(newOption);
                    } else {
                      const newOption = primaryFilter.filter(
                        (el) => el !== "Medium"
                      );
                      setPrimaryFilter(newOption);
                    }
                  }}
                  type="checkbox"
                  name="medium"
                  id="medium"
                  checked={primaryFilter.find(el => el === 'Medium')}
                />{" "}
                <label htmlFor="medium">Medium</label>
              </div>
              <div className="each-option-div">
                <input
                  onChange={(e) => {
                    if (e.target.checked) {
                      const newOption = [...primaryFilter, "Hard"];
                      setPrimaryFilter(newOption);
                    } else {
                      const newOption = primaryFilter.filter(
                        (el) => el !== "Hard"
                      );
                      setPrimaryFilter(newOption);
                    }
                  }}
                  type="checkbox"
                  name="hard"
                  id="hard"
                  checked={primaryFilter.find(el => el === 'Hard')}
                />{" "}
                <label htmlFor="hard">Hard</label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
