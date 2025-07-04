import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar.jsx';
import Header from './components/Header.jsx';
import Capture from './components/Capture.jsx';
import Output from './components/Output.jsx';

function App() {
  const [count, setCount] = useState(0)
  const [submittedData, setSubmittedData] = useState(null);

  const handleDataCapture = (formData) => {
    console.log("Data received in App.js", formData);
    setSubmittedData(formData);
  };

  return (
    <>
      <div>
        <Header />
        <Navbar />
        <Capture onDataSubmit={handleDataCapture} />
        <Output data ={submittedData} />
      </div>
    </>
  )
}

export default App;
