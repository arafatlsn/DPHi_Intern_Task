import React from "react";
import "./ExploreSearch.css";
import searchImg from "../../Assets/Icons/Vector.png";

const ExploreSearch = () => {
  return (
    <div className="explore-challenge-container">
      <div className="explore-challenge-search-parent">
        <h3 className="explore-challenge-heading">Explore Challenges</h3>
        <div>
          <div className="search-div">
            <button className="search-button">
              <img src={searchImg} alt="" />
            </button>
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSearch;
