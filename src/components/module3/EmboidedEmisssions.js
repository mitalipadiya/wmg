import { useState } from "react";
import Result from "../UI/Result";
import Table from "../UI/Table";
import "./EmboidedEmissions.css"
const EmbodiedEmissions = () => {
    return <div>
        <div>
            <h2 className="form-heading">Embodied emissions calculator</h2>
            <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
            <div className="main-container-emboided">
            {/* <tr key={entry.id}> */}
                <Table className="forms-table" />
                {/* </tr> */}
                
            </div>
        </div>

    </div>
}
export default EmbodiedEmissions;