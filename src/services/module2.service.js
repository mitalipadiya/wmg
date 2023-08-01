import axios from "axios";
import { API_URL } from "../constants";


const getModule2Details = () => {
  return axios.get(API_URL + "all");
};
const round = (num, decimalPlaces = 0) =>{
  if(num) {
    num = Math.round(num + "e" + decimalPlaces);
    return Number(num + "e" + -decimalPlaces).toFixed(2).replace(/\.00$/, '');
  }
}
const formatValueWithTwoDecimals = (value) => {
  return parseFloat(parseFloat(value).toFixed(2));
};
const formatValueWithoutDecimals = (value) => {
  return parseFloat(parseFloat(value).toFixed(0));
};

export {
    getModule2Details,
    round,
    formatValueWithTwoDecimals,
    formatValueWithoutDecimals
};