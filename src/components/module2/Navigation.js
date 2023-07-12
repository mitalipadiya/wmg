import { useNavigate } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
    const navigate = useNavigate();
    return <div className="c-nav">
        <div className="inner-box">
            <div>
                <div className="c-nav-item current-item">GENERAL</div>
                <div className="c-nav-item c-nav-subitem current-subitem" onClick={() => { navigate("./baseline") }}>Baseline</div>
                <div className="c-nav-item c-nav-subitem" onClick={() => { navigate("./baseline") }}>Technologies</div>
                <div className="c-nav-item c-nav-subitem" onClick={() => { navigate("./economic-parameters") }}>Economic parameters</div>
            </div>
            <hr />
            <div>
                <div className="c-nav-item">SYSTEM SIZE & CAPITAL COST</div>
                <div className="c-nav-item c-nav-subitem current-subitem" onClick={() => { navigate("./baseline") }}>Solar PV</div>
                <div className="c-nav-item c-nav-subitem" onClick={() => { navigate("./baseline") }}>Wind</div>
                <div className="c-nav-item c-nav-subitem" onClick={() => { navigate("./economic-parameters") }}>Solar PV+BESS</div>
                <div className="c-nav-item c-nav-subitem" onClick={() => { navigate("./economic-parameters") }}>Biomass</div>
                <div className="c-nav-item c-nav-subitem" onClick={() => { navigate("./economic-parameters") }}>CHP</div>
                <div className="c-nav-item c-nav-subitem" onClick={() => { navigate("./economic-parameters") }}>LED</div>
                <div className="c-nav-item c-nav-subitem" onClick={() => { navigate("./economic-parameters") }}>Passive infrared sensor</div>
                <div className="c-nav-item c-nav-subitem" onClick={() => { navigate("./economic-parameters") }}>Smart meters - electricity</div>
                <div className="c-nav-item c-nav-subitem" onClick={() => { navigate("./economic-parameters") }}>Smart meters - gas</div>
                <div className="c-nav-item c-nav-subitem" onClick={() => { navigate("./economic-parameters") }}>Voltage optimisation</div>
                <div className="c-nav-item c-nav-subitem" onClick={() => { navigate("./economic-parameters") }}>Energy management system</div>


            </div>

            <hr />
            <div className="c-nav-item">SYSTEM SIZE & CAPITAL COST</div>
            <hr />
            <div className="c-nav-item">BASELINE CONSUMPTION</div>
            <hr />
            <div className="c-nav-item">EMISSION SAVINGS</div>
            <hr />
            <div className="c-nav-item">MARGINAL ABATEMENT COST CURVE (MACC)</div>
            <hr />
        </div>

    </div>
}
export default Navigation;