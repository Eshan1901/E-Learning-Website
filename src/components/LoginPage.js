import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import undraw2 from '../assets/undraw2.svg'
import LogoSvg from "../assets/LogoSvg.svg";



const LoginPage = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const token = Cookies.get("token")
  const handleChange = async (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    var userdata;
    console.log(data.email,data.password);
    if (data.email !== "" && data.password !== "") {
      try {
        const response = await fetch("http://localhost:5000/user-data");
  
        if (response.status === 200) {
          userdata= await response.json();
        } else {
          console.log("Response status is not 200");
        }
      } catch (error) {
        console.error(error);
      }
      userdata = JSON.parse(userdata);
      var foundEmail = 0;
      var foundItem = null;
      for (let i = 0;i < userdata.length;i++) {
        if (data.email === userdata[i].email) {
          foundEmail = foundEmail + 1;
          foundItem = userdata[i];
        }
      }
      if (foundEmail === 1) {
        if (data.password === foundItem.password) {
          navigate("/")
        }
        else {
          seterror("Incorrect password!")
        }
      }
      else {
        seterror("Email not exits try register");
      }
    }
    else {
      seterror("All fileds are required");
    }
  }


  return (
    <div className="h-screen grid md:grid-flow-col place-items-center">
      <div className="md:flex hidden">
        <img src={undraw2} width={450} />
      </div>
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        className=" shadow-2xl p-6 rounded-2xl"
      >
        <div className="flex justify-center my-4">
          <img src={LogoSvg} width={100} />
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            className="input"
          />
          <button
            className=" bg-green-600 text-white py-1 my-2 rounded"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
        {error && (
          <div className="flex justify-center">
            <p className=" bg-red-500 w-fit rounded px-2 py-1 text-white text-sm my-1">
              {error}
            </p>
          </div>
        )}
        <Link to="/Register">
          {" "}
          <p className=" text-right text-sm mt-3">
            Dont have an account?<span className="underline">Signup</span>
          </p>
        </Link>
      </motion.div>
    </div>
  );
}

export default LoginPage
