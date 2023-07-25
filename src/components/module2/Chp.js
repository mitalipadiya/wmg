import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";

const Chp = () => {
    const { solavPV, baseline,economicParameters } = useSelector(state => state.module2);

    const [averageAnnualElectricityRequirements, setAverageAnnualElectricityRequirements] = useState(baseline?.averageAnnualElectricityConsumption);
    const [percentAnnualElectricityFromPV, setPercentAnnualElectricityFromPV] = useState(solavPV?.percentAnnualElectricityFromPV);
    const [location, setLocation] = useState(solavPV?.location);
    const [latitudeLongitude, setLatitudeLongitude] = useState(solavPV?.latitudeLongitude);
    const [electricityGeneratedPVSystem, setElectricityGeneratedPVSystem] = useState(solavPV?.electricityGeneratedPVSystem);
    const [annualElectricityGenerationSelectedLocation, setAnnualElectricityGenerationSelectedLocation] = useState(solavPV?.annualElectricityGenerationSelectedLocation);
    const [annualSolarInsolationSelectedLocation, setAnnualSolarInsolationSelectedLocation] = useState(solavPV?.annualSolarInsolationSelectedLocation);
    const [solarModuleEfficiency, setSolarModuleEfficiency] = useState(solavPV?.solarModuleEfficiency);
    const [gHGEmissionsElectricityPVSystem, setgHGEmissionsElectricityPVSystem] = useState(solavPV?.gHGEmissionsElectricityPVSystem);
    const [annualOperationalEmissionSavings, setAnnualOperationalEmissionSavings] = useState(solavPV?.annualOperationalEmissionSavings);
    const [totalOperationalEmissionSavingsAbatementPeriod, setTotalOperationalEmissionSavingsAbatementPeriod] = useState(solavPV?.totalOperationalEmissionSavingsAbatementPeriod);
    const [unitInstallationCostPVSystem, setUnitInstallationCostPVSystem] = useState(solavPV?.unitInstallationCostPVSystem);
    const [initialInvestmentPVSystem, setInitialInvestmentPVSystem] = useState(solavPV?.initialInvestmentPVSystem);
    const [sizeOfPVSystem, setSizeOfPVSystem] = useState(solavPV?.sizeOfPVSystem);

    const [areaOfPVSystem, setAreaOfPVSystem] = useState(solavPV?.areaOfPVSystem);



    

    const onSave = () => {
        // dispatch(updateBaseline({
        //     averageAnnualElectricityConsumption: averageAnnualElectricityConsumption,
        //     averageAnnualGasConsumption: averageAnnualGasConsumption,
        //     emissionFactorGridElectricity: emissionFactorGridElectricity,
        //     emissionFactorForGridGas: emissionFactorForGridGas
        // }));
        navigate("./../economic-parameters")

    }

    useEffect(() => {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${location}`).then(response => {
            return response.json()
        }).then(data => {
            if (data && data.length) {
                setLatitudeLongitude(data[0].lat + "," + data[0].lon);
            }
        })
    }, [location]);
  

    return (
        <>
            <h2 className="form-heading">CHP</h2>
            <h3 className="form-subheading">Provident et aut veniam quia dolor dicta laboriosam pariatur nam quibusdam dicta beatae quas dolore.</h3>
            <div className="main">
                <div>
                    <h2 className="group-heading">GENERAL</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={baseline?.averageAnnualElectricityConsumption}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Enter Your Average Annual Electricity Requirements (kWh)"
                                disabled={true}
                                subHeading="" />
                            <InputWithSideText value={percentAnnualElectricityFromPV}
                                unit="h"
                                type="number"
                                placeholder="Enter value"
                                heading="Number of hours of electricity demand (h)"
                                subHeading=""
                                // onChange={onPercentAnnualElectricityFromPVChange}
                                 />
                            <InputWithSideText value={baseline?.averageAnnualGasConsumption}
                                unit="kWh"
                                type="text"
                                placeholder="Select"
                                heading="Enter Your Average Annual Gas Requirements (kWh)"
                                subHeading=""
                                />
                            <InputWithSideText value={latitudeLongitude}
                                unit=""
                                type="text"
                                placeholder="Enter value"
                                heading="Number of hours of heat demand (h)"
                                subHeading=""
                                onChange={(event) => { setLatitudeLongitude(event.target.value) }} />
                              <InputWithSideText value={latitudeLongitude}
                                unit="%"
                                type="text"
                                placeholder="Enter value"
                                heading="What % of annual electricity you want to get from CHP system? (%)"
                                subHeading=""
                                onChange={(event) => { setLatitudeLongitude(event.target.value) }} />
                              <InputWithSideText value={latitudeLongitude}
                                unit="%"
                                type="text"
                                placeholder="Enter value"
                                heading="What % of annual heat you want to get from CHP system? (%)"
                                subHeading=""
                                onChange={(event) => { setLatitudeLongitude(event.target.value) }} />
                              <InputWithSideText value={latitudeLongitude}
                                unit=""
                                type="text"
                                placeholder="Enter value"
                                heading="Which loads are to be supplied?"
                                subHeading=""
                                onChange={(event) => { setLatitudeLongitude(event.target.value) }} />
                                <InputWithSideText value={"CHP fuel"}
                                unit=""
                                type="text"
                                heading="Which loads are to be supplied?"
                                subHeading=""
                                 />
                        </div>
                        <div className="calculated-main">
                        
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">TECHNICAL ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={0}
                                unit="m"
                                type="number"
                                placeholder="Enter value"
                                heading="CHP System"
                                // value based on adjoining table                                
                                disabled={true}
                                subHeading="" />
                            <InputWithSideText value={annualElectricityGenerationSelectedLocation}
                                unit=""
                                type="number"
                                placeholder="Enter value"
                                heading="CHP System- Prime mover technology"
                                subHeading=""
                                onChange={(event) => { setAnnualElectricityGenerationSelectedLocation(event.target.value) }} />
                            <InputWithSideText value={annualSolarInsolationSelectedLocation}
                                unit="kW"
                                type="number"
                                placeholder="Enter value"
                                heading="Average electricity load (kW)"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                disabled={true}
                                />
                            <InputWithSideText value={solarModuleEfficiency}
                                unit=""
                                type="number"
                                placeholder="Enter value"
                                heading="Existing boiler efficiency"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                onChange={(event) => { setSolarModuleEfficiency(event.target.value) }} />
                            <InputWithSideText value={solarModuleEfficiency}
                                unit=""
                                type="number"
                                placeholder="Enter value"
                                heading="Electrical efficiency"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                onChange={(event) => { setSolarModuleEfficiency(event.target.value) }} />
                             <InputWithSideText value={solarModuleEfficiency}
                                unit=""
                                type="number"
                                placeholder="Enter value"
                                heading="Heat Rate of CHP System"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                onChange={(event) => { setSolarModuleEfficiency(event.target.value) }} />
                             <InputWithSideText value={solarModuleEfficiency}
                                unit="kW"
                                type="number"
                                placeholder="Enter value"
                                heading="Average load (kW)"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                onChange={(event) => { setSolarModuleEfficiency(event.target.value) }} />
                             <InputWithSideText value={solarModuleEfficiency}
                                unit=""
                                type="number"
                                placeholder="Enter value"
                                heading="Peak load"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                onChange={(event) => { setSolarModuleEfficiency(event.target.value) }} />
                             <InputWithSideText value={solarModuleEfficiency}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual delivered heat demand using CHP system instead of grid gas (kWh)"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                onChange={(event) => { setSolarModuleEfficiency(event.target.value) }} />
                             <InputWithSideText value={solarModuleEfficiency}
                                unit="kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual electricity delivered using CHP system instead of grid gas (kWh)"
                                subHeading="Et voluptatum harum. In rerum necessitatibus quis. Inventor"
                                onChange={(event) => { setSolarModuleEfficiency(event.target.value) }} />
                                
                             
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Size of CHP System (kWe)" unit="kWe" value={sizeOfPVSystem} />
                                <CalculatedData heading="Fuel usage (kWh/year)" unit="kWh/year" value={areaOfPVSystem} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">ECONOMIC ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={unitInstallationCostPVSystem}
                                unit="£/kW"
                                type="number"
                                placeholder="Enter value"
                                heading="Unit installation cost of CHP system (£/kW)"
                                subHeading=""
                                onChange={(event) => { setUnitInstallationCostPVSystem(event.target.value) }} />
                            <InputWithSideText value={initialInvestmentPVSystem}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Initial investment for CHP system(CAPEX) (£)"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setInitialInvestmentPVSystem(event.target.value) }} />
                            <InputWithSideText value={economicParameters.unitPriceOfElectricity}
                                unit="£/kWh"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                heading="Unit Price of electricity(£/kWh)"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                />
                             <InputWithSideText value={initialInvestmentPVSystem}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual cost of electricity in absence of CHP system (£)"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setInitialInvestmentPVSystem(event.target.value) }} />
                             <InputWithSideText value={economicParameters.unitPriceOfGas}
                                unit="£/kWh"
                                type="number"
                                placeholder="Enter value"
                                disabled={true}
                                heading="Unit Price of natural gas (£/kWh)"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                />
                             <InputWithSideText value={initialInvestmentPVSystem}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual cost of grid gas in absence of CHP system (£)"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                />
                             <InputWithSideText value={initialInvestmentPVSystem}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual cost of CHP fuel (natural gas) (£)"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                />
                             <InputWithSideText value={initialInvestmentPVSystem}
                                unit="£"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual cost of grid electricity in presence of CHP system(£)"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                               />
                             <InputWithSideText value={initialInvestmentPVSystem}
                                unit="£/kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual cost of grid gas in presence of CHP system (£)"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setInitialInvestmentPVSystem(event.target.value) }} />
                            
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Annual operational cost savings" unit="£" value={baseline?.averageAnnualElectricityConsumption} />
                                <CalculatedData heading="Net Present Value of operational energy cost savings (NPV)" unit="£" value={baseline?.averageAnnualGasConsumption} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="group-heading">OPERATIONAL EMISSIONS ANALYSIS</h2>
                    <div className="form-div">
                        <div className="form-input">
                            <InputWithSideText value={gHGEmissionsElectricityPVSystem}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="Emission factor of grid gas (kgCO2e/kWh)"
                                subHeading="Ut atque quia aut sunt. Vel quis quasi nostrum accusamus et vel"
                                onChange={(event) => { setgHGEmissionsElectricityPVSystem(event.target.value) }} />
                            <InputWithSideText value={annualOperationalEmissionSavings}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="GHG Emissions for heat in absence of CHP system (kgCO2e)"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setAnnualOperationalEmissionSavings(event.target.value) }} />
                             <InputWithSideText value={annualOperationalEmissionSavings}
                                unit="kgCO2e/kWh"
                                type="number"
                                placeholder="Enter value"
                                heading="Emission factor of electricity (kgCO2e/kWh)"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setAnnualOperationalEmissionSavings(event.target.value) }} />
                             <InputWithSideText value={annualOperationalEmissionSavings}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="GHG Emissions for electricity in absence of CHP system (kgCO2e)"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setAnnualOperationalEmissionSavings(event.target.value) }} />
                             <InputWithSideText value={annualOperationalEmissionSavings}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="GHG Emissions for electricity and heat in presence of CHP system (kgCO2e)"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setAnnualOperationalEmissionSavings(event.target.value) }} />
                             <InputWithSideText value={annualOperationalEmissionSavings}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="Annual operational emission savings (kgCO2e)"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setAnnualOperationalEmissionSavings(event.target.value) }} />
                             <InputWithSideText value={annualOperationalEmissionSavings}
                                unit="kgCO2e"
                                type="number"
                                placeholder="Enter value"
                                heading="Total operational emission savings across abatement period (kgCO2e)"
                                subHeading="Quis enim unde. Rerum corrupti voluptatum"
                                onChange={(event) => { setAnnualOperationalEmissionSavings(event.target.value) }} />
                            
                            
                                
                        </div>
                        <div className="calculated-main">
                            <div className="calculated-container">
                                <CalculatedData heading="Total operational emission savings across abatement period" unit="tCO2e" value={baseline?.averageAnnualElectricityConsumption} />
                                <CalculatedData heading="Cost effectiveness considering operational emission savings only (i.e. without embodied emissions)" unit="tCO2e" value={baseline?.averageAnnualElectricityConsumption} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-div">
                    {/* <Button value="Next" onClick={onSave} /> */}
                </div>
            </div >
        </>

    );
};
export default Chp;
