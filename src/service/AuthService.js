import api from "./api";

const login = async (param) => {
  try {
    const response = await api.post("user/login", param);
    sessionStorage.setItem("authToken", response.data.token);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};

const createAccount = async (param) => {
  try {
    const response = await api.post("user/register", param);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};
export { login, createAccount };
