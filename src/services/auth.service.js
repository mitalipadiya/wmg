
import axios from "axios";

const API_URL = "https://alive-cuff-links-eel.cyclic.app/";

const register = (first_name, last_name, email, company, designation, password) => {
    return axios.post(API_URL + "register", {
        first_name,
        last_name,
        email,
        company,
        designation,
        password
    });
};

const login = (email, password) => {
    return axios
        .post(API_URL + "login", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout,
};