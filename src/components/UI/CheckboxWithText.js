import React, { useState } from 'react';
import "./CheckboxWithText.css";

const CheckboxWithText = ({ text, onChange, value }) => {

  return (
    <label className='checkbox-label'>
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      {text}
    </label>
  );
};

export default CheckboxWithText;
