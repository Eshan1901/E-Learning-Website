import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import WishlistDashboard from "./WishlistDashboard";
import CourseCard from "./CourseCard";
import USerSidebar from "./UserSidebar";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
function Profile() {

    const userId = Cookies.get("userId");
    const [userData,setUserData] = useState([]);    

    const getUserData = async() => {
        try {
            const foundUserData = await axios.post(`https://mern-backend-z9pr.onrender.com/user/${userId}`);
            setUserData(foundUserData.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserData();
        return ()=>{}
      },[])
    return (
        <div>
            <div className=" h-screen flex justify-center items-center px-10 py-10 gap-4">
                <div className="hidden md:grid bg-white h-full w-1/6  rounded-3xl  shadow-xl">
                    <USerSidebar />
                </div>
                <div className="grow bg-[#5927E5] h-full rounded-3xl px-10 pt-10 text-white">
                    <h1 className="profile-heading">Profile</h1>
                    <div className="img-container">
                        <div className="img">
                            <i class="fa-regular fa-user user-icon"></i>
                        </div>
                    </div>
                    
                    <div className="profile-container">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Name :</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" value={userData.name} style={{ width: "70%" }}></input>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address :</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" value={userData.email} style={{ width: "70%" }}></input>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Password :</label>
                            <input type="password" className="form-control" id="exampleFormControlInput1" value={userData.password} style={{ width: "70%" }}></input>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;