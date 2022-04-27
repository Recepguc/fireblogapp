import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar from "../compenents/Navbar";
import NewBlog from "../pages/NewBlog";

import Profile from "../pages/Profile";
import PrivateRouter from "./PrivateRouter";
import Details from "../pages/Details";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<PrivateRouter />}>
          <Route path="/details/" element={<Details />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newblog" element={<NewBlog />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
