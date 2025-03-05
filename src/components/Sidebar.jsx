import React, { useState } from "react";
import { NavLink } from "react-router";

const Sidebar = ({ userRole, setUserRole }) => {


  return (
    <div className="">
      <div className="w-[288px] bg-[#303192] text-white h-[100vh] pt-7 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="relative flex justify-center w-[124px] m-auto h-[124px]">
            <img
              src="../src/assets/user.svg"
              className="h-full w-full"
              alt=""
            />
            <img
              src="../src/assets/mask.svg"
              className="absolute top-0 h-full w-full"
              alt=""
            />
            <img
              src="../src/assets/edit.svg"
              className="absolute bottom-2 w-4 h-4 cursor-pointer"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-0.5 text-center">
            <h3 className="DIN-sm text-[18px]">Ibrahim Haitham Ibrahim</h3>
            <p className="DIN-xs text-[15px] capitalize">{userRole}</p>
          </div>
        </div>

          {userRole.toLowerCase() == "admin" ? (        <div className=" px-2 border-t py-1 sidebar-links flex flex-col gap-0.5">
          <div className="border-b-[#D4D4D8] border-b pb-0.5 ">
            <NavLink
              to={"/study-material-Admin"}
              className="flex gap-2 px-2 items-center py-2.5 rounded-[8px]">
              <img src="../src/assets/StudyIcon.svg" alt="" />
              <p className="text-[16px] DIN-sm">Study Materials</p>
            </NavLink>
          </div>
          <div className="border-b-[#D4D4D8] border-b pb-0.5">
            <NavLink
              to={"/doctor-Admin"}
              className="flex gap-2 px-2 items-center py-2.5 rounded-[8px]">
              <img src="../src/assets/DoctorsIcon.svg" alt="" />
              <p className="text-[16px] DIN-sm">Doctors</p>
            </NavLink>
          </div>

          <div className="border-b-[#D4D4D8] border-b pb-0.5">
            <NavLink
              to={"/student-Admin"}
              className="flex gap-2 px-2 items-center py-2.5 rounded-[8px]">
              <img src="../src/assets/StudentIcon.svg" alt="" />
              <p className="text-[16px] DIN-sm">Students</p>
            </NavLink>
          </div>

          <div className="border-b-[#D4D4D8] border-b pb-0.5">
            <NavLink
              to={"/statistics-Admin"}
              className="flex gap-2 px-2 items-center py-2.5 rounded-[8px]">
              <img src="../src/assets/StatisticsIcon.svg" alt="" />
              <p className="text-[16px] DIN-sm">Statistics</p>
            </NavLink>
          </div>
        </div>): (<></>) }

        {userRole.toLowerCase() == "doctor" ? (        <div className=" px-2 border-t py-1 sidebar-links flex flex-col gap-0.5">
          <div className="border-b-[#D4D4D8] border-b pb-0.5 ">
            <NavLink
              to={"/study-material-doctor"}
              className="flex gap-2 px-2 items-center py-2.5 rounded-[8px]">
              <img src="../src/assets/StudyIcon.svg" alt="" />
              <p className="text-[16px] DIN-sm">Study Materials</p>
            </NavLink>
          </div>

          <div className="border-b-[#D4D4D8] border-b pb-0.5">
            <NavLink
              to={"/student-doctor"}
              className="flex gap-2 px-2 items-center py-2.5 rounded-[8px]">
              <img src="../src/assets/StudentIcon.svg" alt="" />
              <p className="text-[16px] DIN-sm">Students</p>
            </NavLink>
          </div>

        </div>): (<></>) }

          {userRole.toLowerCase() == "student" ? (        <div className=" px-2 border-t py-1 sidebar-links flex flex-col gap-0.5">

          <div className="border-b-[#D4D4D8] border-b pb-0.5">
            <NavLink
              to={"/grade-student"}
              className="flex gap-2 px-2 items-center py-2.5 rounded-[8px]">
              <img src="../src/assets/StatisticsIcon.svg" alt="" />
              <p className="text-[16px] DIN-sm">Grade</p>
            </NavLink>
          </div>
        </div>): (<></>) }

            <NavLink to={"/"} className="flex gap-2 px-2 items-end h-[100%] justify-between py-2.5 rounded-[8px] cursor-pointer pb-4">
                <p className="text-[16px] DIN-sm">Logout</p>
                <img src="../src/assets/logout.svg" alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
