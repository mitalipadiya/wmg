import "./Navigation.css";
const Navigation = () => {
    return <div className="c-nav">
        <div className="inner-box">
            <div>
                <div className="c-nav-item current-item">GENERAL</div>
                <div className="c-nav-item c-nav-subitem current-subitem">Baseline</div>
                <div className="c-nav-item c-nav-subitem">Technologies</div>
                <div className="c-nav-item c-nav-subitem">Economic parameters</div>
            </div>
            <hr />
            <div className="c-nav-item">SYSTEM SIZE & CAPITAL COST</div>
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