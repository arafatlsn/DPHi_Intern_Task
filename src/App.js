import "./App.css";
import NavBar from "./COMPONENTS/NAV BAR/NavBar";
import HomePage from "./COMPONENTS/HOME PAGE/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ParticipateNow from "./COMPONENTS/PARTCIPATE PAGE/ParticipateNow";
import ChallengeDeatils from "./COMPONENTS/Challenge Details/ChallengeDeatils";
import CreateChallenge from "./COMPONENTS/Challenge Details/CreateChallenge";

export const FilterContext = createContext();
function App() {
  const [filter, setFilter] = useState([]);
  const [allFilter, setAllFilter] = useState(true);
  return (
    <FilterContext.Provider value={{ filter, setFilter, allFilter, setAllFilter }}>
      <div style={{ fontFamily: "Poppins" }}>
        <NavBar></NavBar>
        <Routes>
          <Route path={'/'} element={<HomePage></HomePage>}/>
          <Route path={'/particpate/:id'} element={<ParticipateNow></ParticipateNow>} />
          <Route path={'/challenge-details/:id'} element={<ChallengeDeatils></ChallengeDeatils>} />
          <Route path={'/create-challenge'} element={<CreateChallenge></CreateChallenge>} />
        </Routes>
      </div>
    </FilterContext.Provider>
  );
}

export default App;
