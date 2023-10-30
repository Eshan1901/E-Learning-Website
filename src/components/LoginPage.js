import { useState } from "react";
import { useNavigate,Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import undraw2 from '../assets/undraw2.svg'
import LogoSvg from "../assets/LogoSvg.svg";



const LoginPage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate();
  
  const token=Cookies.get("token")
  const handleLogin = () => {
    // Cookies.set("token","abc",{expires:10})
    navigate("/Dashboard");
  };
  if (token !== undefined) {
   return <Navigate to='/Dashboard'/>
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
            // onChange={(e) => setemail(e.target.value)}
            // value={email}
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            // onChange={(e) => setpassword(e.target.value)}
            // value={password}
            className="input"
          />
          <button
            className=" bg-green-600 text-white py-1 my-2 rounded"
            onClick={handleLogin}
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
