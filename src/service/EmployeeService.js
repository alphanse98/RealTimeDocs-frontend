import api from "./api";

const fetchAllEmployee = async () => {
  try {
    const response = await api.get("employee/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};

const createEmployee = async (payload) => {
  try {
    const response = await api.post("employee/create", payload);
    return response.data;
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};

const updateEmployee = async (payload, id) => {
  try {
    const response = await api.put(`employee/update/${id}`, payload);
    return response.data;
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};

const deleteEmployee = async (payload) => {
  try {
    const response = await api.post(`employee/update/${payload.id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};

export { fetchAllEmployee, createEmployee, updateEmployee, deleteEmployee };
