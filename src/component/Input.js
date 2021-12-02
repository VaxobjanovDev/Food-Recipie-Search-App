import React from "react";
const Input = ({ setInput, input }) => {
return (
    <>
        <input
          placeholder="Search Recipie"
          onChange={(e) => setInput(e.target.value)}
        />
    </>
  );
};

export default Input;
