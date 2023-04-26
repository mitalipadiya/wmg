import axios from "axios";
import authHeader from "./auth-header";
import { API_URL } from "../constants";


const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const updateSurvey = (id, surveyData) => {
  return axios
      .put(API_URL + `surveyResponse/${id}`, surveyData , { headers: authHeader() })
      .then((response) => {
          console.log("response ==>", response);

          return response.data;
      });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  updateSurvey
};