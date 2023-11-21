import Cookies from "js-cookie";
import { AiOutlineHome } from "react-icons/ai";
import {  BsBook } from "react-icons/bs";
import { FiFolderPlus } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
const TSidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("trainerId");
    navigate("/Login");
  };
  return (
    <div className="flex flex-col justify-between items-start h-full py-20 px-3">
      <div className="w-full flex flex-col gap-5">
        <Link to="/Trainer">
          <button className="bg-white text-black flex hover:bg-[#5927E5] hover:text-white items-center w-full rounded-md px-4 py-2">
            <AiOutlineHome style={{ fontSize: "20px" }} />
            <p className="ml-5  text-lg font-semibold">Home</p>
          </button>
        </Link>
        <Link to="/AddCourse">
          <button className="bg-white text-black flex hover:bg-[#5927E5] hover:text-white items-center w-full rounded-md px-4 py-2">
            <FiFolderPlus style={{ fontSize: "20px" }} />
            <p className="ml-5  text-lg font-semibold">Add Course</p>
          </button>
        </Link>
      </div>
      <div className="w-full flex flex-col gap-5 border-t-2 border-t-[#5927E5] pt-10">
        <button
          className="bg-white text-black flex hover:bg-[#5927E5] hover:text-white items-center w-full rounded-md px-4 py-2"
          onClick={handleLogout}
        >
          <CiLogout style={{ fontSize: "20px" }} />
          <p className="ml-5  text-lg font-semibold">Log out</p>
        </button>
      </div>
    </div>
  );
};

export default TSidebar;
