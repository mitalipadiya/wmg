
import {
    GET_MODULE2, UPDATE_BASELINE, UPDATE_ECONOMIC_PARAMETERS, UPDATE_SOLAR_PV
  } from "./types";
  
  import Module2Service from "../services/module2.service";
  
  export const moduleDetails = () => (dispatch) => {
    return Module2Service.getModule2Details().then(
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