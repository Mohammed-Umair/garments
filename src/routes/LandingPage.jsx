import React from "react";
import NavBar from "../components/Header/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";

const LandingPage = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default LandingPage;
