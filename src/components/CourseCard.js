import { AiOutlineClockCircle } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb"
import { Link } from "react-router-dom";

const CourseCard = ({ data }) => {
    const { id, trainer, duration, iconUrl, courseTitle } = data;

  return (
    <Link to={`/Course/${id}`} className="w-fit">
      <div className="bg-[#5927E5] text-white border-2 hover:bg-white hover:text-[#5927E5] hover:border-[#5927E5] px-2 py-4 flex gap-1 items-center rounded-md w-fit ">
        <TbBrandNextjs style={{ fontSize: "50px" }} />
        <div className="w-fit">
          <h1 className="text-xl">{courseTitle}</h1>
          <p className=" text-xs text-end">{trainer}</p>
        </div>
        <div className="mx-5 flex items-center gap-1">
          <AiOutlineClockCircle />
          <p>{duration}</p>
        </div>
        <button className="bg-[#5927E5] text-white px-2 py-1 rounded text-sm">
          See Details
        </button>
      </div>
    </Link>
  );
};

export default CourseCard;
