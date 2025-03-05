import React from "react";
import Sidebar from "../../components/Sidebar";
import FilterStudy from "../../components/StudyMaterial/FilterStudy";
import TableStudy from "../../components/StudyMaterial/TableStudy";

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
              <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-[90%] max-w-2xl">
              <h3 className="text-lg text-center py-2">
                Add Study Material Data
              </h3>
              <form action="" className="flex flex-wrap gap-x-2 justify-center gap-y-3 py-2 p-modal">
                <div className="lg:w-[32%] sm:w-[48%] flex flex-col gap-1">
                  <label>Code</label>
                  <input className="rounded-[8px] border text-[#666666] py-1.5 px-1.5 text-[14px] DIN-sm" type="text" name="Code" placeholder="Enter subject code from here"/>
                </div>
                <div className="lg:w-[32%] sm:w-[48%] flex flex-col gap-1">
                  <label>Subject Name</label>
                  <input className="rounded-[8px] border text-[#666666] py-1.5 px-1.5 text-[14px] DIN-sm" type="text" name="Subject Name" placeholder="Enter subject name from here" />
                </div>
                <div className="lg:w-[32%] sm:w-[48%] flex flex-col gap-1">
                  <label>Credit Hours</label>
                  <input className="rounded-[8px] border text-[#666666] py-1.5 px-1.5 text-[14px] DIN-sm" type="text" name="Credit Hours" placeholder="Enter credit hours from here"/>
                </div>
                <div className="lg:w-[32%] sm:w-[48%] flex flex-col gap-1">
                  <label>Specialization</label>
                  <select
                    className="rounded-[8px] border text-[#666666] py-1.5 px-1.5 text-[14px] DIN-sm"
                    name="Specialization"
                    id="">
                    <option value="">Choose specialization from here</option>
                    <option value="">1</option>
                    <option value="">1</option>
                  </select>
                </div>
                <div className="lg:w-[32%] sm:w-[48%] flex flex-col gap-1">
                  <label>Level</label>
                  <select
                    className="rounded-[8px] border text-[#666666] py-1.5 px-1.5 text-[14px] DIN-sm"
                    name="level"
                    id="">
                    <option value="">Choose level from here</option>
                    <option value="">1</option>
                    <option value="">1</option>
                  </select>
                </div>
                <div className="lg:w-[32%] sm:w-[48%] flex flex-col gap-1">
                  <label>Semester</label>
                  <select
                    className="rounded-[8px] border text-[#666666] py-1.5 px-1.5 text-[14px] DIN-sm"
                    name="semester"
                    id="">
                    <option value="">Choose semester from here</option>
                    <option value="">1</option>
                    <option value="">1</option>
                  </select>
                </div>
              </form>
              <div className="mt-4">
                <form method="dialog" className="w-full flex justify-center gap-4 shadow-test py-4 px-4">
                  <button className=" bg-[#303192] text-[19px] h-[45px] DIN-sm rounded-[8px] text-white w-[35%]">Add</button>
                  <button className="border-[#FF0000] border text-[19px] h-[45px]  rounded-[8px] text-[#FF0000] w-[35%]">Close</button>
                </form>
              </div>
            </div>
          </dialog>
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
