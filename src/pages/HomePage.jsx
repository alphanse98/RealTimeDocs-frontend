import React, { useEffect, useState } from "react";
import fetchAllDocuments from "../service/DocumentService";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [document, setDocument] = useState([]);
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

  return (
    <div>
      HomePage
      {document?.map((ele) => (
        <div onClick={() => handleDocsClick(ele?.id)} className="profile-box" key={ele?.id}>
          <div className="content">
            <div>
              <div className="name">{ele?.name}</div>
              <div className="status">Document</div>
            </div>
            <button className="delete-btn">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
