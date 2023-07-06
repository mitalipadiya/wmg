import React from 'react';
import Navigation from './Navigation';
import "./Module2.css";
import Baseline from './Baseline';
// import CalculatedData from '../UI/CalculatedData';



function Module2() {
  return (
    <div className='parent-div'>
      <Navigation />
      <div>
        <Baseline />
      </div>
    </div>
  );
}

export default Module2;
