import React from "react";
import "./CalculatedData.css";

const CalculatedData = ({ heading, value, unit }) => {
  return (
    <div>
      {value ? <p className="calculated-value">{value} {unit}</p> : <p className="pending-info">Pending Information</p>}
      <p className="calculation-heading">{heading}</p>
    </div>
  );
};

export default CalculatedData;
