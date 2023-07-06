import React from "react";
import "./InputWithSideText.css";
import Input from "./Input";

const InputWithSideText = (props) => {
  return (
    <div className="input-main">
      <h3 className="input-heading">
        {props.heading}
      </h3>
      <p className="input-para">
        {props.subHeading}
      </p>
      <div className="image_input">
        <p>{props.unit}</p>
        <Input
          value={props.value}
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default InputWithSideText;




