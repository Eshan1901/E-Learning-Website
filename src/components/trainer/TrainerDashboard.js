import React, { useState, useEffect } from "react";
import TNavbar from "./TNavbar";
import TSidebar from "./TSideBar";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import TCourseCard from "./TrainerCourseCard";
import axios from "axios";
import { Link } from "react-router-dom";

const TrainerDashboard = () => {

  const [trainerData, setTrainerData] = useState({});
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);

  const trainerId = Cookies.get('trainerId')

  useEffect(() => {
    getData();
  }, [trainerId]);

  if (trainerId === undefined) {
    return <Navigate to='/Login' />
  }

  const getData = async () => {
    try {
      const trainerData = await axios.post(`https://mern-backend-z9pr.onrender.com/trainer/${trainerId}`);
      setCourseData(trainerData.data);
    }
    catch (error) {
      console.log(error)
    }
  }

  const renderView = () => {
    if (courseData.length === 0) {
      return <div className="h-[50vh] flex flex-col justify-center items-center">
        <h1>Don't have any course</h1>
        <br />
        <Link to="/AddCourse" style={{textDecoration:"underline"}}>Add Course</Link>
      </div>
    }
    else {
      return (
        <div className="mt-8 grid grid-cols-3 place-items-start gap-2">
          {courseData.map((i) => (
            <TCourseCard data={i} trainerId={trainerId} />
          ))}
        </div>
      )
    }
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
            {renderView()}
          </div>

        </div>
      </div>
    </>
  );
};

export default TrainerDashboard;
