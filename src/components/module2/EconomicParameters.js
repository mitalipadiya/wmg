import { useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";

const EconomicParameters = () => {
    const [unitPriceOfElectricity, setUnitPriceOfElectricity] = useState();
    const [unitPriceOfGas, setUnitPriceOfGas] = useState();
    const [yearsOfAbatement, setYearsOfAbatement] = useState();
    const [discountRate, setDiscountRate] = useState();

    return (
        <>
            <h2 className="form-heading">Economic parameters</h2>
            <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
            <div className="main">

                <div className="form-input">
                    <InputWithSideText value={unitPriceOfElectricity}
                        unit="£/kWh"
                        type="number"
                        placeholder="Enter value"
                        heading="Unit price of electricity"
                        subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                        onChange={(event) => { setUnitPriceOfElectricity(event.target.value) }} />
                    <InputWithSideText value={unitPriceOfGas}
                        unit="£/kWh"
                        type="number"
                        placeholder="Enter value"
                        heading="Unit price of gas"
                        subHeading="Quis enim unde. Rerum corrupti voluptatum"
                        onChange={(event) => { setUnitPriceOfGas(event.target.value) }} />
                    <InputWithSideText value={yearsOfAbatement}
                        unit="years"
                        type="number"
                        placeholder="Enter value"
                        heading="Years of abatement"
                        subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                        onChange={(event) => { setYearsOfAbatement(event.target.value) }} />
                    <InputWithSideText value={discountRate}
                        unit="%"
                        type="number"
                        placeholder="Enter value"
                        heading="Discount rate"
                        subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                        onChange={(event) => { setDiscountRate(event.target.value) }} />
                </div>


                <div className="calculated-main">
                    <div className="calculated-container">
                        <CalculatedData heading="Annual operational cost of electricity" unit="£" value={averageAnnualElectricityConsumption * emissionFactorGridElectricity}/>
                        <CalculatedData heading="Annual operational cost of heat" unit="£" value={averageAnnualGasConsumption * emissionFactorForGridGas}/>
                    </div>
                </div>

            </div >
        </>

    );
};
export default EconomicParameters;
