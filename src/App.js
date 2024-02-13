import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and other necessary components
import LoginForm from './Components/LoginForm/LoginForm';
import Dashboard from './pages/Dashboard/Dashboard'; // Assuming you have a Dashboard component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} /> {/* Use element prop to specify the component */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Use element prop to specify the component */}
          {/* Add more routes for other components if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
