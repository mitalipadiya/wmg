
import {
    GET_MODULE2, UPDATE_BASELINE, UPDATE_ECONOMIC_PARAMETERS, UPDATE_SOLAR_PV, UPDATE_WIND, UPDATE_LED, UPDATE_PASSIVE_INFRARED_SENSOR, UPDATE_SMART_METERS_ELECTRICITY, UPDATE_SMART_METERS_GAS, UPDATE_VOLTAGE_OPTIMISATION, UPDATE_ENERGY_MANAGEMENT_SYSTEM, UPDATE_SOLAR_THERMAL, UPDATE_INDUSTRIAL_HEAT_PUMP, UPDATE_BIOMASS, UPDATE_SOLAR_PV_BESS, UPDATE_TECHNOLOGIES, UPDATE_EMISSION_SAVINGS, UPDATE_MACC, UPDATE_PARETO_OPTIMISATION, UPDATE_CHP
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
  export const updateTechnologies = (technologies) => (dispatch) => {
    dispatch({
      type: UPDATE_TECHNOLOGIES,
      payload: technologies
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
  export const updateSolarPvBess = (solarPvBess) => (dispatch) => {
    dispatch({
      type: UPDATE_SOLAR_PV_BESS,
      payload: solarPvBess
    }); 
  };
  export const updateBiomass = (biomass) => (dispatch) => {
    dispatch({
      type: UPDATE_BIOMASS,
      payload: biomass
    }); 
  };

  export const updateChp = (chp) => (dispatch) => {
    dispatch({
      type: UPDATE_CHP,
      payload: chp
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
      type: UPDATE_INDUSTRIAL_HEAT_PUMP,
      payload: industrialHeatPump
    }); 
  };
  export const updateEmissionSavings = (emissionSavings) => (dispatch) => {
    dispatch({
      type: UPDATE_EMISSION_SAVINGS,
      payload: emissionSavings
    }); 
  };
  export const updateMacc = (macc) => (dispatch) => {
    dispatch({
      type: UPDATE_MACC,
      payload: macc
    }); 
  };
  export const updateParetoOptimisation = (paretoOptimisation) => (dispatch) => {
    dispatch({
      type: UPDATE_PARETO_OPTIMISATION,
      payload: paretoOptimisation
    }); 
  };
  

  