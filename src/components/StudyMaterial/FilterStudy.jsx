import React from "react";

const FilterStudy = () => {
  return (
    <form className=" w-full px-3 py-3">
      <div className="bg-[#E9E9EE] flex gap-2 rounded-[8px] px-4 justify-between py-3">
        <div className="flex w-[25%] flex-col gap-1">
          <label className="text-[18px]">
            Search
          </label>
            <input className="rounded-[8px] py-1.5 px-1.5 text-[14px] DIN-sm" placeholder="Search by subject code from here" type="text" name="search" id="" />
        </div>
        <div className="flex w-[25%] flex-col gap-1">
          <label className="text-[18px]">
          Specialization
          </label>
          <select className="rounded-[8px] text-[#666666] py-1.5 px-1.5 text-[14px] DIN-sm" name="" id="">
            <option value="">Choose specialization from here</option>
            <option value="">1</option>
            <option value="">1</option>
          </select>
        </div>
        <div className="flex w-[25%] flex-col gap-1">
          <label className="text-[18px]">
          Level
          </label>
          <select className="rounded-[8px] text-[#666666] py-1.5 px-1.5 text-[14px] DIN-sm" name="" id="">
            <option value="">Choose level from here</option>
            <option value="">1</option>
            <option value="">1</option>
          </select>
        </div>
        <div className="flex w-[25%] gap-1 items-end text-white">
            <button className="w-[140px] h-[40px] bg-[#303192] text-[14px] DIN-sm rounded-[8px]">Apply</button>
            <button className="w-[140px] h-[40px] bg-[#EE7824] text-[14px] DIN-sm rounded-[8px]">Reset</button>
        </div>
      </div>
    </form>
  );
};

export default FilterStudy;
