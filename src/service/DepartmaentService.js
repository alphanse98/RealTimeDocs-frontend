import api from "./api";

const fetchDepartments = async () => {
  try {
    const response = await api.get("department/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};

const createDepartment = async (payload) => {
  try {
    const response = await api.post("department/create", payload);
    return response.data;
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};

const updateDepartment = async (payload,id) => {
  try {
    const response = await api.put(`department/update/${id}`, payload);
    return response.data;
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};

const deleteDepartment = async (payload) => {
  try {
    const response = await api.post(`department/delete/${payload.id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};

export {
  fetchDepartments,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
