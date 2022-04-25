import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Navbar from '../compenents/Navbar'
import NewBlog from '../pages/NewBlog'

import Profile from "../pages/Profile";

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/newblog" element={<NewBlog/>} />
                
                
            </Routes>
        </Router>
    );
}

export default AppRouter;