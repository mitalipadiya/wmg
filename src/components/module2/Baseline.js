import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";

const Baseline = ({data}) => {
    const [averageAnnualElectricityConsumption, setAverageAnnualElectricityConsumption] = useState(data?.averageAnnualElectricityConsumption);
    const [averageAnnualGasConsumption, setAverageAnnualGasConsumption] = useState(data?.averageAnnualGasConsumption);
    const [emissionFactorGridElectricity, setEmssionFactorGridElectricity] = useState(data?.emissionFactorGridElectricity);
    const [emissionFactorForGridGas, setEmissionFactorForGridGas] = useState(data?.emissionFactorForGridGas);

    return (
        <>
            <h2 className="form-heading">Baseline scenario</h2>
            <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
            <div className="main">

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
                        <CalculatedData heading="Annual operational emissions for grid electricity" unit="kgCO2e" value={averageAnnualElectricityConsumption * emissionFactorGridElectricity}/>
                        <CalculatedData heading="Annual operational emissions for grid gas" unit="kgCO2e" value={averageAnnualGasConsumption * emissionFactorForGridGas}/>
                        <CalculatedData heading="Total baseline emissions" unit="kgCO2e" value={(averageAnnualElectricityConsumption * emissionFactorGridElectricity) + (averageAnnualGasConsumption * emissionFactorForGridGas)}/>

                    </div>
                </div>

            </div >
        </>

    );
};
export default Baseline;
