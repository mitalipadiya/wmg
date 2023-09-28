import './Button.css';
const Button = (props) => {
    return (
        <button className="btn" disabled={props.disabled} onClick={props.onClick}>{props.value}</button>
    )
}
export default Button;