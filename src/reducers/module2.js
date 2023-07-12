import { GET_MODULE2, UPDATE_BASELINE, UPDATE_ECONOMIC_PARAMETERS, UPDATE_SOLAR_PV } from "../actions/types";

const initialState = {
    baseline: {
        averageAnnualElectricityConsumption: "",
        averageAnnualGasConsumption: "",
        emissionFactorGridElectricity: "0.284",
        emissionFactorForGridGas: "0.18"
    },
    economicParameters: {
        unitPriceOfElectricity: "0.248",
        unitPriceOfGas: "0.0603",
        yearsOfAbatement: "10",
        discountRate: "5"
    },
    solarPV: {
        averageAnnualElectricityRequirements: "",
        percentAnnualElectricityFromPV: "80",
        location: "Coventry",
        latitudeLongitude: "",
        electricityGeneratedPVSystem: "",
        annualElectricityGenerationSelectedLocation: "",
        annualSolarInsolationSelectedLocation: "",
        solarModuleEfficiency: "",
        gHGEmissionsElectricityPVSystem: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAbatementPeriod: "",
        unitInstallationCostPVSystem: "",
        initialInvestmentPVSystem: "",
        annualElectricityInsteadOfGrid: "",
        sizeOfPVSystem: "",
        areaOfPVSystem: "",
        annualOperationalCostSavings: "",
        netPresentValueOperationalEnergy: "",
        totalOperationalEmissionSavingsAbatementPeriodInTon: "",
        costEffectivenessOperationalEmission: ""
    }
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_MODULE2:
            return { data: payload };
        case UPDATE_BASELINE:
            return {
                ...state,
                baseline: payload
            }
        case UPDATE_ECONOMIC_PARAMETERS:
            return {
                ...state,
                economicParameters: payload
            }
        case UPDATE_SOLAR_PV:
            return {
                ...state,
                solarPV: payload
            }

        default:
            return state;
    }
}