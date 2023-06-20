import { SET_MESSAGE, CLEAR_MESSAGE } from "./types";

export const setMessage = (message) => (dispatch) => (
  dispatch({
    type: SET_MESSAGE,
    payload: message
  })
);

export const clearMessage = (message) => (dispatch) => (
  dispatch({
    type: CLEAR_MESSAGE
  })
);