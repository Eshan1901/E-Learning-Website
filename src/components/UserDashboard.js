import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import USerSidebar from "./UserSidebar";
import Navbar from './Navbar';
import { BsFillArrowUpRightSquareFill } from "react-icons/bs"
import CoursesTypeSelection from './CoursesTypeSelection';
import CourseCard from './CourseCard';
import { ColorRing } from "react-loader-spinner";
import axios from 'axios';

const CoursesType = [
  {
    id: 1,
    type: "Courses",
  },
  {
    id: 2,
    type: "Registered",
  },
];
const UserDashboard = () => {
  const [courseType, setcourseType] = useState("Courses");
  const [coursesDetails, setcoursesDetails] = useState({})
  const [userData,setUserData] = useState({});
  const [status, setstatus] = useState(false)

  const getdetails = async () => {
    setcoursesDetails({})
    setstatus(false)
    // console.log(`https://mern-backend-z9pr.onrender.com/${courseType}`);
    const res = await fetch(`https://mern-backend-z9pr.onrender.com/${courseType}`, {
      method: "POST",
      headers: {
        "Content-type":"application/json"
      },
    });
    const data = await res.json()
    setstatus(true)
    setcoursesDetails(data.slice(1,13))
  }
  const getUserData = async () => {
    try {
      // `https://mern-backend-z9pr.onrender.com/user/${userId}`
      const foundUser = await axios.post(
        `https://mern-backend-z9pr.onrender.com/user/${userId}`,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      setUserData(foundUser.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdetails();
    getUserData();
    return ()=>{}
  },[courseType])
  const navigate=useNavigate()
  const userId = Cookies.get('userId');
  if (userId === undefined) {
    return <Navigate to="/Login" />;
  }
  
  const renderView = () => {
    if (status) {
      return (
        <div className="mt-8 grid grid-cols-3 place-items-start gap-2">
              {
                coursesDetails.map((i) => {
                  return <CourseCard data={i} />
                })
              }
            </div>
      )
    }
    else {
      return (
        <div className="h-[60vh] flex justify-center items-center ">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["white", "white", "white", "white", "white"]}
          />
        </div>
      );
    }
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
        <div className="grow bg-[#5927E5] h-full rounded-3xl px-10 pt-10 text-white">
          <div className="flex justify-between mb-10">
            <div>
              <p>Welcome Back</p>
              <h1 className="flex items-baseline gap-1 mt-2 text-4xl font-bold">
                {userData.name}
                <BsFillArrowUpRightSquareFill style={{ fontSize: "15px" }} />
              </h1>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-3 bg-white text-[#5927E5] px-5 py-3 rounded-lg">
                <h1 className="text-4xl font-semibold">7</h1>
                <p>
                  Courses <br />
                  Completed
                </p>
              </div>
              <div className="flex items-center gap-3 bg-white text-[#5927E5] px-5 py-3 rounded-lg">
                <h1 className="text-4xl font-semibold">11</h1>
                <p>
                  Courses
                  <br />
                  In Progress
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex gap-4">
              {CoursesType.map((i) => {
                return (
                  <CoursesTypeSelection
                    type={i.type}
                    setcourseType={setcourseType}
                  />
                );
              })}
            </div>
            {renderView()}
            {status && (
              <div className="flex justify-end mt-5">
                <Link to='/courses'>
                  <button className=" bg-white text-[#5927E5] px-4 py-2 rounded-xl">
                    Show More
                  </button>
                </Link>
              </div>
            )}
            {/* <div className="mt-8 flex flex-col gap-1">
              {
                coursesDetails.map((i) => {
                  return <CourseCard data={i} />
                })
              }
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;



              
                /* <div className="bg-white text-[#5927E5] px-2 py-4 flex gap-1 items-center rounded-md w-fit">
                <TbBrandNextjs style={{ fontSize: "50px" }} />
                <div className="w-fit">
                  <h1 className="text-xl">NextJs</h1>
                  <p className=" text-xs text-end">Alex Carry</p>
                </div>
                <div className="mx-5 flex items-center gap-1">
                  <AiOutlineClockCircle />
                  <p>5:30Hr</p>
                </div>
                <button className="bg-[#5927E5] text-white px-2 py-1 rounded text-sm">
                  See Details
                </button>
              </div>
              <div className="bg-white text-[#5927E5] px-2 py-4 flex gap-1 items-center rounded-md w-fit">
                <TbBrandNextjs style={{ fontSize: "50px" }} />
                <div className="w-fit">
                  <h1 className="text-xl">NextJs</h1>
                  <p className=" text-xs text-end">Alex Carry</p>
                </div>
                <div className="mx-5 flex items-center gap-1">
                  <AiOutlineClockCircle />
                  <p>5:30Hr</p>
                </div>
                <button className="bg-[#5927E5] text-white px-2 py-1 rounded text-sm">
                  See Details
                </button>
              </div>
              <div className="bg-white text-[#5927E5] px-2 py-4 flex gap-1 items-center rounded-md w-fit">
                <TbBrandNextjs style={{ fontSize: "50px" }} />
                <div className="w-fit">
                  <h1 className="text-xl">NextJs</h1>
                  <p className=" text-xs text-end">Alex Carry</p>
                </div>
                <div className="mx-5 flex items-center gap-1">
                  <AiOutlineClockCircle />
                  <p>5:30Hr</p>
                </div>
                <button className="bg-[#5927E5] text-white px-2 py-1 rounded text-sm">
                  See Details
                </button>
              </div>
              <div className="bg-white text-[#5927E5] px-2 py-4 flex gap-1 items-center rounded-md w-fit">
                <TbBrandNextjs style={{ fontSize: "50px" }} />
                <div className="w-fit">
                  <h1 className="text-xl">NextJs</h1>
                  <p className=" text-xs text-end">Alex Carry</p>
                </div>
                <div className="mx-5 flex items-center gap-1">
                  <AiOutlineClockCircle />
                  <p>5:30Hr</p>
                </div>
                <button className="bg-[#5927E5] text-white px-2 py-1 rounded text-sm">
                  See Details
                </button>
              </div> */
              