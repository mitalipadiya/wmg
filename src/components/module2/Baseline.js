import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateBaseline } from "../../actions/module2";
import { useNavigate } from "react-router-dom";
import { round } from "../../services/module2.service";

const Baseline = () => {
    const { baseline } = useSelector(state => state.module2);

    const [averageAnnualElectricityConsumption, setAverageAnnualElectricityConsumption] = useState(baseline?.averageAnnualElectricityConsumption);
    const [averageAnnualGasConsumption, setAverageAnnualGasConsumption] = useState(baseline?.averageAnnualGasConsumption);
    const [emissionFactorGridElectricity, setEmssionFactorGridElectricity] = useState(baseline?.emissionFactorGridElectricity);
    const [emissionFactorForGridGas, setEmissionFactorForGridGas] = useState(baseline?.emissionFactorForGridGas);
    const [annualOperationalEmissionsForGridElectricity, setAnnualOperationalEmissionsForGridElectricity] = useState(baseline?.annualOperationalEmissionsForGridElectricity);
    const [annualOperationalEmissionsForGridGas, setAnnualOperationalEmissionsForGridGas] = useState(baseline?.annualOperationalEmissionsForGridGas);
    const [totalBaselineEmissions, setTotalBaselineEmissions] = useState(baseline?.totalBaselineEmissions);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSave = () => {
        dispatch(updateBaseline({
            averageAnnualElectricityConsumption,
            averageAnnualGasConsumption,
            emissionFactorGridElectricity,
            emissionFactorForGridGas,
            annualOperationalEmissionsForGridElectricity,
            annualOperationalEmissionsForGridGas,
            totalBaselineEmissions,
            isComplete: true
        }));

        navigate("./../economic-parameters")

    }
    useEffect(() => {
        setAnnualOperationalEmissionsForGridElectricity(round(averageAnnualElectricityConsumption * emissionFactorGridElectricity, 2));
    }, [averageAnnualElectricityConsumption, emissionFactorGridElectricity]);
    useEffect(() => {
        setAnnualOperationalEmissionsForGridGas(round(averageAnnualGasConsumption * emissionFactorForGridGas, 2));
    }, [averageAnnualGasConsumption, emissionFactorForGridGas]);
    useEffect(() => {
        setTotalBaselineEmissions(round((averageAnnualElectricityConsumption * emissionFactorGridElectricity) + (averageAnnualGasConsumption * emissionFactorForGridGas), 2));
    }, [averageAnnualElectricityConsumption, emissionFactorGridElectricity, averageAnnualGasConsumption, emissionFactorForGridGas]);

    return (
        <>
            <h2 className="form-heading">Baseline scenario</h2>
            <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
            <div className="main">
                <div className="form-div">

                    <div className="form-input">
                        <InputWithSideText value={averageAnnualElectricityConsumption}
                            unit="kWh"
                            type="number"
                            placeholder="Enter value"
                            heading="Average annual electricity consumption"
                            subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                            onChange={(event) => { setAverageAnnualElectricityConsumption(event.target.value) }} />
                        <InputWithSideText value={averageAnnualGasConsumption}
                            unit="kWh"
                            type="number"
                            placeholder="Enter value"
                            heading="Average annual gas consumption"
                            subHeading="Quis enim unde. Rerum corrupti voluptatum"
                            onChange={(event) => { setAverageAnnualGasConsumption(event.target.value) }} />
                        <InputWithSideText value={emissionFactorGridElectricity}
                            unit="kgCO2e/kWh"
                            type="number"
                            placeholder="Enter value"
                            heading="Emission factor for grid electricity"
                            subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                            onChange={(event) => { setEmssionFactorGridElectricity(event.target.value) }} />
                        <InputWithSideText value={emissionFactorForGridGas}
                            unit="kgCO2e/kWh"
                            type="number"
                            placeholder="Enter value"
                            heading="Emission factor for grid gas"
                            subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                            onChange={(event) => { setEmissionFactorForGridGas(event.target.value) }} />
                    </div>


                    <div className="calculated-main">
                        <div className="calculated-container">
                            <CalculatedData heading="Annual operational emissions for grid electricity" unit="kgCO2e" value={annualOperationalEmissionsForGridElectricity} />
                            <CalculatedData heading="Annual operational emissions for grid gas" unit="kgCO2e" value={annualOperationalEmissionsForGridGas} />
                            <CalculatedData heading="Total baseline emissions" unit="kgCO2e" value={totalBaselineEmissions} />

                        </div>
                    </div>
                </div>
                <div className="btn-div">
                    <Button value="Next" onClick={onSave} />

                </div>
            </div >
        </>

    );
};
export default Baseline;
