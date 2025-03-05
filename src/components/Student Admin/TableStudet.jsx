import React from "react";

const TableStudet = () => {
  return (
    <div className="w-full px-3 py-3">
    <div className="flex justify-between items-center">
      <div className="">
        <h1 className="text-[24px]">Students</h1>
        <p className="text-[#666666] text-[16px] DIN-normal">
          You can add or edit student data from here.
        </p>
      </div>
      <div className="text-[17px] group DIN-lg border border-[#1E2458]  cursor-pointer hover:bg-[#1E2458] duration-300 px-2 py-2 rounded-[8px]">
        <button
            className="text-[#1E2458] group-hover:text-white duration-300"
            onClick={() => document.getElementById("my_modal_4").showModal()}>
            Add a new student
          </button>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-[90%] max-w-2xl">
              <h3 className="text-lg text-center py-2">
              Add Student Data
              </h3>
              <form action="" className="flex flex-wrap gap-x-2 justify-center gap-y-3 py-2 p-modal">
                <div className="lg:w-[32%] sm:w-[48%] flex flex-col gap-1">
                  <label>Code</label>
                  <input className="rounded-[8px] border text-[#666666] py-1.5 px-1.5 text-[14px] DIN-sm" type="text" name="student-name" placeholder="Enter name from here"/>
                </div>
                <div className="lg:w-[32%] sm:w-[48%] flex flex-col gap-1">
                  <label>Name</label>
                  <input className="rounded-[8px] border text-[#666666] py-1.5 px-1.5 text-[14px] DIN-sm" type="text" name="student-name" placeholder="Enter name from here"/>
                </div>
                <div className="lg:w-[32%] sm:w-[48%] flex flex-col gap-1">
                  <label>Email</label>
                  <input className="rounded-[8px] border text-[#666666] py-1.5 px-1.5 text-[14px] DIN-sm" type="text" name="student-email" placeholder="Enter email from here" />
                </div>
                <div className="lg:w-[32%] sm:w-[48%] flex flex-col gap-1">
                  <label>Phone Number</label>
                  <input className="rounded-[8px] border text-[#666666] py-1.5 px-1.5 text-[14px] DIN-sm" type="text" name="student-PhoneNumber" placeholder="Enter phone number from here"/>
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

    <table className="w-full mt-6 text-center rounded-t-[24px] overflow-hidden">
      <thead className="DIN-xs bg-[#303192] text-white text-center text-[16px]">
        <th className="py-2">Code</th>
        <th className="py-2">Name</th>
        <th className="py-2">Phone Number</th>
        <th className="py-2">Level</th>
        <th className="py-2">Specialization</th>
        <th className="py-2">Actions</th>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>
  );
};

export default TableStudet;
