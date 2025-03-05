import React from "react";

const TableGrade = () => {
  return (
    <div className="w-full px-3 py-3">
      <table className="w-full mt-2 text-center rounded-t-[24px] overflow-hidden">
        <thead className="DIN-xs bg-[#303192] flex justify-around text-white text-center text-[16px]">
          <th className="py-2">Subject</th>
          <th className="py-2">Specialization</th>
          <th className="py-2">Grade</th>
        </thead>
        <tbody className="border">
            <tr className="flex justify-around border border-[#c5c5c563] py-1.5">
                <td>s1</td>
                <td>s2</td>
                <td>s3</td>
            </tr>
            <tr className="flex justify-around border border-[#c5c5c563] py-1.5">
                <td>s1</td>
                <td>s2</td>
                <td>s3</td>
            </tr>
        </tbody>
      </table>
      <table className="w-full text-center rounded-b-[24px] overflow-hidden">
        <thead className="DIN-xs bg-[#303192] text-white text-center text-[16px]">
          <tr className="flex justify-around">
            <th className="py-2">GPA</th>
            <th className="py-2">3</th>
          </tr>
          <tr className="flex justify-around">
            <th className="py-2">CGPA</th>
            <th className="py-2">4</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default TableGrade;
