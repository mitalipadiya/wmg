import React from "react";
import "./InputWithSideText.css";
import Select from "./Select";

const InputWithSelect = (props) => {
  return (
    <div className="input-main">
      <h3 className="input-heading">
        {props.heading}
      </h3>
      <p className="input-para">
        {props.subHeading}
      </p>
        <Select
          value={props.value}
          values={props.values}
          onChange={props.onChange}
        />
    </div>
  );
};

export default InputWithSelect;




