import React, { useState } from "react";

const TableStudentDoc = () => {
  const [activeCom, setActiveCom] = useState("first");

  const renderComponent = () => {
    switch (activeCom) {
      case "first":
        return <h3>ss</h3>;
      case "second":
        return <h3>ss</h3>;
      case "third":
        return <h3>ss</h3>;
      case "fourth":
        return <h3>ss</h3>;
      default:
        return <h3>ss</h3>;
    }
  };
  return (
    <div className="w-full px-3 py-3">
      <div className="DIN-sm flex text-center border border-[#D1D1DB] rounded-t-[10px]  items-center">
        <p
          onClick={() => setActiveCom("first")}
          className={`${
            activeCom == "first"
              ? "border-[#EE7824] font-bold"
              : "border-transparent"
          } border-b-2 duration-300 text-[16px] cursor-pointer py-3 w-1/2`}>
          First Year
        </p>
        <p
          onClick={() => setActiveCom("second")}
          className={`${
            activeCom == "second"
              ? "border-[#EE7824] font-bold"
              : "border-transparent"
          } border-b-2 duration-300 text-[16px] cursor-pointer py-3 w-1/2`}>
          Second Year
        </p>
        <p
          onClick={() => setActiveCom("third")}
          className={`${
            activeCom == "third"
              ? "border-[#EE7824] font-bold"
              : "border-transparent"
          } border-b-2 duration-300 text-[16px] cursor-pointer py-3 w-1/2`}>
          Third Year
        </p>
        <p
          onClick={() => setActiveCom("fourth")}
          className={`${
            activeCom == "fourth"
              ? "border-[#EE7824] font-bold"
              : "border-transparent"
          } border-b-2 duration-300 text-[16px] cursor-pointer py-3 w-1/2`}>
          Fourth Year
        </p>
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
      {renderComponent()}
    </div>
  );
};

export default TableStudentDoc;
