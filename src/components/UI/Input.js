import "./Input.css";
const Input = (props) => {
  return (
    <input
      className="input"
      value={props.value}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      disabled={props.disabled}
    ></input>
  );
};
export default Input;
