import api from "./api";

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

export default fetchAllDocuments;
