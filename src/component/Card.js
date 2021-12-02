import React from "react";
import { useState } from "react/cjs/react.development";
import {v4 as uuidv4} from 'uuid'
import Cards from "./Cards";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="card">
        {data !== [] &&
          data.map((item) => (
            <Cards key={uuidv4()} item={item.recipe}/>
          ))}
      </div>
    </div>
  );
};

export default Card;
