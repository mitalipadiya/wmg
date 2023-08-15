import Input from "./Input";
import Result from "./Result";
import Select from "./Select";
import "./Result.css";
import "./Table.css";
import axios from 'axios';
import { useEffect, useState } from "react";

const Table = ({ addEntry, tableData }) => {

  const [country, setCountry] = useState("India");
  const [sector, setSector] = useState("");
  const [subSector, setSubSector] = useState("");
  const [cost, setCost] = useState("");
  const [emission, setEmission] = useState("");
  const [sectors, setSectors] = useState(["A", "B"]);
  const [subSectors, setSubSectors] = useState(["a", "b"]);
  const [countries, setCountries] = useState(["India", "US"]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(data => {
      console.log(data);
    });
  }, []);

  const reset = () => {
    setCountry("India");
    setSector("");
    setSubSector("");
    setCost("");;
    setEmission("");
  }

  const add = () => {
    addEntry(country, sector, subSector, cost, emission);
    reset();
  }
  return (
    <div>
      <h3>TABULAR VIEW</h3>
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
                <td className="table-data" ><Select values={
                  countries.map((getcountry) => (
                    <option key={getcountry.id}>{getcountry}</option>
                  ))
                }
                  value={data.country} onChange={(event) => setCountry(event.target.value)} /></td>
                <td className="table-data"><Select values={sectors} value={data.sector} onChange={(event) => setSector(event.target.value)} /></td>
                <td className="table-data"><Select values={subSectors} value={data.subSector} onChange={(event) => setSubSector(event.target.value)} /></td>
                <td className="table-data"><Input value={data.cost} onChange={(event) => setCost(event.target.value)} /></td>
                <td className="table-data">
                  <div className="emission-data">
                    <Result value={data.emission} onChange={(event) => setEmission(event.target.value)} /> <img className="trash-img" />
                  </div>
                </td>
              </tr>
            }) : null
          }
          <tr>
            <td className="table-data" ><Select values={countries} value={country} onChange={(event) => setCountry(event.target.value)} /></td>
            <td className="table-data"><Select values={sectors} value={sector} onChange={(event) => setSector(event.target.value)} /></td>
            <td className="table-data"><Select values={subSectors} value={subSector} onChange={(event) => setSubSector(event.target.value)} /></td>
            <td className="table-data"><Input value={cost} onChange={(event) => setCost(event.target.value)} /></td>
            <td className="table-data">
              <div className="emission-data">
                <Result value={emission} onChange={(event) => setEmission(event.target.value)} /> <img className="trash-img" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="finalresult-line">
        <p className="add-entry" onClick={add}><img className="add-img" />Add entry</p>
        <div className="final-calculatedvalue">
          <p>Total embodied emissions</p>
          <Result className="result-value" />
        </div>
      </div>
    </div>

  );
}

export default Table;
