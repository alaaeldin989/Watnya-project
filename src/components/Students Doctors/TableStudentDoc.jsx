import React from "react";

const TableStudentDoc = () => {
    return (
        <div className="w-full px-3 py-3">
            <div className="DIN-xs flex text-center border border-[#D1D1DB] rounded-t-[10px]  items-center">
                <p className="border-b-2 text-[16px] cursor-pointer border-[#EE7824] py-3 w-1/4">First Year</p>
                <p className="text-[16px] cursor-pointer py-3 w-1/4">Second Year</p>
                <p className="text-[16px] cursor-pointer py-3 w-1/4">Third Year</p>
                <p className="text-[16px] cursor-pointer py-3 w-1/4">Fourth Year</p>
            </div>
    
          <table className="w-full mt-5 text-center rounded-t-[24px] overflow-hidden">
            <thead className="DIN-xs bg-[#303192] text-white text-center text-[16px] flex justify-around">
              <th className="py-2">Code</th>
              <th className="py-2">Name</th>
              <th className="py-2">Subject</th>
              <th className="py-2">Specialization</th>
              <th className="py-2">Actions</th>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      );
};

export default TableStudentDoc;
