import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Lab from "./components/Lab";
import Lab1 from "./components/Lab1";
import Lab2 from "./components/Lab2";
import Lab3 from "./components/Lab3";
import Lab4 from './components/Lab4';
import Lab5 from './components/Lab5';
import Lab6 from './components/Lab6';
import Lab7 from './components/Lab7';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
           <Router>
      <div>
        
        <h1>Lab Programs Section-32</h1>        
        <Routes>
          <Route path="/" element={<Lab />} />
          <Route path="/Lab1" element={<Lab1 />} />
          <Route path="/Lab2" element={<Lab2 />} />
          <Route path="/Lab3" element={<Lab3 />} />
          <Route path="/Lab4" element={<Lab4 />} />
          <Route path="/Lab5" element={<Lab5 />} />
          <Route path="/Lab6" element={<Lab6 />} />
          <Route path="/lab7" element={<Lab7 />} />
        </Routes>
      </div>
    </Router>

    </>
  )
}

export default App
