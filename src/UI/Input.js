import './Input.css';
const Input = (props) => {
    return <input className="input" type={props.type} placeholder={props.placeholder} onChange={props.onChange}></input>
}
export default Input;