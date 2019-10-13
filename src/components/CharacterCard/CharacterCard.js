import React from 'react';
import './CharacterCard.css';

const CharacterCard = props => (
  <div className='col-sm-3 card'>
    <div className='img-container'>
      <img
        className='img-responsive character'
        alt={props.name}
        src={props.image}
        id={props.id}
        ispicked={props.isPicked}
        onClick={props.handleChoice}
      />
    </div>
  </div>
);

export default CharacterCard;
