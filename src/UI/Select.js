import './Select.css';
const Select = (props) => {
    return <select className="select" name="cars" id="cars">
        <option value="" disabled selected>Select</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
    </select>
}
export default Select;