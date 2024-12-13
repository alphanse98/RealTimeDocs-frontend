import api from "./api";
import axios from "axios";

// Function to fetch all documents
const fetchAllDocuments = async () => {
  try {
    const response = await api.get("/documents/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};

const uploadlDocuments = async (param) => {
  try {
    const response = await api.post("documents/create", param);
    return response.data;
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};

const deleteDocument = async (param) => {
  console.log("service param >>>", param);
  try {
    const response = await api.post("documents/delete", param);
    return response.data;
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};

export { fetchAllDocuments, uploadlDocuments, deleteDocument };
