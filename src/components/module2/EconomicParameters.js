import { useEffect, useState } from "react";
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
    const [annualOperationalCostOfElectricity, setAnnualOperationalCostOfElectricity] = useState(economicParameters?.annualOperationalCostOfElectricity);
    const [annualOperationalCostOfHeat, setAnnualOperationalCostOfHeat] = useState(economicParameters?.annualOperationalCostOfHeat);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        setAnnualOperationalCostOfElectricity(baseline?.averageAnnualElectricityConsumption * unitPriceOfElectricity);
    }, [unitPriceOfElectricity]);
    useEffect(() => {
        setAnnualOperationalCostOfHeat(unitPriceOfGas * baseline?.averageAnnualGasConsumption);
    }, [unitPriceOfGas]);

    const onSave = () => {
        dispatch(updateEconomicParameters({
            unitPriceOfElectricity,
            unitPriceOfGas,
            yearsOfAbatement,
            discountRate,
            annualOperationalCostOfElectricity,
            annualOperationalCostOfHeat,
            isComplete: true
        }));
        navigate("./../solar-pv")
    }

    return (

        <>
            <h2 className="form-heading">Economic parameters</h2>
            <h3 className="form-subheading">Ensure you enter the latest/most relevant values.</h3>
            <div className="main">
                <div className="form-div">

                    <div className="form-input">
                        <InputWithSideText value={unitPriceOfElectricity}
                            unit="£/kWh"
                            type="number"
                            placeholder="Enter value"
                            heading="Unit price of electricity"
                            subHeading="Get the value from your energy supplier else use default value."
                            onChange={(event) => { setUnitPriceOfElectricity(event.target.value) }} />
                        <InputWithSideText value={unitPriceOfGas}
                            unit="£/kWh"
                            type="number"
                            placeholder="Enter value"
                            heading="Unit price of gas"
                            subHeading="Get the value from your energy supplier else use default value."
                            onChange={(event) => { setUnitPriceOfGas(event.target.value) }} />
                        <InputWithSideText value={yearsOfAbatement}
                            unit="years"
                            type="number"
                            placeholder="Enter value"
                            heading="Years of abatement"
                            subHeading="Timeframe during which the profitability or the cost of the project is to be assessed."
                            onChange={(event) => { setYearsOfAbatement(event.target.value) }} />
                        <InputWithSideText value={discountRate}
                            unit="%"
                            type="number"
                            placeholder="Enter value"
                            heading="Discount rate"
                            subHeading="The discount rate is defined as the minimum level of return on investment that an organisation deems acceptable."
                            onChange={(event) => { setDiscountRate(event.target.value) }} />
                    </div>


                    <div className="calculated-main">
                        <div className="calculated-container">
                            <CalculatedData heading="Annual operational cost of electricity" unit="£" value={annualOperationalCostOfElectricity} />
                            <CalculatedData heading="Annual operational cost of heat" unit="£" value={annualOperationalCostOfHeat} />
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
