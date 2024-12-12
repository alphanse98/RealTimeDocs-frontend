import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DocumentEditor from './pages/DocumentPage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route for HomePage */}
          <Route path="/" element={<HomePage />} />

          {/* Route for DocumentEditor, passing an id parameter */}
          <Route path="/document/:id" element={<DocumentEditor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
