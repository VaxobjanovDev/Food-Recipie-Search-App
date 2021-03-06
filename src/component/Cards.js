import React, { useState } from "react";
import List from "./List";

const Cards = ({ item }) => {
  const { image, label, url, ingredients } = item;
  const [click, setClick] = useState(false);

  return (
    <>
      <div className="card-body">
        <img src={image} alt="label" />
        <div className="card-content">
          <h4>{label.substring(0, 25)}</h4>
        </div>
        <button className="btn-blue">
          <a href={url}>More</a>
        </button>
        <button onClick={() => setClick(!click)} className="btn-pink">
          Ingridients
        </button>
        {click && <List ingridients={ingredients} />}
      </div>
    </>
  );
};

export default Cards;
