import React from "react";
import "./InputWithSideText.css";
import Input from "./Input";
import { formatValueWithTwoDecimals } from "../../services/module2.service";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";

const InputWithSideText = (props) => {
  return (
    <div className="input-main">
      <div className="tooltip-heading tooltip-input">
        <h3 className="input-heading">{props.heading}{!props.disabled ? <span className="compulsory">*</span> : null}</h3>
        {props.subHeading ? <OverlayTrigger placement="right" overlay={<Tooltip className="mytooltip">{props.subHeading}</Tooltip>}>
          <div className="heading-info">i</div>
        </OverlayTrigger> : null}
      </div>
      <div className="image_input">
        <p>{props.unit}</p>
        <Input
          value={props.toFixed ? formatValueWithTwoDecimals(props.value) : props.value}
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          disabled={props.disabled}
        />
      </div>
    </div>
  );
};

export default InputWithSideText;




