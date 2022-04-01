import React, { useContext } from "react";
import { ringContext } from "../Grandpa/Grandpa";

const Special = () => {
  const [house, addItem, setHouse] = useContext(ringContext);
  return (
    <div>
      <h1>Special</h1>
      <p>{house}</p>
      <button onClick={addItem}>ADD Item</button>
      <button onClick={() => setHouse(house + 1)}>ADD Item 2</button>
    </div>
  );
};

export default Special;
