import React from "react";
import Sidebar from "../components/Sidebar";
import FilterStudy from "../components/StudyMaterial/FilterStudy";
import TableStudy from "../components/StudyMaterial/TableStudy";

const studyMaterial = () => {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    locale: "ar-SA",
  };
  const formatDate = new Intl.DateTimeFormat("en", options).format(date);

  return (
    <div className="">
    <div className="flex">
      <Sidebar />
      <div className="w-full">
      <div className=" w-full">
        <div className=" border-b w-full">
          <div className="px-6 py-3 flex justify-between items-center">
            <div className="">
              <h1 className="text-[#303192] text-[24px]">Study Material</h1>
              <p className="text-[#666666] text-[16px] DIN-normal">
                {formatDate}
              </p>
            </div>
            <div className="bg-[#E9E9EE] text-[#666666] w-9 h-9 cursor-pointer hover:bg-[#303292b9] duration-300 hover:text-white flex items-center justify-center rounded-[8px]">
              <i className="fas fa-cog"></i>
            </div>
          </div>
        </div>
      </div>      
      <div className="">
      <FilterStudy/>
      <TableStudy/>
      </div>
      </div>
      </div>
    </div>
  );
};

export default studyMaterial;
