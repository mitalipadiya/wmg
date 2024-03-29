
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    USER_UPDATE,
  } from "./types";
  
  import AuthService from "../services/auth.service";
  
  export const register = (first_name, last_name, email, company, designation, password) => (dispatch) => {
    return AuthService.register(first_name, last_name, email.toLocaleLowerCase(), company, designation, password).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: "Registered Successfully",
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
          type: REGISTER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const login = (username, password) => (dispatch) => {
    return AuthService.login(username.toLocaleLowerCase(), password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message ="Login failed. Please check your credentials";
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };

  export const updateUser = (data) => (dispatch) => {
    dispatch({
      type: USER_UPDATE,
      payload: { user: data }
    })
  }
  
  export const logout = () => (dispatch) => {
    AuthService.logout();
  
    dispatch({
      type: LOGOUT,
    });
  };