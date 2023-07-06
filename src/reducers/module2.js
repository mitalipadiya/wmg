import { GET_MODULE2 } from "../actions/types";

const initialState = {
    baseline: {
        averageAnnualElectricityConsumption: "",
        averageAnnualGasConsumption: "",
        emissionFactorGridElectricity: "",
        emissionFactorForGridGas: ""
    }
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_MODULE2:
            return { data: payload };

        default:
            return state;
    }
}