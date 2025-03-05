import React from "react";

const FilterDoctors = () => {
  return (
    <form className=" w-full px-3 py-3">
    <div className="bg-[#E9E9EE] flex gap-2 w-full rounded-[8px] px-4 justify-between py-3">
      <div className="flex w-[75%] flex-col gap-1">
        <label className="text-[18px]">
          Search
        </label>
          <input className="rounded-[8px] py-2 px-2 text-[12px] DIN-sm w-full" placeholder="Search by doctor's name from here" type="text" name="search" />
      </div>
      <div className="flex gap-1 w-[25%] items-end text-white">
          <button className="w-[140px] h-[40px] bg-[#303192] text-[14px] DIN-sm rounded-[8px]">Apply</button>
          <input type="reset" className="w-[140px] h-[40px] bg-[#EE7824] text-[14px] DIN-sm rounded-[8px]"/>
      </div>
    </div>
  </form>
  );
};

export default FilterDoctors;
