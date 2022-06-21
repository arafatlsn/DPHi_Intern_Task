import "./App.css";
import NavBar from "./COMPONENTS/NAV BAR/NavBar";
import HomePage from "./COMPONENTS/HOME PAGE/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";

export const FilterContext = createContext();
function App() {
  const [filter, setFilter] = useState([]);
  const [allFilter, setAllFilter] = useState(true);
  return (
    <FilterContext.Provider value={{ filter, setFilter, allFilter, setAllFilter }}>
      <div style={{ fontFamily: "Poppins" }}>
        <NavBar></NavBar>
        <HomePage></HomePage>
      </div>
    </FilterContext.Provider>
  );
}

export default App;
