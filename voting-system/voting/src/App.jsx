import React from "react";
import Registeration from "./Registeration";
import Login from './Login';
import Home from './Home';
// import CandidateList from './CandidateList';
import CandidateProfile from './CandidateProfile';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Registeration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/candidateList" element={<CandidateList />} /> */}
        <Route path="/profile/:id" element={<CandidateProfile />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
