import React from "react";
import './App.css'
import { Route, Routes } from "react-router";
import DoctorPanel from "./Pages/DoctorPanel";
import Login from "./Pages/Login";
import Statistics from "./Pages/Statistics";
import StudyMaterial from "./Pages/StudyMaterial";
import StudentPanel from "./Pages/StudentPanel";



const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/study-material" element={<StudyMaterial />} />
        <Route path="/doctor-panel" element={<DoctorPanel />} />
        <Route path="/student-panel" element={<StudentPanel />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </div>
  );
};

export default App;

