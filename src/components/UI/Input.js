import "./Input.css";
const Input = (props) => {
  return (
    <input
      className={`input ${props.className}`}
      value={props.value}
      type={props.type}
      style={props.style}
      placeholder={props.placeholder}
      onChange={props.onChange}
      disabled={props.disabled}
    ></input>
  );
};
export default Input;
