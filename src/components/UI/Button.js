import './Button.css';
const Button = (props) => {
    return (
        <button className={`btn ${props.className}`} disabled={props.disabled} onClick={props.onClick}>{props.value}</button>
    )
}
export default Button;