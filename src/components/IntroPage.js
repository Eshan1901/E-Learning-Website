import { useState } from 'react'
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'
import undraw3 from "../assets/undraw3.svg";
import undraw4 from "../assets/undraw4.svg";
import LogoSvg from "../assets/LogoSvg.svg"
import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai'


const IntroPage = () => {
    const [Img, setImg] = useState(true)
    const handleMotion = () => {
        setImg((prev)=>(!prev))
    }
    return (
      <div className="h-[90vh] grid place-items-center">
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ delay: 1 }}
          className="h-fit w-3/4 flex justify-between items-center shadow-2xl px-6 py-3 rounded-2xl"
        >
          <img src={LogoSvg} width={110}/>
          <div className="flex items-center">
            <Link to="/Login">
              <button className="bg-black border-black hover:bg-white hover:text-black  border-2 text-white px-3 py-1 mx-3">
                Login
              </button>
            </Link>
            <Link to='/Register'>
              <button className="bg-white border-black border-2 hover:bg-black hover:text-white text-black px-3 py-1 mr-4">
                Signup
              </button>
            </Link>
          </div>
        </motion.div>
        {Img && (
          <div className=" h-auto grid grid-flow-row md:grid-flow-col place-items-center gap-10">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={handleMotion}
              className=" bg-slate-700 px-2 py-2 rounded-full text-white"
            >
              <AiOutlineArrowLeft />
            </motion.button>
            <motion.div className="group  hover:bg-slate-200  h-80 w-auto shadow-2xl rounded-lg py-4 px-8 flex justify-center items-center ">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-96"
              >
                <h1 className=" group-hover:text-white text-3xl mb-2 font-bold">
                  Jump into learning for less
                </h1>
                <p className=" group-hover:text-black text-xs text-gray-400">
                  If you’re new to NxtLearn, we’ve got good news: For a limited
                  time, courses start at just ₹449 for new learners! Shop now.
                </p>
              </motion.div>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={undraw3}
                width={250}
              />
            </motion.div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={handleMotion}
              className=" bg-slate-700 px-2 py-2 rounded-full text-white"
            >
              <AiOutlineArrowRight />
            </motion.button>
          </div>
        )}
        {!Img && (
          <div className="h-auto grid grid-flow-row md:grid-flow-col place-items-center gap-10">
            <button
              onClick={handleMotion}
              className=" bg-slate-700 px-2 py-2 rounded-full text-white"
            >
              <AiOutlineArrowLeft />
            </button>
            <motion.div className=" group  hover:bg-slate-200  h-80 w-auto shadow-2xl rounded-lg py-4 px-8 flex justify-center items-center ">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-96"
              >
                <h1 className="group-hover:text-white text-3xl mb-2 font-bold">
                  Create and sell online courses from your website
                </h1>
                <p className="group-hover:text-black text-xs text-gray-400">
                  The best online course platform for creating, selling and
                  promoting your online courses. Stort monetizing your skills,
                  experiences and your audience
                </p>
              </motion.div>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={undraw4}
                width={250}
              />
            </motion.div>
            <button
              onClick={handleMotion}
              className=" bg-slate-700 px-2 py-2 rounded-full text-white"
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        )}
      </div>
    );
}

export default IntroPage
