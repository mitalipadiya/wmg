import React from 'react';
import Navigation from './Navigation';
import "./Module2.css";
import Baseline from './Baseline';
import { useSelector } from 'react-redux';

function Module2() {

  const { data } = useSelector(state => state.module2);

  return (
    <div className='parent-div'>
      <Navigation />
      <div className='content-div'>
        <Baseline data = {data?.baseline}/>
      </div>
    </div>
  );
}

export default Module2;
