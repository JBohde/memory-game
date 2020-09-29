import React from 'react';
import './Jumbotron.css';

const Jumbotron = () => (
  <div className='jumbotron'>
    <div className='banner'>
      <h1 className='title'>MEMORY GAME</h1>
      <p className='rules'>
        Click an image below to earn points, but don't click on any more than
        once!
      </p>
    </div>
  </div>
);

export default Jumbotron;
