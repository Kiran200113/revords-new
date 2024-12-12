import React from 'react'
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
