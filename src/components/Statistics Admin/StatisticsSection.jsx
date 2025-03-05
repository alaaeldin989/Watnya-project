import React from "react";

const StatisticsSection = () => {
  return (
    <div className="px-6 pb-3 py-2 flex flex-col">
        <h3 className="text-[18px]">Statistics</h3>
        <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex justify-between items-center w-[32%] cursor-pointer px-3 py-4 bg-[#F8F8F8] rounded-[8px]">
                <div className="flex flex-col gap-2">
                    <h4 className="text-[15px] DIN-sm text-[#666666]">Total number of students</h4>
                    <h2 className="text-[32px]">1000</h2>
                </div>
                <div className="bg-[#DDDEE6] w-8 h-8 flex items-center justify-center rounded-[8px]">
                <img src="../src/assets/school.svg" alt="" />
                </div>
            </div>
            <div className="flex justify-between items-center w-[32%] cursor-pointer px-3 py-4 bg-[#F8F8F8] rounded-[8px]">
                <div className="flex flex-col gap-2">
                    <h4 className="text-[15px] DIN-sm text-[#666666]">successful</h4>
                    <h2 className="text-[32px]">635</h2>
                </div>
                <div className="bg-[#BDFFBD] w-8 h-8 flex items-center justify-center rounded-[8px]">
                <img src="../src/assets/check.svg" alt="" />
                </div>
            </div>
            <div className="flex justify-between items-center w-[32%] cursor-pointer px-3 py-4 bg-[#F8F8F8] rounded-[8px]">
                <div className="flex flex-col gap-2">
                    <h4 className="text-[15px] DIN-sm text-[#666666]">Failed</h4>
                    <h2 className="text-[32px]">365</h2>
                </div>
                <div className="bg-[#FFDFDF] w-8 h-8 flex items-center justify-center rounded-[8px]">
                <img src="../src/assets/feedback.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default StatisticsSection;
