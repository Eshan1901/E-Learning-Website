import axios from "axios";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

const TCourseCard = ({ data,trainerId }) => {
    const { id, teacher_name, name, time_to_complete } =
      data;
    const handleDelete = async() => {
        try {
            const response = await axios.post(`https://mern-backend-z9pr.onrender.com/delete/${id}`,{trainerId});
        }
        catch (error) {

        }
    }

    

  return (
    <div  className="w-full h-fit">
      <div className="bg-[#5927E5] text-white border-2 hover:bg-white hover:text-[#5927E5] hover:border-[#5927E5] px-2 py-4 flex justify-between gap-1 items-center rounded-md ">
        <div>
          <h1 className="text-base">{name}</h1>
          <p className=" text-xs">{teacher_name}</p>
        </div>
        <div className=" flex items-center gap-1">
          <AiOutlineClockCircle />
          <p className="text-xs">{time_to_complete}</p>
        </div>
        <button onClick={handleDelete}><MdOutlineDelete style={{fontSize:"25px"}}/></button>
      </div>
    </div>
  );
};

export default TCourseCard;
