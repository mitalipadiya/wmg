import Input from "./Input";
import Result from "./Result";
import Select from "./Select";
import"./Result.css";
import"./Table.css";

const Table = () => {
  return (
    <table className="forms-table">
      <thead>
        <tr>
          <th className="table-heading ">Country</th>
          <th className="table-heading ">Sector</th>
          <th className="table-heading ">Sub sector</th>
          <th className="table-heading ">Cost</th>
          <th className="table-heading ">Embodied emissions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Select/></td>
          <td><Select/></td>
          <td><Select/></td>
          <td><Input/></td>
          <td><Result/></td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
