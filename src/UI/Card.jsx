/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card" onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Card;
