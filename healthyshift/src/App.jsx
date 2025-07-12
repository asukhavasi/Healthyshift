import React from "react"
import { Route,Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import './App.css'

function App() {
  return (

    <div className="miandiv">
        <Routes>
            <Route path='/' element={<LandingPage />}> </Route>
        </Routes>
    </div>
  )
}

export default App