import InputWithSideText from "../UI/InputWithSideText";
import "./Form.css";

const Form = ({ data }) => {
  // console.log(data); //  console.log here to log the 'data' prop

  return (
    <div>
      <h2>{data?.title}</h2>
      <h3>{data?.subTitle}</h3>
      <div className="main">
        <div className="form-input">
          {data?.data?.length ? (
            <>
              {
                data?.data.map((group, index) => {
                  {
                    return group.data.inputs.length ? group?.data?.inputs.map((input, index) => {
                      return <InputWithSideText value={input.value}
                        unit={input.unit}
                        type="number"
                        placeholder="Enter value"
                        heading={input.heading}
                        subHeading={input.subHeading} />;
                    }) : null
                  }
                })
              }

            </>
          ) : null}
        </div>
        <div className="calculated-main">
          {/* {data?.calculated.length ? (
            <>
              {data?.inputs.map((input) => {
                return <div></div>;
              })}
            </>
          ) : null} */}
          <h3 className="survey-para-2">Pending information</h3>
          <p className="survey-heading-3">Annual operational emissions for grid electricity</p>
          <h3 className="survey-para-2">Pending information</h3>
          <p className="survey-heading-3">Annual operational emissions for grid gas</p>
          <h3 className="survey-para-2">Pending information</h3>
          <p className="survey-heading-3">Total baseline emissions</p>
        </div>
      </div>
    </div>
  );
};
export default Form;
