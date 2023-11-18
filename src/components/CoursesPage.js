import Navbar from "./Navbar";
import USerSidebar from "./UserSidebar";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { ColorRing } from "react-loader-spinner";


const CoursesPage = () => {
    const [status, setstatus] = useState(false);
    const [courseDetails, setcourseDetails] = useState({});
    const userId = Cookies.get("userId");
    const getCourseDetails = async () => {
      const res = await fetch(
        `https://mern-backend-z9pr.onrender.com/courses`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await res.json();
      setstatus(true);
      setcourseDetails(data);
    };

    useEffect(() => {
      getCourseDetails();
      return () => {};
    }, []);
    if (userId === undefined) {
      return <Navigate to="/Login" />;
    }
    const renderView = () => {
      if (status) {
        return (
          <div className="my-5 grid grid-cols-2 place-items-start gap-2">
            {courseDetails.map((i) => {
              return <CourseCard data={i} />;
            })}
          </div>
        );
      } else {
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
    };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className=" h-screen flex justify-center items-center px-10 py-10 gap-4">
        <div className="hidden md:grid bg-white h-full w-1/6  rounded-3xl shadow-xl">
          <USerSidebar />
        </div>
        <div className="grow bg-[#5927E5] h-full rounded-3xl px-10 pt-10 text-white overflow-y-scroll">
          <h1 className="text-xl border-b-2 w-fit pb-1 ">Our Courses</h1>
          {renderView()}
        </div>
      </div>
    </>
  );
}

export default CoursesPage
