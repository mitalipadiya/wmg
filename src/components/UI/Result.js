import "./Result.css"
const Result=(props)=>{
    return <div>
        <input className="result"
            value={props.value}
            // disabled={true}
            placeholder={"KgCO2"}
            >
        </input>
    </div>
}
export default Result;