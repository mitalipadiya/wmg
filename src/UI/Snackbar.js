import React, { useEffect, useState } from 'react';
import './Snackbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage } from '../actions/message';

const Snackbar = () => {
  const { message } = useSelector(state => state.message);
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (message) {
      openSnackBar(message);
    }
  }, [message]);

  const openSnackBar = () => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
      dispatch(clearMessage());
    }, 3000);
  }


  return (
    <div className={isActive ? "snackbar show" : "snackbar"}>
      {message}
    </div>
  );
}

export default Snackbar;