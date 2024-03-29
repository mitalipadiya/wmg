import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    USER_UPDATE
  } from "../actions/types";
  
  const user = JSON.parse(localStorage.getItem("user"));
  
  const initialState = user
    ? { isLoggedIn: true, user, surveyData: user.survey_data }
    : { isLoggedIn: false, user: null, surveyData: null };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user,
          surveyData: payload.user.survey_data
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          surveyData: null
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          surveyData: null
        };
      case USER_UPDATE:
        return {
          ...state,
          user: payload.user
        }
      default:
        return state;
    }
  }