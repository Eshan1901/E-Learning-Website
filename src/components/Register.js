import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import undraw2 from "../assets/undraw2.svg";
import LogoSvg from "../assets/LogoSvg.svg";
import { Link } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [status, setstatus] = useState(false);
  const [check, setcheck] = useState(false);

  const navigate = useNavigate();

  const handleCheck = (e) => {
    setcheck(e.target.checked);
  };

  const handleSignup = async () => {
    if (!email || !password || !name) {
      seterror("All feilds required");
      return;
    }
    setstatus(true);

    const res = await fetch(
      `https://mern-backend-z9pr.onrender.com/${
        check ? "trainer-register-data" : "register-data"
      }`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );
    const data = await res.json();
    if (data.result === "Registered") {
      seterror("");
      navigate("/Login");
    } else {
      seterror(data.error);
      setstatus(false);
    }
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
            className="flex justify-center bg-green-600 text-white py-1 my-2 rounded"
            onClick={handleSignup}
          >
            {status ? (
              <ColorRing
                visible={true}
                height="30"
                width="30"
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
        <div className="flex justify-end gap-1 my-1">
          <input type="checkbox" className="" onClick={handleCheck} />
          <p className="text-xs text-[#5927E5]">Register as trainer</p>
        </div>
        {error && (
          <div className="flex justify-center">
            <p className=" bg-red-500 w-fit rounded px-2 py-1 text-white text-sm my-1">
              {error}
            </p>
          </div>
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
