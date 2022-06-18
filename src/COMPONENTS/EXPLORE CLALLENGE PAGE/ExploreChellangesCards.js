import React from "react";
import ChellangeCard from "./ChellangeCard";
import useData from "../../Hooks/useData";
import "./ExploreChellangesCards.css";

const ExploreChellangesCards = () => {
  const allChallenges = useData();
  console.log(allChallenges);

  return (
    <div className="challenges-card-container">
      <div className="challenges-card-parent">
        {allChallenges.map((el) => (
          <ChellangeCard el={el}></ChellangeCard>
        ))}
      </div>
    </div>
  );
};

export default ExploreChellangesCards;
