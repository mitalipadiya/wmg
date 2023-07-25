import React from 'react';
import Navigation from './Navigation';
import "./Module2.css";
import { Outlet } from 'react-router-dom';
import BarChartGoogle from '../UI/BarChartGoogle';
import ColumnChartGoogle from '../UI/ColumnChartGoogle';
import TimelineChart from '../UI/TimelineChart';

function Module2() {


  return (
    <div className='parent-div'>
      {/* <Navigation />
      <div className='content-div'>
          <Outlet/>
      </div> */}
      {/* <BarChartGoogle/> */}
      <ColumnChartGoogle/>
      {/* <TimelineChart/> */}
    </div>
  );
}

export default Module2;
