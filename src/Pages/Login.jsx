import React, { useState } from "react";
import { NavLink } from "react-router";

const Login = ({ userRole, setUserRole }) => {
        const [showPassword, setShowPassword] = useState(false);

        const handleShowPassword = () => setShowPassword(!showPassword);
return (
    <div className="mx-4 sm:mx-8 h-[100vh] flex justify-center items-center">
            <div className="px-4 sm:px-10 py-5 w-[80%]">
                    <div className="flex md:flex-row flex-col-reverse items-center justify-between border rounded-[24px] shadow-sm md:h-[550px]  ">
                            <div className="md:w-[50%] px-4 sm:px-6 w-full py-4 md:py-0">
                                <h3 className="text-[28px]">Login</h3>
                                <p className="text-[#A5A5A5] text-[14px] DIN-normal">Log in to your account now to enjoy our services</p>
                                <form className="flex flex-col gap-2 py-2">
                                        <div className="flex flex-col gap-1">
                                                <label className="text-[16px]">Code</label>
                                                <input className="px-2 py-2.5 border border-[#B9BBCB] text-[14px] DIN-sm rounded-[8px]" name="Code user" type="text" placeholder="Enter your code here" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                                <label className="text-[16px]">Password</label>
                                                <div className="relative">
                                                <input className="px-2 py-2.5 border border-[#B9BBCB] text-[14px] DIN-sm rounded-[8px] w-full" name="Password user" type={`${showPassword ? "text" : "password"}`} placeholder="Enter your password here" />
                                                <i onClick={handleShowPassword} className={`${showPassword ? "far fa-eye-slash" : "far fa-eye"} absolute right-3 top-2.5 text-[17px] text-[#666666] cursor-pointer`}></i>
                                                </div>
                                        </div>
                                        <div className="mt-2 flex text-center">
                                                <NavLink to={`${userRole == "admin" ? "/study-material-Admin" : userRole == "doctor" ? "/study-material-doctor" : userRole == "student" ? "/Grade-student" : "/error" }`} className="bg-[#303192] text-white w-full px-2 text-[14px] DIN-sm  py-2.5 rounded-[8px]">Login</NavLink>
                                        </div>
                                </form>
                            </div>
                            <div className="md:w-[50%] h-full w-full">
                            <div className="bg-[url('../src/assets/bgLogo.svg')] flex justify-center items-center h-full w-[100%] bg-no-repeat py-4 md:rounded-r-[24px] md:rounded-tr-[24px] rounded-br-[24px]">
                            <img src="../src/assets/Logo.svg" alt="" className="md:w-[70%] w-[45%]"/>
                            </div>
                            </div>
                    </div>
            </div>
    </div>
);
  
};

export default Login;
