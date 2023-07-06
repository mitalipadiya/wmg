import axios from "axios";
import { API_URL } from "../constants";


const getModule2Details = () => {
  return axios.get(API_URL + "all");
};

export default {
    getModule2Details
};