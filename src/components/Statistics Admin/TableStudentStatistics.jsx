import React from "react";

const TableStudentStatistics = () => {
  return (
    <table className="w-full mt-5 text-center rounded-t-[24px] overflow-hidden">
    <thead className="DIN-xs bg-[#303192] text-white text-center text-[16px] flex justify-around">
      <th className="py-2">Code</th>
      <th className="py-2">Name</th>
      <th className="py-2">Level</th>
      <th className="py-2">Specialization</th>
    </thead>
    <tbody></tbody>
  </table> 
  );
};

export default TableStudentStatistics;
