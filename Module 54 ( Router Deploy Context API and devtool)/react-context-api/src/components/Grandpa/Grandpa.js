import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const ringContext = createContext("ring");

const Grandpa = () => {
  const [house, setHouse] = useState(0);

  const addItem = () => {
    setHouse(house + 1);
  };

  return (
    <ringContext.Provider value={`Item is ----- ${house}`}>
      <div>
        <button onClick={addItem}>Add item</button>
        <div className="grandpa">
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </div>
      </div>
    </ringContext.Provider>
  );
};
export default Grandpa;
