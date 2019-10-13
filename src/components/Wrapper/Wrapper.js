import React from 'react';
import './Wrapper.css';

const Wrapper = props => (
  <div className={props.shake ? 'container shake' : 'container'}>
    <div className='row'>
      {props.children}
    </div>
  </div>
);

export default Wrapper;
