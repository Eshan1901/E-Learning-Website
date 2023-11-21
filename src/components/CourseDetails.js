import Navbar from "./Navbar";
import USerSidebar from "./UserSidebar";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import Cookies from "js-cookie";
import axios from "axios";

const CourseDetails = () => {
  const [courseDetails, setcourseDetails] = useState({})
  const [status, setstatus] = useState(false)
  const param = useParams()
  const { courserId } = param;
  const getDetails = async () => {
    const res = await fetch(
      `https://mern-backend-z9pr.onrender.com/courses/${courserId}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await res.json()
    setcourseDetails(data)
    console.log(data)
    setstatus(true)
  }
  useEffect(() => {
    getDetails()
    return () => { }
  }, [])
  console.log(courseDetails);

  const addToWishlist = async () => {
    const userId = Cookies.get("userId");
    console.log(userId, courserId);
    const wishlistData = {
      userId,
      courserId
    }
    const response = await axios.post("https://mern-backend-z9pr.onrender.com/wishlistData",wishlistData);
  }
  const renderView = () => {
    if (status) {
      const { name, teacher_name, ratings, description, time_to_complete, image_url } =
        courseDetails;
      return (
        <>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl">{name}</h1>
              <p className="text-sm">By {teacher_name}</p>
            </div>
            <div className="rounded-lg flex items-center gap-1 bg-white px-2 py-2 text-[#5927E5]">
              <AiOutlineClockCircle />
              <p className="text-xs font-medium">{time_to_complete}</p>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2 w-fit">
            <p className="text-lg">{ratings}</p>
            <div className="flex gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
          </div>
          <div className="mt-10 hover:text-white text-gray-300">
            <h1 className="text-xl my-5">What you'll learn</h1>
            <p className=" w-[1000px]">{description}</p>
            <p className=" w-[1000px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className=" w-[1000px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className=" w-[1000px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex justify-end gap-10 my-5">
            <button className="text-white">
              <BsBagCheck style={{ fontSize: "25px" }} onClick={addToWishlist} />
            </button>
            <button className="bg-white text-[#5927E5] px-8 py-2 rounded-lg">
              Register
            </button>
          </div>
        </>
      );
    }
    else {
      return (
        <div className="h-full flex justify-center items-center ">
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
          {renderView()}
        </div>
      </div>
    </>
  );
}

export default CourseDetails
