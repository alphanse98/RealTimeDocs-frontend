import React, { useEffect, useState } from "react";
import {
  fetchAllDocuments,
  uploadlDocuments,
  deleteDocument,
} from "../service/DocumentService";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [document, setDocument] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const navigate = useNavigate();

  const getDocs = async () => {
    const data = await fetchAllDocuments();
    setDocument(data);
  };

  const handleDocsClick = (id) => {
    navigate(`/document/${id}`);
  };

  useEffect(() => {
    getDocs();
  }, []);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type === "text/plain") {
      const fileContent = await file.text(); // Read the file content as text

      const delta = {
        ops: [
          { insert: fileContent }, // Use `insert` for plain text in Delta
        ],
      };

      const payload = {
        name: file.name,
        doc: JSON.stringify(delta), // Store as Delta format
      };

      try {
        await uploadlDocuments(payload);
        getDocs();
        alert("Document uploaded successfully.");
      } catch (error) {
        console.error("Error fetching documents:", error);
        throw error;
      }
    }
  };

  const handleDelete = async (docId) => {
    await deleteDocument({ id: docId });
    await getDocs();
    alert("Document deleted successfully.");
  };

  return (
    <div className="homePage">
      <div className="upload-section">
        <label htmlFor="file-upload" className="upload-label">
          Upload Document
        </label>
        <input
          type="file"
          id="file-upload"
          className="upload-input"
          accept=".doc,.docx,.pdf,.txt"
          onChange={handleFileChange}
        />
      </div>
      <div className="documents">
        {document?.map((ele) => (
          <div
            onClick={() => handleDocsClick(ele?.id)}
            className="profile-box"
            key={ele?.id}
          >
            <div className="content">
              <div>
                <div className="name">{ele?.name}</div>
                <div className="status">Document</div>
              </div>
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  handleDelete(ele?.id);
                }}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
