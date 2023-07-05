// import React from "react";

// const CalculatedData = (props) => {
//   return (
//     <div>
//       <h3 className="survey-para-2">Pending information</h3>
//       <p className="survey-heading-3">{props.heading}ankit</p>
//       <h3 className="survey-para-2">Pending information</h3>
//       <p className="survey-heading-3">
//         Annual operational emissions for grid gas
//       </p>
//       <h3 className="survey-para-2">Pending information</h3>
//       <p className="survey-heading-3">Total baseline emissions</p>
//     </div>
//   );
// };

// export default CalculatedData;


import React from "react";

const CalculatedData = ({ props }) => {

  const { data } = props;
  const calculatedValues = data.map((item) => item.data);

  return (
    <div>
      <h2>Calculated Data</h2>
      <ul>
        {props.map((value) => (
          <li key={value.id}>
            <p>{value.heading}</p>
            <p>{value.value}</p>
            <p>{value.unit}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalculatedData;
