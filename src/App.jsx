import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccountPage from "./pages/createAccountPage";
// import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";
// import DocumentEditor from "./pages/DocumentPage";
import PrivateRoute from "./components/PrivateRoute";
import EmployeePage from "./pages/EmployeePage";
import DepartmentPage from './pages/DepartmentPage';

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/createAccount" element={<CreateAccountPage />} />

          {/* Private Routes */}
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <EmployeePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/department"
            element={
              <PrivateRoute>
                <DepartmentPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
