import Cookies from "js-cookie";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsBagCheck, BsGraphUpArrow, BsBook } from "react-icons/bs";
import { CiLogout } from 'react-icons/ci'
import { Link, useNavigate } from "react-router-dom";
const USerSidebar = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    Cookies.remove('userId')
    navigate('/Login')
  }
  return (
    <div className="flex flex-col justify-between items-start h-full py-20 px-3">
      <div className="w-full flex flex-col gap-5">
        <Link to="/Dashboard">
          <button className="bg-white text-black flex hover:bg-[#5927E5] hover:text-white items-center w-full rounded-md px-4 py-2">
            <AiOutlineHome style={{ fontSize: "20px" }} />
            <p className="ml-5  text-lg font-semibold">Home</p>
          </button>
        </Link>
        <Link to='/Courses'>
          <button className="bg-white text-black flex hover:bg-[#5927E5] hover:text-white items-center w-full rounded-md px-4 py-2">
            <BsBook style={{ fontSize: "20px" }} />
            <p className="ml-5  text-lg font-semibold">Courses</p>
          </button>
        </Link>
        <Link to="/Wishlist">
          <button className="bg-white text-black flex hover:bg-[#5927E5] hover:text-white items-center w-full rounded-md px-4 py-2">
            <BsBagCheck style={{ fontSize: "20px" }} />
            <p className="ml-5  text-lg font-semibold">Wish List</p>
          </button>
        </Link>
        <button className="bg-white text-black flex hover:bg-[#5927E5] hover:text-white items-center w-full rounded-md px-4 py-2">
          <BsGraphUpArrow style={{ fontSize: "20px" }} />
          <p className="ml-5  text-lg font-semibold">My Journey</p>
        </button>
      </div>
      <div className="w-full flex flex-col gap-5 border-t-2 border-t-[#5927E5] pt-10">
        <button className="bg-white text-black flex hover:bg-[#5927E5] hover:text-white items-center w-full rounded-md px-4 py-2">
          <AiOutlineUser style={{ fontSize: "20px" }} />
          <p className="ml-5  text-lg font-semibold">Profile</p>
        </button>
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
}

export default USerSidebar;
