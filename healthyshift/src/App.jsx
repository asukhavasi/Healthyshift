import React from "react"
import { Route,Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import About from "./pages/About"
import './App.css'


function App() {
  return (

    <div className="miandiv">
        <Routes>
            <Route path='/' element={<LandingPage />}> </Route>
            <Route path='/about' element={<About />}></Route>
        </Routes>
    </div>
  )
}

export default App