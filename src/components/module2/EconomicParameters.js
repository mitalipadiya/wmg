import { useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateEconomicParameters } from "../../actions/module2";
import Button from "../UI/Button";

const EconomicParameters = () => {
    const { economicParameters, baseline } = useSelector(state => state.module2);
    const [unitPriceOfElectricity, setUnitPriceOfElectricity] = useState(economicParameters?.unitPriceOfElectricity);
    const [unitPriceOfGas, setUnitPriceOfGas] = useState(economicParameters?.unitPriceOfGas);
    const [yearsOfAbatement, setYearsOfAbatement] = useState(economicParameters?.yearsOfAbatement);
    const [discountRate, setDiscountRate] = useState(economicParameters.discountRate);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSave = () => {
        dispatch(updateEconomicParameters({
            unitPriceOfElectricity: unitPriceOfElectricity,
            unitPriceOfGas: unitPriceOfGas,
            yearsOfAbatement: yearsOfAbatement,
            discountRate: discountRate
        }));
        navigate("./../solar-pv")

    }

    return (

        <>
            <h2 className="form-heading">Economic parameters</h2>
            <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
            <div className="main">
                <div className="form-div">

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
                            <CalculatedData heading="Annual operational cost of electricity" unit="£" value={baseline?.averageAnnualElectricityConsumption * unitPriceOfElectricity} />
                            <CalculatedData heading="Annual operational cost of heat" unit="£" value={unitPriceOfGas * baseline?.averageAnnualGasConsumption} />
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
export default EconomicParameters;
