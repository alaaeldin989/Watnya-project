import React from "react";

const FilterDoctors = () => {
  return (
    <form className=" w-full px-3 py-3">
    <div className="bg-[#E9E9EE] flex gap-2 w-full rounded-[8px] px-4 justify-between py-3">
      <div className="flex w-[75%] flex-col gap-1">
        <label className="text-[18px]">
          Search
        </label>
          <input className="rounded-[8px] py-1.5 px-1.5 text-[15px] DIN-sm w-full" placeholder="Search by doctor's name from here" type="text" name="search" id="" />
      </div>
      <div className="flex gap-1 w-[25%] items-end text-white">
          <button className="w-[140px] h-[40px] bg-[#303192] text-[14px] DIN-sm rounded-[8px]">Apply</button>
          <button className="w-[140px] h-[40px] bg-[#EE7824] text-[14px] DIN-sm rounded-[8px]">Reset</button>
      </div>
    </div>
  </form>
  );
};

export default FilterDoctors;
