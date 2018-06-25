import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="col-xs-3 col-sm-3 col-md-4 col-lg-4 col-xl-4 card">
    <div className="img-container">
      <img className="img-responsive character" alt={props.name} src={props.image} id={props.id} ispicked="false" onClick={props.handleIncrement}/>
    </div>
  </div>
);

export default CharacterCard;
