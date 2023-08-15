import { useEffect, useState } from "react";
import Table from "../UI/Table";
import "./EmboidedEmissions.css"
const EmbodiedEmissions = () => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const [allTabs, setAllTabs] = useState([]);

    useEffect(()=>{
        if(allTabs.length == 0) {
            setAllTabs(prev => [...prev, []]);
        }
    },[]);

    const addEntry = (country, sector, subSector, cost, embodiedEmissions) =>{
        let newEntry = {
            country: country,
            sector: sector,
            subSector: subSector,
            cost: cost,
            embodiedEmissions: embodiedEmissions
        }
        setAllTabs(prev => {
            prev[currentTabIndex].push(newEntry);
            return [...prev];
        })
    }
    const addTab = () => {
        setCurrentTabIndex(allTabs.length);
        setAllTabs(prev => [...prev, []]);
    }

    return <div className="module3-form-main">
        <div>
            <h2 className="form-heading">Embodied emissions calculator</h2>
            <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
            <ul class="nav nav-tabs">
                {allTabs.map((ele, index) =>{
                    return <li class="nav-item">
                    <a class={`nav-link ${index == currentTabIndex ? 'active' : ''}`}>Portfolio {index + 1}</a>
                </li>
                })}
                
                <a onClick={addTab}><span className="add-tab"></span></a>
            </ul>
            <div className="main-container-emboided">
                <Table className="forms-table" addEntry={addEntry} tableData = {allTabs.length ? allTabs[currentTabIndex] : []}/>
            </div>
        </div>

    </div>
}
export default EmbodiedEmissions;