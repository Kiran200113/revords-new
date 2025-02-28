import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional: For Bootstrap JS components
import './App.css'
import RevordsRoutes from './Components/Routes/RevordsRoutes'
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <RevordsRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
