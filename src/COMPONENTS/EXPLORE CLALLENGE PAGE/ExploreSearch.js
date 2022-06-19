import React from "react";
import "./ExploreSearch.css";
import searchImg from "../../Assets/Icons/Vector.png";
import FilterDropdown from "./FilterDropdown";

const ExploreSearch = () => {
  return (
    <div className="explore-challenge-container">
      <div className="explore-challenge-search-parent">
        <h3 className="explore-challenge-heading">Explore Challenges</h3>
        <div>
          <div className="search-div">
            <div className="search-field-side">
              <button className="search-button">
                <img src={searchImg} alt="" />
              </button>
              <input className="input-search-field" type="text" placeholder="Search" />
            </div>
            <div className="search-filter-side">
            <FilterDropdown></FilterDropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSearch;
