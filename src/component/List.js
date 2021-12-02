import React from "react";
import { v4 as uuidv4 } from "uuid";
const List = ({ ingridients }) => {
  return (
    <>
      <ul className="items" key={uuidv4()}>
        {ingridients.map((item) => (
          <li key={uuidv4()}>{item.text}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
