import React, { useState } from "react";
import LoginRegisterAccount from "../components/LoginRegisterAccount";
import { createAccount } from "../service/AuthService";
import { useNavigate } from "react-router-dom";

const createAccountPage = () => {
  const [auth, setAuth] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuth((prevState) => ({
      ...prevState,
      [name]: value, // Dynamically update the state based on input's name attribute
    }));
  };

  const handleSubmit = async () => {
    createAccount(auth);
    navigate(`/`);
      alert("Account created successfully. Please log in to your app.");
  };
  return (
    <div>
      <LoginRegisterAccount
        buttonText="Create AccountPage"
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        auth={auth}
      />
    </div>
  );
};

export default createAccountPage;
