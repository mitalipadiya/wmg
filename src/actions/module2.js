
import {
    GET_MODULE2, UPDATE_BASELINE, UPDATE_ECONOMIC_PARAMETERS, UPDATE_SOLAR_PV, UPDATE_WIND, UPDATE_LED, UPDATE_PASSIVE_INFRARED_SENSOR, UPDATE_SMART_METERS_ELECTRICITY, UPDATE_SMART_METERS_GAS, UPDATE_VOLTAGE_OPTIMISATION, UPDATE_ENERGY_MANAGEMENT_SYSTEM, UPDATE_SOLAR_THERMAL, INDUSTRIAL_HEAT_PUMP
  } from "./types";
  
  import {getModule2Details} from "../services/module2.service";
  
  export const moduleDetails = () => (dispatch) => {
    return getModule2Details().then(
      (response) => {
        dispatch({
          type: GET_MODULE2,
        });  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
          dispatch({
            type: GET_MODULE2,
          }); 
  
        // dispatch({
        //   type: SET_MESSAGE,
        //   payload: message,
        // });
  
        return Promise.reject();
      }
    );
  };
  export const updateBaseline = (baseline) => (dispatch) => {
    dispatch({
      type: UPDATE_BASELINE,
      payload: baseline
    }); 
  };
  export const updateEconomicParameters = (economicParameters) => (dispatch) => {
    dispatch({
      type: UPDATE_ECONOMIC_PARAMETERS,
      payload: economicParameters
    }); 
  };
  export const updateSolarPV = (solarPV) => (dispatch) => {
    dispatch({
      type: UPDATE_SOLAR_PV,
      payload: solarPV
    }); 
  };
  export const updateWind = (wind) => (dispatch) => {
    dispatch({
      type: UPDATE_WIND,
      payload: wind
    }); 
  };
  export const updateLed = (led) => (dispatch) => {
    dispatch({
      type: UPDATE_LED,
      payload: led
    }); 
  };
  export const updatePassiveInfraredSensor = (passiveInfraredSensor) => (dispatch) => {
    dispatch({
      type: UPDATE_PASSIVE_INFRARED_SENSOR,
      payload: passiveInfraredSensor
    }); 
  };
  export const updateSmartMetersElectricity = (smartMetersElectricity) => (dispatch) => {
    dispatch({
      type: UPDATE_SMART_METERS_ELECTRICITY,
      payload: smartMetersElectricity
    }); 
  };
  export const updateSmartMetersGas = (smartMetersGas) => (dispatch) => {
    dispatch({
      type: UPDATE_SMART_METERS_GAS,
      payload: smartMetersGas
    }); 
  };
  export const updateVoltageOptimisation = (voltageOptimisation) => (dispatch) => {
    dispatch({
      type: UPDATE_VOLTAGE_OPTIMISATION,
      payload: voltageOptimisation
    }); 
  };
  export const updateEnergyManagementSystem = (energyManagementSystem) => (dispatch) => {
    dispatch({
      type: UPDATE_ENERGY_MANAGEMENT_SYSTEM,
      payload: energyManagementSystem
    }); 
  };
  export const updateSolarThermal = (solarThermal) => (dispatch) => {
    dispatch({
      type: UPDATE_SOLAR_THERMAL,
      payload: solarThermal
    }); 
  };
  export const updateIndustrialHeatPump = (industrialHeatPump) => (dispatch) => {
    dispatch({
      type: INDUSTRIAL_HEAT_PUMP,
      payload: industrialHeatPump
    }); 
  };
  

  