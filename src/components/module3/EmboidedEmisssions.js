import { useState } from "react";
import Result from "../UI/Result";
import Table from "../UI/Table";
import "./EmboidedEmissions.css"
const EmbodiedEmissions = () => {
    const [tableData, setTableData] = useState([
        { id: 1, col1: 'Country 1', col2: 'Sector 1', col3: 'SubSector 1', col4: 'Cost 1', col5: 'Emboided 1' },
    ]);
    const addEntry = () => {
        const newEntry = {
            id: tableData.length+1,
            col1: `Country ${tableData.length + 1}`,
            col2: `Sector ${tableData.length + 1}`,
            col3: `SubSector ${tableData.length + 1}`,
            col4: `Cost ${tableData.length + 1}`,
            col5: `Emboided ${tableData.length + 1}`,
        };
        setTableData(prev=>[...prev, newEntry]);
    };
    return <div>
        <div>
            <h2 className="form-heading">Embodied emissions calculator</h2>
            <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
            <div className="main-container-emboided">
            {/* <tr key={entry.id}> */}
                <Table className="forms-table" />
                {/* </tr> */}
                <div className="finalresult-line">
                    <p className="add-entry">Add entry</p>
                    <div className="final-calculatedvalue">
                        <p>Total embodied emissions</p>
                        <Result className="result-value" />
                    </div>
                </div>
            </div>
        </div>

    </div>
}
export default EmbodiedEmissions;