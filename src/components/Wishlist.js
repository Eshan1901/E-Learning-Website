import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import WishlistDashboard from "./WishlistDashboard";
import CourseCard from "./CourseCard";
import USerSidebar from "./UserSidebar";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

/*
function creatCard(data) {
    return <CourseCard id={data.id} teacher_name = {data.teacher_name} name= {data.name} time_to_complete = {data.time_to_complete}/>
}
*/
function Wishlist(props) {
  const [userData, setUserData] = useState({});
  const [status, setstatus] = useState(false);
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    // Access the "userId" cookie
    const userId = Cookies.get("userId");
    //console.log("User ID from cookie:", userId);

    // Call the getData function after getting userId
    getData(userId);
  }, []);

  const getData = async (userId) => {
    try {
      const fetchedCourseData = [];
      const sampleData = await axios.post(
        `https://mern-backend-z9pr.onrender.com/user/${userId}`
      );
      setUserData(sampleData.data.cart);
      const cartData = sampleData.data.cart;
      for (let i = 0; i < cartData.length; i++) {
        try {
          const courseData = await axios.post(
            `https://mern-backend-z9pr.onrender.com/courses/${cartData[i]}`
          );
          const courseItem = courseData.data;
          fetchedCourseData.push(courseItem);
        } catch (error) {
          console.error("Error fetching course data:", error.message);
        }
      }
      setCourseData(fetchedCourseData);
      setstatus(true);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const renderView = () => {
    if (status) {
      if (courseData.length === 0) {
        return (
          <div className="h-[60vh] flex justify-center items-center ">
            <h1>No Courses are added to wishlist</h1>
          </div>
        );
      } else {
        return (
          <div className="mt-8 grid grid-cols-3 place-items-start gap-2">
            {courseData.map((i) => {
              return <CourseCard data={i} />;
            })}
          </div>
        );
      }
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
    <div>
      <div className=" h-screen flex justify-center items-center px-10 py-10 gap-4">
        <div className="hidden md:grid bg-white h-full w-1/6  rounded-3xl  shadow-xl">
          <USerSidebar />
        </div>
        <div className="grow bg-[#5927E5] h-full rounded-3xl px-10 pt-10 text-white">
          <div className="flex justify-between mb-10">
            <div>
              <h1 className="text-xl border-b-2 w-fit pb-1 ">Wishlist</h1>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-3 bg-white text-[#5927E5] px-5 py-3 rounded-lg">
                <h1 className="text-4xl font-semibold">11</h1>
                <p>Wish List Courses</p>
              </div>
            </div>
          </div>
          {renderView()}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
