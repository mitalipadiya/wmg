import React from "react";
import "./CalculatedData.css";
import { formatValueWithTwoDecimals } from "../../services/module2.service";

const CalculatedData = ({ heading, value, unit }) => {
  return (
    <div>
      {value ? <p className="calculated-value">{formatValueWithTwoDecimals(value)} {unit}</p> : <p className="pending-info">Pending Information</p>}
      <p className="calculation-heading">{heading}</p>
    </div>
  );
};

export default CalculatedData;
