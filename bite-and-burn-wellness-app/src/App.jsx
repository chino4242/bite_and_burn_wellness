import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar.jsx';
import Header from './components/Header.jsx';
import Capture from './components/Capture.jsx';
import Output from './components/Output.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Navbar />
        <Capture />
        <Output />
      </div>
    </>
  )
}

export default App;
