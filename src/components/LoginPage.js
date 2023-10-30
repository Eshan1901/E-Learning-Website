import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import undraw2 from '../assets/undraw2.svg'
import LogoSvg from "../assets/LogoSvg.svg";
import { ColorRing } from "react-loader-spinner";


const LoginPage = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const [error, seterror] = useState("");
  const [status, setstatus] = useState(false)
  const navigate = useNavigate();
<<<<<<< HEAD
  const handleLogin = async () => {
    setstatus(true)
    const res = await fetch("http://localhost:5000/login-data", {
      method: "POST",
      headers: {
        "Content-type":"application/json"
      },
      body: JSON.stringify({
        email,password
      })
    });
    const data = await res.json()
    console.log(data)
    if (data.loginStatus === "Success") {
      Cookies.set("userId",data.id,{expires:10});
      navigate("/Dashboard");
    } else {
      seterror(data.error);
      setstatus(false)
    }
  };
  const token = Cookies.get("userId");
  if (token !== undefined) {
   return <Navigate to='/Dashboard'/>
=======

  const token = Cookies.get("token")
  const handleChange = async (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
>>>>>>> f5f3c75774f8fa49d931afc85f41f8d6548c987f
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
<<<<<<< HEAD
            onChange={(e) => setemail(e.target.value)}
            value={email}
=======
            onChange={handleChange}
            name="email"
>>>>>>> f5f3c75774f8fa49d931afc85f41f8d6548c987f
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
<<<<<<< HEAD
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            className="input"
          />
          <button
            className="flex justify-center bg-green-600 text-white py-1 my-2 rounded"
            onClick={handleLogin}
=======
            onChange={handleChange}
            name="password"
            className="input"
          />
          <button
            className=" bg-green-600 text-white py-1 my-2 rounded"
            onClick={handleSubmit}
>>>>>>> f5f3c75774f8fa49d931afc85f41f8d6548c987f
          >
            {status ? (
              <ColorRing
                visible={true}
                height="25"
                width="25"
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
