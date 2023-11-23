import React, { useState } from "react";
import TNavbar from "./TNavbar";
import TSidebar from "./TSideBar";
import axios from "axios";
import Cookies from "js-cookie";

const TAddCourse = () => {
  const [data, setData] = useState({
    course_name: "",
    title: "",
    description: "",
    duration: "",
    trainerId: Cookies.get("trainerId")
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://mern-backend-z9pr.onrender.com/newcourse",data);
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TNavbar />
      </div>
      <div className="h-screen flex justify-center items-center px-10 py-10 gap-4">
        <div className="hidden md:grid bg-white h-full w-1/6  rounded-3xl  shadow-xl">
          <TSidebar />
        </div>
        <div className="grow bg-[#5927E5] h-full rounded-3xl px-10 py-10 text-white flex flex-col">
          <h1 className="addcourse-heading">Add course</h1>
          <div className="addcourse-container">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Name :</label>
              <input type="text" name="course_name" className="form-control" id="exampleFormControlInput1" placeholder="Enter course name" style={{ width: "70%" }} onChange={handleChange}></input>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Title :</label>
              <input type="text" name="title" className="form-control" id="exampleFormControlInput1" placeholder="Enter title" style={{ width: "70%" }} onChange={handleChange}></input>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Description :</label>
              <textarea name="description" className="form-control" id="exampleFormControlTextarea1" rows="3" style={{ width: "70%" }} placeholder="Enter description" onChange={handleChange}></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Duration :</label>
              <input name="duration" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Duration" style={{ width: "70%" }} onChange={handleChange}></input>
            </div>
            <div className="btn-container">
              <button type="submit" className="button-btn-1">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TAddCourse;
