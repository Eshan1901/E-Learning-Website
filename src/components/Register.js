
import { motion } from "framer-motion";
import { useState } from "react";
import undraw2 from "../assets/undraw2.svg";
import LogoSvg from "../assets/LogoSvg.svg";

import { Link } from 'react-router-dom'

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");

  const handleSignup = async () => {
    // if (!name || !email || !password) {
    //   seterror("All fields are necessary");
    //   return;
    // }

    // const res = await fetch("/api/userExists", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     password,
    //   }),
    // });

    // if (res.status !== 200) {
    //   seterror("User Already Exists");
    //   return;
    // }
    // const response = await fetch("/api/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     password,
    //   }),
    // });
    // if (response.ok) {
    //   console.log("User Created");
    //   setemail("");
    //   seterror("");
    //   setpassword("");
    //   setname("");
    //   router.push("/");
    // } else {
    //   console.log("error");
    // }
  };
  return (
    <div className="grid md:grid-flow-col place-items-center h-screen">
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
            placeholder="Name"
            onChange={(e) => setname(e.target.value)}
            value={name}
            className="input"
          />
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
            className=" bg-green-600 text-white py-1 my-2 rounded"
            onClick={handleSignup}
          >
            Signup
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