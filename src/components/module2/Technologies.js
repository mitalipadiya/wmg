import { useDispatch, useSelector } from "react-redux";
import CheckboxWithText from "../UI/CheckboxWithText";
import "./Technologies.css"
import { useState } from "react";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import { updateTechnologies } from "../../actions/module2";
const Technologies = () => {

    const [solarPVSelected, setSolarPVSelected] = useState(useSelector(state => state?.module2?.technologies?.solarPV));
    const [windSelected, setWindSelected] = useState(useSelector(state => state?.module2?.technologies?.wind));
    const [solarPvBessSelected, setSolarPvBessSelected] = useState(useSelector(state => state?.module2?.technologies?.solarPvBess));
    const [ledSelected, setLedSelected] = useState(useSelector(state => state?.module2?.technologies?.led));
    const [smartMetersElectricitySelected, setSmartMetersElectricitySelected] = useState(useSelector(state => state?.module2?.technologies?.smartMetersElectricity));
    const [passiveInfraredSensorSelected, setPassiveInfraredSensorSelected] = useState(useSelector(state => state?.module2?.technologies?.passiveInfraredSensor));
    const [voltageOptimisationSelected, setVoltageOptimisationSelected] = useState(useSelector(state => state?.module2?.technologies?.voltageOptimisation));
    const [biomassSelected, setBiomassSelected] = useState(useSelector(state => state?.module2?.technologies?.biomass));
    const [solarThermalSelected, setSolarThermalSelected] = useState(useSelector(state => state?.module2?.technologies?.solarThermal));
    const [industrialHeatPumpSelected, setIndustrialHeatPumpSelected] = useState(useSelector(state => state?.module2?.technologies?.industrialHeatPump));
    const [smartMetersGasSelected, setSmartMetersGasSelected] = useState(useSelector(state => state?.module2?.technologies?.smartMetersGas));
    const [energyManagementSystemSelected, setEnergyManagementSystemSelected] = useState(useSelector(state => state?.module2?.technologies?.energyManagementSystem));
    const [chpSelected, setChpSelected] = useState(useSelector(state => state?.module2?.technologies?.chp));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSave = () =>{
        dispatch(updateTechnologies({
            solarPV: solarPVSelected,
            wind: windSelected,
            solarPvBess: solarPvBessSelected,
            led: ledSelected,
            smartMetersElectricity: smartMetersElectricitySelected,
            passiveInfraredSensor: passiveInfraredSensorSelected,
            voltageOptimisation: voltageOptimisationSelected,
            biomass: biomassSelected,
            solarThermal: solarThermalSelected,
            industrialHeatPump: industrialHeatPumpSelected,
            smartMetersGas: smartMetersGasSelected,
            energyManagementSystem: energyManagementSystemSelected,
            chp: chpSelected,
            isComplete: true
        }))
        navigate("./../economic-parameters")
    }

    return <div>
        <h2 className="form-heading">Select low carbon technology options</h2>
        <h3 className="form-subheading">Click the boxes for the technologies you wish to implement at your facility.</h3>
        <div className="all-list">
            <div className="technologies-list">
                <h4>Electricity related options</h4>
                <div className="checkbox-div">
                    <CheckboxWithText text="Solar photovoltaics (PV)" value={solarPVSelected} onChange={(event) => { setSolarPVSelected(prev => !prev) }} />
                    <CheckboxWithText text="Wind" value={windSelected} onChange={(event) => { setWindSelected(prev => !prev) }} />
                    <CheckboxWithText text="Solar photovoltaics (PV) & battery energy storage system (BESS)" value={solarPvBessSelected} onChange={(event) => { setSolarPvBessSelected(prev => !prev) }} />
                    <CheckboxWithText text="Light emitting diode (LED)" value={ledSelected} onChange={(event) => { setLedSelected(prev => !prev) }} />
                    <CheckboxWithText text="Smart meters for electricity" value={smartMetersElectricitySelected} onChange={(event) => { setSmartMetersElectricitySelected(prev => !prev) }} />
                    <CheckboxWithText text="Passive infrared sensors" value={passiveInfraredSensorSelected} onChange={(event) => { setPassiveInfraredSensorSelected(prev => !prev) }} />
                    <CheckboxWithText text="Voltage optimisation" value={voltageOptimisationSelected} onChange={(event) => { setVoltageOptimisationSelected(prev => !prev) }} />
                </div>
            </div>
            <div className="technologies-list">
                <h4>Heat related option</h4>
                <div className="checkbox-div">
                    <CheckboxWithText text="Biomass for heating" value={biomassSelected} onChange={(event) => { setBiomassSelected(prev => !prev) }} />
                    <CheckboxWithText text="Solar thermal" value={solarThermalSelected} onChange={(event) => { setSolarThermalSelected(prev => !prev) }} />
                    <CheckboxWithText text="Industrial heat pump" value={industrialHeatPumpSelected} onChange={(event) => { setIndustrialHeatPumpSelected(prev => !prev) }} />
                    <CheckboxWithText text="Smart meter for gas" value={smartMetersGasSelected} onChange={(event) => { setSmartMetersGasSelected(prev => !prev) }} />
                </div>

            </div>
            <div className="technologies-list">
                <h4>Combined</h4>
                <div className="checkbox-div">
                    <CheckboxWithText text="Building energy management system for electricity & gas" value={energyManagementSystemSelected} onChange={(event) => { setEnergyManagementSystemSelected(prev => !prev) }} />
                    <CheckboxWithText text="Combined heat and power (CHP)" value={chpSelected} onChange={(event) => { setChpSelected(prev => !prev) }} />
                </div>
            </div>
        </div>
        <div className="btn-div">
            <Button value="Next" onClick={onSave} />
        </div>
    </div>
}
export default Technologies;