import LogoSvg from "../assets/LogoSvg.svg";
import {AiOutlineSearch} from 'react-icons/ai'
const Navbar = () => {
    return (
      <div className="flex justify-between items-center mx-10 px-10 mt-6 h-fit">
        <img src={LogoSvg} width={150} />
        <div className="w-1/4 flex items-center">
          <input
            className=" focus:outline-none border-b-2 border-[#5927E5]  w-full px-3 py-1"
            placeholder="Search Course"
          />
          <AiOutlineSearch
            style={{ color: "#5927E5", fontSize: "25px" }}
          />
        </div>
      </div>
    );
}
export default Navbar