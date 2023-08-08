import React from "react";
import NavBar from "../components/Header/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import Footer from "../components/common/Footer/Footer";

const LandingPage = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/garments/" element={<HomePage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default LandingPage;
