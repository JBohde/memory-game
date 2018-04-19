import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card">
    <div className="img-container">
      <img className="img character" alt={props.name} src={props.image} id={props.id} ispicked="false" onClick={props.handleIncrement}/>
    </div>
  </div>
);

export default CharacterCard;
