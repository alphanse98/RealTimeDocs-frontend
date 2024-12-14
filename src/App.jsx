import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateAccountPage from './pages/createAccountPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DocumentEditor from './pages/DocumentPage';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

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
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/document/:id"
          element={
            <PrivateRoute>
              <DocumentEditor />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
