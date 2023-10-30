
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import undraw2 from "../assets/undraw2.svg";
import LogoSvg from "../assets/LogoSvg.svg";
<<<<<<< HEAD
import { ColorRing } from "react-loader-spinner";

=======
import axios from "axios";
>>>>>>> f5f3c75774f8fa49d931afc85f41f8d6548c987f

import { Link } from 'react-router-dom'

const Register = () => {
  const [error, seterror] = useState("");
<<<<<<< HEAD
  const [status, setstatus] = useState(false);

  const navigate=useNavigate()

  const handleSignup = async () => {
    setstatus(true);
    const res = await fetch("http://localhost:5000/register-data", {
      method: "POST",
      headers: {
        "Content-type":"application/json"
      },
      body: JSON.stringify({
        name,email,password
      })
    });
    const data = await res.json()
    // console.log(data)
    if (data.result === "Registered") {
      seterror("");
      navigate("/Login");

    } else {
      seterror(data.error);
      setstatus(false);

    }
    
=======
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate=useNavigate();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = async () => {
    if (data.name !== "" && data.email !== "" && data.password !== "") {
      var sample = await getData();
      sample = JSON.parse(sample);
      var foundEmail = 0;
      for (let i = 0;i < sample.length;i++) {
        if (sample[i].email === data.email) {
          foundEmail = foundEmail + 1;
        }
      }
      if (foundEmail > 0) {
        seterror("Email alredy exist");
      }
      else {
        navigate("/Login");
        try {
          await axios.post("http://localhost:5000/register-data", data, {
            headers: {
              'Content-Type': 'application/json',
            }
          }).then(response => {
            if (response.status === 200) {
              navigate("/")
            }
          });
          navigate("/");
        } catch (e) {
          console.log(e);
        }
      }
    }
    else {
      seterror("All flieds are required");
    }
>>>>>>> f5f3c75774f8fa49d931afc85f41f8d6548c987f
  };

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user-data");
      if (response.status !== 200) {
        throw new Error(`Network response error (HTTP ${response.status}): ${response.statusText}`);
      }
      const userData = response.data;
      return userData;
    } catch (error) {
      console.log('Fetch error:', error);
    }
  }

  return (
    <div className="grid md:grid-flow-col place-items-center h-screen">
      <div className="md:flex hidden">
        <img src={undraw2} width={450} alt="Illustration" />
      </div>
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        className=" shadow-2xl p-6 rounded-2xl"
      >
        <h1 className=" text-center mb-4 text-lg font-bold text-green-600">
          Details
        </h1>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="input"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input"
            onChange={handleChange}
          />
          <button
<<<<<<< HEAD
            className="flex justify-center bg-green-600 text-white py-1 my-2 rounded"
            onClick={handleSignup}
=======
            className="bg-green-600 text-white py-1 my-2"
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
              "Signup"
            )}
          </button>
        </div>
        {error && (
          <p className="rounded px-2 py-1 bg-red-500 w-fit  text-white text-sm my-3">
            {error}
          </p>
        )}
        <Link to="/Login">
          {" "}
          <p className="text-right text-sm mt-3">
            Already have an account?<span className="underline">Login</span>
          </p>
        </Link>
      </motion.div>
    </div>
  );
};

export default Register;