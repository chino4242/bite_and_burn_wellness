import React, { useState } from 'react';
import axios from 'axios';
import './App.css'
import Navbar from './components/navbar.jsx';
import Header from './components/Header.jsx';
import Capture from './components/Capture.jsx';
import Output from './components/Output.jsx';

function App() {
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState(null);

  const handleDataCapture = async (formData) => {
    setError(null);
    try {
      const response = await axios.post('http://localhost:5000/api/daily-entries', formData);
      console.log('Server responded:', response.data);
      setSubmittedData(response.data);
    } catch(err) {
      console.error("Error submitting data:", err);
      setError("Failed to submit data. Please try again.");
    }
  };

  return (
    <>
      <div>
        <Header />
        <Navbar />
        <Capture onDataSubmit={handleDataCapture} />
        {error && <div className="alert alert-danger">{error}</div>}
        {submittedData && <Output data={submittedData} />};
        <Output data ={submittedData} />
      </div>
    </>
  )
}

export default App;
