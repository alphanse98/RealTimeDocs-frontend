import React, { useState } from "react";
import LoginRegisterAccount from "../components/LoginRegisterAccount";
import { login } from "../service/AuthService";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
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
    login(auth).then(() => navigate(`/home`));
  };

  return (
    <div>
      <LoginRegisterAccount
        buttonText="Login"
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        auth={auth}
      />
    </div>
  );
};

export default LoginPage;
