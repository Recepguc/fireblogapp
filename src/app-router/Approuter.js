import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "../compenents/Navbar"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import About from "../pages/About"
import Details from "../pages/Details"

const Approuter = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/about" element={<About/>}/>
            <Route path="/details" element={<Details/>}/>
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default Approuter