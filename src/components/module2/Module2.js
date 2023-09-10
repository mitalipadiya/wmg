import React from 'react';
import Navigation from './Navigation';
import "./Module2.css";
import { Outlet } from 'react-router-dom';

function Module2() {


  return (
    <div className='parent-div'>
      <Navigation />
      <div className='content-div'>
          <Outlet/>
      </div>
    </div>
  );
}

export default Module2;
