import React from "react";

const CalculatedData = ({ data }) => {
  return (
    <div>
      {data.value ? <p>{data.value} {data.unit}</p> : <p>Pending Information</p>}
      <p>{data.heading}</p>
    </div>
  );
};

export default CalculatedData;
