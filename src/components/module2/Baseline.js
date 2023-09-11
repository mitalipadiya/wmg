import { useEffect, useState } from "react";
import CalculatedData from "../UI/CalculatedData";
import InputWithSideText from "../UI/InputWithSideText";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateBaseline } from "../../actions/module2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Baseline = () => {
    const { baseline } = useSelector(state => state.module2);

    const [averageAnnualElectricityConsumption, setAverageAnnualElectricityConsumption] = useState(baseline?.averageAnnualElectricityConsumption);
    const [averageAnnualGasConsumption, setAverageAnnualGasConsumption] = useState(baseline?.averageAnnualGasConsumption);
    const [emissionFactorGridElectricity, setEmssionFactorGridElectricity] = useState(baseline?.emissionFactorGridElectricity);
    const [emissionFactorForGridGas, setEmissionFactorForGridGas] = useState(baseline?.emissionFactorForGridGas);
    const [annualOperationalEmissionsForGridElectricity, setAnnualOperationalEmissionsForGridElectricity] = useState(baseline?.annualOperationalEmissionsForGridElectricity);
    const [annualOperationalEmissionsForGridGas, setAnnualOperationalEmissionsForGridGas] = useState(baseline?.annualOperationalEmissionsForGridGas);
    const [totalBaselineEmissions, setTotalBaselineEmissions] = useState(baseline?.totalBaselineEmissions);
    const [location, setLocation] = useState(baseline?.location);
    const [latitudeLongitude, setLatitudeLongitude] = useState(baseline?.latitudeLongitude);
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [country, setCountry] = useState(baseline?.country);
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
            location,
            latitudeLongitude,
            isComplete: true
        }));

        navigate("./../technologies");

    }
    useEffect(() => {
        setAnnualOperationalEmissionsForGridElectricity(averageAnnualElectricityConsumption * emissionFactorGridElectricity);
    }, [averageAnnualElectricityConsumption, emissionFactorGridElectricity]);
    useEffect(() => {
        setAnnualOperationalEmissionsForGridGas(averageAnnualGasConsumption * emissionFactorForGridGas);
    }, [averageAnnualGasConsumption, emissionFactorForGridGas]);
    useEffect(() => {
        setTotalBaselineEmissions((averageAnnualElectricityConsumption * emissionFactorGridElectricity) + (averageAnnualGasConsumption * emissionFactorForGridGas));
    }, [averageAnnualElectricityConsumption, emissionFactorGridElectricity, averageAnnualGasConsumption, emissionFactorForGridGas]);

    useEffect(() => {
        if (location) {
            fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${location}`).then(res => res.json()).then(data => {
                if (data && data.length) {
                    setLatitudeLongitude(data[0].lat + "," + data[0].lon);
                }
            })
        }
    }, [location]);

    useEffect(()=>{
        axios.get("https://countriesnow.space/api/v0.1/countries").then(data =>{
            if(data && data.data && data.data.data) {
                setCountries(prev => {
                    if(country) {
                        data.data.data.forEach(data => {
                            if(data.country == country) {
                                setCities(prev => [...data.cities]);
                                return;
                            }
                        })
                    }
                    return [...data.data.data];
                })
            }
        });
    }, []);

    const onCountryChange = (country) => {
        countries.forEach(data => {
            if(data.country == country) {
                setCities(prev => [...data.cities]);
                setLocation(data.cities[0]);
                return;
            }
        })
        setCountry(prev => country);
        
    }

    return (
        <>
            <h2 className="form-heading">Baseline scenario</h2>
            <h3 className="form-subheading">Calculates the Greenhouse gas (GHG) emissions associated with your current electricity and gas consumption.</h3>
            <div className="main">
                <div className="form-div">

                    <div className="form-input">
                        <InputWithSideText value={averageAnnualElectricityConsumption}
                            unit="kWh"
                            type="number"
                            placeholder="Enter value"
                            heading="Average annual electricity consumption"
                            subHeading="This is a consolidated value of your electricity bills for the last one year or can be derived as an average of the annual electricity consumption for number of years in the past decade."
                            onChange={(event) => { setAverageAnnualElectricityConsumption(event.target.value) }} />
                        <InputWithSideText value={averageAnnualGasConsumption}
                            unit="kWh"
                            type="number"
                            placeholder="Enter value"
                            heading="Average annual gas consumption"
                            subHeading="This is a consolidated value of your gas bills for the last one year or can be derived as an average of the annual gas consumption for number of years in the past decade."
                            onChange={(event) => { setAverageAnnualGasConsumption(event.target.value) }} />
                        <InputWithSideText value={emissionFactorGridElectricity}
                            unit="kgCO2e/kWh"
                            type="number"
                            placeholder="Enter value"
                            heading="Emission factor for grid electricity"
                            subHeading="It indicates the GHG emissions associated with the production, transmission and distribution of electricity reaching your facility and the value is specific to your energy supplier. If not known, you may want to use the real-time value of average national grid emission factor from https://carbonintensity.org.uk/"
                            onChange={(event) => { setEmssionFactorGridElectricity(event.target.value) }} />
                        <InputWithSideText value={emissionFactorForGridGas}
                            unit="kgCO2e/kWh"
                            type="number"
                            placeholder="Enter value"
                            heading="Emission factor for grid gas"
                            subHeading="Indicates GHG emissions associated with natural gas combusted at your facility. If not known, you may want to refer to the conversion factor available for primary fuel sources at https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2022"
                            onChange={(event) => { setEmissionFactorForGridGas(event.target.value) }} />
                        <div className="country-div baseline-div">
                            <label className="company-label baseline-label">Country</label>
                            <select className="select" onChange={event => onCountryChange(event.target.value)} value={country}>
                                <option value="" disabled selected>Select</option>
                                {countries.length ? countries.map((data) => {
                                    return <option value={data.country}>{data.country}</option>
                                }) : null}
                            </select>
                        </div>
                        <div className="city-div baseline-div">
                            <label className="company-label baseline-label">City</label>
                            <select className="select" onChange={event => setLocation(event.target.value)} value={location}>
                                <option value="" disabled selected>Select</option>
                                {cities.length ? cities.map((data) => {
                                    return <option value={data}>{data}</option>
                                }) : null}
                            </select>
                        </div>
                        <InputWithSideText value={latitudeLongitude}
                            unit=""
                            type="text"
                            placeholder="Select location to view lattitude, longitude"
                            heading="Lattitude, longitude"
                            disabled={true}
                            subHeading="" />
                    </div>


                    <div className="calculated-main">
                        <div className="calculated-container">
                            <CalculatedData heading="Annual operational emissions for grid electricity (kgCO2e)" unit="kgCO2e" value={annualOperationalEmissionsForGridElectricity} />
                            <CalculatedData heading="Annual operational emissions for grid gas (kgCO2e)" unit="kgCO2e" value={annualOperationalEmissionsForGridGas} />
                            <CalculatedData heading="Total baseline emissions (kgCO2e)" unit="kgCO2e" value={totalBaselineEmissions} />

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
