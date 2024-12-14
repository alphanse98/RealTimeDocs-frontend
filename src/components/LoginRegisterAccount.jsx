import React from "react";
import { useLocation,useNavigate } from "react-router-dom";

const LoginRegisterAccount = ({ handleChange, handleSubmit , auth , buttonText }) => {

  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();
    const navigate = useNavigate();

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <div className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={auth.email}
          onChange={handleChange}
          className="login-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={auth.password}
          onChange={handleChange}
          className="login-input"
          required
        />
        <button onClick={() => handleSubmit ()} className="login-button">
          {buttonText}
        </button>
        {currentPath != "createAccount" && <button onClick={()=>navigate("/createAccount")} className="login-button">Create Account</button> }
        
      </div>
    </div>
  );
};

export default LoginRegisterAccount;
