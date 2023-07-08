import { GET_MODULE2, UPDATE_BASELINE, UPDATE_ECONOMIC_PARAMETERS } from "../actions/types";

const initialState = {
    baseline: {
        averageAnnualElectricityConsumption: "10000",
        averageAnnualGasConsumption: "140000",
        emissionFactorGridElectricity: "0.284",
        emissionFactorForGridGas: "0.18"
    },
    economicParameters: {
        unitPriceOfElectricity: "0.248",
        unitPriceOfGas: "0.0603",
        yearsOfAbatement: "10",
        discountRate: "5"
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

        default:
            return state;
    }
}