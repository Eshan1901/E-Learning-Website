import Cookies from 'js-cookie';
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import USerSidebar from "./UserSidebar";
import Navbar from './Navbar';

const UserDashboard = () => {
  const navigate=useNavigate()
  const token = Cookies.get('userId')
  if (token === undefined) {
    return <Navigate to='/Login'/>
  }
  const handlelogout = () => {
    Cookies.remove("userId")
    navigate("/")
  }
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className=" h-screen flex justify-center items-center px-10 py-10 gap-4">
        <div className="hidden md:grid bg-white h-full w-1/6  rounded-3xl  shadow-xl">
          <USerSidebar />
        </div>
        <div className="grow bg-green-100 h-full rounded-3xl"></div>
      </div>
    </>
  );
};

export default UserDashboard;
