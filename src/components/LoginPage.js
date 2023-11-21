import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import undraw2 from "../assets/undraw2.svg";
import LogoSvg from "../assets/LogoSvg.svg";
import { ColorRing } from "react-loader-spinner";
import axios from "axios";

const LoginPage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [status, setstatus] = useState(false);
  const [check, setcheck] = useState(false);
  const navigate = useNavigate();

  const handleCheck = (e) => {
    setcheck(e.target.checked);
  };

  const handleLogin = async () => {
    setstatus(true);
    if (!email || !password) {
      seterror("All feilds required");
      setstatus(false);
      return;
    }
    const res = await fetch(
      `http://localhost:5000/${check ? "login-trainer-data" : "login-data"}`,
      // `https://mern-backend-z9pr.onrender.com/${check ? "login-trainer-data" : "login-data"
      // }`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await res.json();
    //console.log(data);
    if (data.loginStatus === "Success") {
      if (data.id.startsWith("trainer")) {
        Cookies.set("trainerId", data._id, { expires: 10 });
        navigate("/Trainer");
      } else {
        Cookies.set("userId", data._id, { expires: 10 });
        navigate("/Dashboard");
      }
    } else {
      seterror(data.error);
      setstatus(false);
    }
  };
  const token = Cookies.get("userId");
  if (token !== undefined) {
    return <Navigate to="/Dashboard" />;
  }
  const trainerToken = Cookies.get("trainerId");
  if (trainerToken !== undefined) {
    return <Navigate to="/Trainer" />;
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
            onChange={(e) => setemail(e.target.value)}
            value={email}
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            className="input"
          />
          <button
            className="flex justify-center bg-green-600 text-white py-1 my-2 rounded"
            onClick={handleLogin}
          >
            {status ? (
              <ColorRing
                visible={true}
                height="29"
                width="29"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["white", "white", "white", "white", "white"]}
              />
            ) : (
              "Login"
            )}
          </button>
        </div>
        <div className="flex justify-end gap-1 my-1">
          <input type="checkbox" className="" onClick={handleCheck} />
          <p className="text-xs text-[#5927E5]">Login as trainer</p>
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
};

export default LoginPage;
