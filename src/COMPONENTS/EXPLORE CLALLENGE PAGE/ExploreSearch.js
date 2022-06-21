import React, { useState } from "react";
import "./ExploreSearch.css";
import searchImg from "../../Assets/Icons/Vector.png";
import FilterDropdown from "./FilterDropdown";
import { MdCancel } from 'react-icons/md'

const ExploreSearch = () => {
  
  const [primaryFilter, setPrimaryFilter] = useState([]);

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
              <div className="search-for-div">
                {
                  primaryFilter?.map(el => {
                    return <><p>{el} <MdCancel onClick={() => {
                      const removeOption = primaryFilter.filter(elArr => elArr !== el);
                      setPrimaryFilter(removeOption)
                    }} className="cross-button"/></p></>
                  })
                }
              </div>
            </div>
            <div className="search-filter-side">
            <FilterDropdown primaryFilter={primaryFilter} setPrimaryFilter={setPrimaryFilter}></FilterDropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSearch;
