import React from "react";
import "./InputWithSideText.css";
import Input from "./Input";

const InputWithSideText = (props) => {
  return (
    <div>
      <h3 className="survey-heading-3">
        {props.heading}
      </h3>
      <p className="survey-para-2">
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




