import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import AboutUs from "./components/AboutUs/AboutUs";
import { Navbar } from "./components";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import BookATable from "./components/BookATable/BookATable";
import "./App.css";

const App = () => {
  return (
    <Router>
      <ToastContainer /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<SpecialMenu />} />
        <Route path="/awards" element={<Laurels />} />
        <Route path="/contact" element={<FindUs />} />
        <Route path="/bookatable" element={<BookATable />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
