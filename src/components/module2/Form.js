import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import "./Form.css";

const Form = ({ data }) => {
  // console.log(data); //  console.log here to log the 'data' prop

  return (
    <div>
      <h2>{data?.title}</h2>
      <h3>{data?.subTitle}</h3>
      <div className="main">

        {data?.data?.length ? (
          <>
            {
              data?.data.map((group, index) => {
                {
                  return <>
                    <div className="form-input">
                      {
                        group.data.inputs.length ? group?.data?.inputs.map((input, index) => {
                          return <InputWithSideText value={input.value}
                            unit={input.unit}
                            type="number"
                            placeholder="Enter value"
                            heading={input.heading}
                            subHeading={input.subHeading} />;
                        }) : null
                      }
                    </div>


                    <div className="calculated-main">
                      <div className="calculated-container">
                        {
                          group.data.calculated.length ?
                            group.data.calculated.map((calculated, index) => {
                              return <CalculatedData data={calculated} />
                            })

                            : null
                        }
                      </div>
                    </div>
                  </>
                }
              })
            }

          </>
        ) : null}
      </div>
    </div>

  );
};
export default Form;
