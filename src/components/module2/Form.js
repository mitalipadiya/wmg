import InputWithSideText from "../UI/InputWithSideText";
import "./Form.css";

const Form = ({ data }) => {
    return <div>
        <h2>{data?.title}</h2>
        <h3>{data?.subTitle}</h3>
        <div className="main">
            <div className="form-input">
                {data?.inputs.length ?
                    <>{data?.inputs.map(input => {
                        return <InputWithSideText />
                    })}</>
                    : null}
            </div>
            <div className="calculated-main">
                {data?.calculated.length ? <>
                    {data?.inputs.map(input => {
                        return <div></div>
                    })}
                </> : null}
            </div>

        </div>
    </div>
}
export default Form;