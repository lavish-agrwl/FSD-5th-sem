import React from "react";
import "./fashion.css";

function Fashion(props) {
  return (
    <div>
      <div className="card">
        <img src={props.image} alt="" height={100} width={100} />
        <h3>{props.name}</h3>
        <h4>Price: {props.price}</h4>
        
      </div>
    </div>
  );
}

export default Fashion;
