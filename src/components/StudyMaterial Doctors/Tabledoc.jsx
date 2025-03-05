import React from "react";

const Tabledoc = () => {
    return (
        <div className="w-full px-3 py-3">
    
          <table className="w-full mt-2 text-center rounded-t-[24px] overflow-hidden">
            <thead className="DIN-xs bg-[#303192] text-white text-center text-[16px] flex justify-around">
              <th className="py-2">Code</th>
              <th className="py-2">Subject</th>
              <th className="py-2">Specialization</th>
              <th className="py-2">Academic Year</th>
              <th className="py-2">Semesters</th>
              <th className="py-2">Actions</th>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      );
    };

export default Tabledoc;
