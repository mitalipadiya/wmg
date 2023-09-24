import React from "react";
import "./CalculatedData.css";
import { formatValueWithTwoDecimals } from "../../services/module2.service";

const CalculatedData = ({ heading, value, unit, decimalCount, isStart}) => {
  return (
    <div>
      {value ? <p className="calculated-value">{isStart ? unit : ""}{!isNaN(decimalCount) ? formatValueWithTwoDecimals(value, decimalCount) : formatValueWithTwoDecimals(value)} {!isStart ? unit : ""}</p> : <p className="pending-info">Pending Information</p>}
      <p className="calculation-heading">{heading}</p>
    </div>
  );
};

export default CalculatedData;
