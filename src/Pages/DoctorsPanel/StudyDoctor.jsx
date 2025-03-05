import React from "react";
import FilterStudy from "../../components/StudyMaterial Admin/FilterStudy";
import TableStudy from "../../components/StudyMaterial Admin/TableStudy";
import Filterdoc from "../../components/StudyMaterial Doctors/Filterdoc";
import Tabledoc from "../../components/StudyMaterial Doctors/Tabledoc";

const StudyDoctor = () => {
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
    <div className="w-full">
      <div className="w-full">
        {/* <Sidebar /> */}
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
              </div>
            </div>
          </div>
          <div className="">
            <Filterdoc />
            <Tabledoc />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyDoctor;
