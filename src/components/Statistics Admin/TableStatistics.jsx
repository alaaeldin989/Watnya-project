import React, { useState } from "react";
import { FilterStatistics } from "./FilterStatistics";
import TableSubject from "./TableSubject";
import TableStudentStatistics from "./TableStudentStatistics";

const TableStatistics = () => {
  const [activeComponent, setActiveComponent] = useState("subject");

  const renderComponent = () => {
    switch (activeComponent) {
      case "subject":
        return <TableSubject />;
      case "studentStatistics":
        return <TableStudentStatistics />;
      default:
        return <TableSubject />;
    }
  };
  return (
    <div className="w-full px-3 py-3">
      <div className="DIN-sm flex text-center border border-[#D1D1DB] rounded-t-[10px]  items-center">
        <p
          onClick={() => setActiveComponent("subject")}
          className={`${activeComponent == "subject" ? "border-[#EE7824] font-bold" : "border-transparent"} border-b-2 duration-300 text-[16px] cursor-pointer py-3 w-1/2`}>
          Subject’s Statistics
        </p>
        <p
          onClick={() => setActiveComponent("studentStatistics")}
          className={`${activeComponent == "studentStatistics" ? "border-[#EE7824] font-bold" : "border-transparent"} border-b-2 duration-300 text-[16px] cursor-pointer py-3 w-1/2`}>
          Student’s Statistics
        </p>
      </div>

      <FilterStatistics />
      {renderComponent()}
    </div>
  );
};

export default TableStatistics;
