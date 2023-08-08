import Input from "./Input";
import Result from "./Result";
import Select from "./Select";
import "./Result.css";
import "./Table.css";
import { useState } from "react";

const Table = () => {

  const [tableData, setTableData] = useState([]);
  const [country, setCountry] = useState("India");
  const [sector, setSector] = useState("");
  const [subSector, setSubSector] = useState("");
  const [cost, setCost] = useState("");
  const [emission, setEmission] = useState("");
  const [countries, setCountries] = useState(["India", "US"]);

  const addEntry = () => {
    const newEntry = {
      id: tableData.length + 1,
      country: country,
      sector: sector,
      subSector: subSector,
      cost: cost,
      emission: emission,
    };
    setTableData(prev => [...prev, newEntry]);
  };
  return (
    <div>
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
          {
            tableData.length > 0 ? tableData.map(data => {
              return <tr>
              <td>{data.country}</td>
              <td>{data.sector}</td>
              <td>{data.subSector}</td>
              <td>{data.cost}</td>
              <td>{data.emission}</td>
            </tr>
            }) : null
          }
          <tr>
              <td><Select values={countries} value={country} onChange={(event)=>setCountry(event.target.value)}/></td>
              <td><Select /></td>
              <td><Select /></td>
              <td><Input /></td>
              <td><Result /></td>
          </tr>
        </tbody>
      </table>
      <div className="finalresult-line">
        <p className="add-entry" onClick={addEntry}>Add entry</p>
        <div className="final-calculatedvalue">
          <p>Total embodied emissions</p>
          <Result className="result-value" />
        </div>
      </div>
    </div>

  );
}

export default Table;
