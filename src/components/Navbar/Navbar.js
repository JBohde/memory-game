import React from 'react';
import './Navbar.css';

const Navbar = props => (
  <nav className='navbar'>
    <div className='nav-item'>{props.message}</div>
    <div className='nav-item'>
      <p className='card-text'>
        Score: {props.currentScore} | Top Score: {props.topScore}
      </p>
    </div>
  </nav>
);

export default Navbar;
