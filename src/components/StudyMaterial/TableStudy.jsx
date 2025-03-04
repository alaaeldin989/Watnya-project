import React from "react";

const TableStudy = () => {
  return (
    <div className="w-full px-3 py-3">
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="text-[24px]">Study Materials</h1>
          <p className="text-[#666666] text-[16px] DIN-normal">
            You can add or edit study materials from here.
          </p>
        </div>
        <div className="text-[17px] DIN-lg border border-[#1E2458] text-[#1E2458] cursor-pointer hover:bg-[#1E2458] duration-300 hover:text-white px-2 py-2 rounded-[8px]">
          <button>Add a new study material</button>
        </div>
      </div>

      <table className="w-full mt-6 text-center rounded-t-[24px] overflow-hidden">
        <thead className="DIN-xs bg-[#303192] text-white text-center text-[16px]">
          <th className="py-2">Code</th>
          <th className="py-2">Subject</th>
          <th className="py-2">Credit Hours</th>
          <th className="py-2">Specialization</th>
          <th className="py-2">Level</th>
          <th className="py-2">Semester</th>
          <th className="py-2">Actions</th>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
};

export default TableStudy;
