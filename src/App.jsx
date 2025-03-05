import React, { useEffect, useState } from "react";
import './App.css'
import { Route, Routes, useLocation } from "react-router";
import DoctorPanel from "./Pages/DoctorPanel";
import Login from "./Pages/Login";
import Statistics from "./Pages/Statistics";
import StudyMaterial from "./Pages/StudyMaterial";
import StudentPanel from "./Pages/StudentPanel";
import Sidebar from "./components/Sidebar";
import StudentDoctor from "./Pages/DoctorsPanel/StudentDoctor";
import StudyDoctor from "./Pages/DoctorsPanel/StudyDoctor";
import GradeStudent from "./Pages/StudentPanel/GradeStudent";



const App = () => {
  const [userRole, setUserRole] = useState("admin");
  const location = useLocation();

  useEffect(() => {
    const title = location.pathname === "/" ? "Login" : "National University " + location.pathname.replace("/", "");
    document.title = title;
    console.log(title + location.pathname);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={`${window.location.pathname == "/" ? "overflow-hidden" : "flex"}`}>
      <div className={`${window.location.pathname == "/" ? "hidden" : "block"}`}>
      <Sidebar userRole={userRole} setUserRole={setUserRole}/>
      </div>
      <Routes>
        <Route path="/" element={<Login userRole={userRole} setUserRole={setUserRole} />} />
        <Route path="study-material-Admin" element={<StudyMaterial />} />
        <Route path="doctor-Admin" element={<DoctorPanel />} />
        <Route path="student-Admin" element={<StudentPanel />} />
        <Route path="statistics-Admin" element={<Statistics />} />
        <Route path="study-material-doctor" element={<StudyDoctor />} />
        <Route path="student-doctor" element={<StudentDoctor />} />
        <Route path="grade-student" element={<GradeStudent />} />
      </Routes>
    </div>
  );
};

export default App;

