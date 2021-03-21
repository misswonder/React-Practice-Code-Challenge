import React, { Fragment } from "react";

const Sushi = ({ onClick, sushi }) => {
  return (
    <div className="sushi">
      <div className="plate" onClick={onClick}>
        {sushi.eaten ? null : <img src={sushi.img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
};

export default Sushi;
