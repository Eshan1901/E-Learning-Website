import { AiOutlineClockCircle } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb"
import { Link } from "react-router-dom";

const CourseCard = ({ data }) => {
    const { id, teacher_name, name, time_to_complete } =
      data;

  return (
    <Link to={`/Course/${id}`} className="w-full h-fit">
      <div className="bg-[#5927E5] text-white border-2 hover:bg-white hover:text-[#5927E5] hover:border-[#5927E5] px-2 py-4 flex justify-between gap-1 items-center rounded-md ">
        <div>
          <h1 className="text-base">{name}</h1>
          <p className=" text-xs">{teacher_name}</p>
        </div>
        <div className=" flex items-center gap-1">
          <AiOutlineClockCircle />
          <p className="text-xs">{time_to_complete}</p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
