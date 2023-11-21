import React from "react";
import TNavbar from "./TNavbar";
import TSidebar from "./TSideBar";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const TrainerDashboard = () => {
  const trainerId = Cookies.get('trainerId')
  if (trainerId === undefined) {
    return <Navigate to='/Login'/>
  }
  return (
    <>
      <div>
        <TNavbar />
      </div>
      <div className=" h-screen flex justify-center items-center px-10 py-10 gap-4">
        <div className="hidden md:grid bg-white h-full w-1/6  rounded-3xl  shadow-xl">
          <TSidebar />
        </div>
        <div className="grow bg-[#5927E5] h-full rounded-3xl px-10 py-10 text-white flex flex-col">
          <div className="mt-5 auto grow">
            <h1>My Courses</h1>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainerDashboard;
