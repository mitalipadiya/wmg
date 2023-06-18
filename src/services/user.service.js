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
          return response.data;
      });
};

const updateProfile = (id, profile) => {
  return axios
      .put(API_URL + `update-profile/${id}`, profile , { headers: authHeader() })
      .then((response) => {
          return response.data;
      });
}
const forgotPassword = (email) => {
  return axios
      .post(API_URL + `forgot-password`, email)
      .then((response) => {
          return response.data;
      });
}
const resetPassword = (password, token) => {
  return axios
      .post(API_URL + `reset-password`, password, { headers: { Authorization: token } })
      .then((response) => {
          return response.data;
      });
}
export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  updateSurvey,
  updateProfile,
  resetPassword,
  forgotPassword
};