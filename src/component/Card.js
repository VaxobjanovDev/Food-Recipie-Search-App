import React from "react";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="card">
        {data !== [] &&
          data.map((item) => (
            <div className="card-body">
              <img src={item.recipe.image} />
              <div className="card-content">
                <p>{item.recipe.label}</p>
                <a href={item.recipe.shareAs}>url</a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
