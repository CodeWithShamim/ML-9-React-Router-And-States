import React, { useContext } from "react";
import { ringContext } from "../Grandpa/Grandpa";

const Special = () => {
  const ring = useContext(ringContext);
  return (
    <div>
      <h1>Special</h1>
      <p>{ring}</p>
    </div>
  );
};

export default Special;
