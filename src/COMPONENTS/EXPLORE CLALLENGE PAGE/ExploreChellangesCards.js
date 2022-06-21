import React, { useContext } from "react";
import ChellangeCard from "./ChellangeCard";
import useData from "../../Hooks/useData";
import "./ExploreChellangesCards.css";
import { FilterContext } from "../../App";

const ExploreChellangesCards = () => {
  const { dataArr } = useData();
  const { filter } = useContext(FilterContext)


  return (
    <div className="challenges-card-container">
      <div className="challenges-card-parent">
        {dataArr.map((el) => (
          <ChellangeCard filter={filter} el={el}></ChellangeCard>
        ))}
      </div>
    </div>
  );
};

export default ExploreChellangesCards;
