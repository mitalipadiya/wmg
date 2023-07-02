import './Select.css';
const Select = (props) => {
    return <select className="select" onChange={props.onChange} value={props.value}>
        <option value="" disabled selected>Select</option>
        {props?.values?.length ? props.values.map((data) => {
            return <option value={data}>{data}</option>
        }) : null}
    </select>
}
export default Select;