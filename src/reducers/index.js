import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import module2 from "./module2";

export default combineReducers({
  auth,
  message,
  module2
});