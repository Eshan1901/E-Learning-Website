import Navbar from "./Navbar";
import USerSidebar from "./UserSidebar";


const CoursesPage = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className=" h-screen flex justify-center items-center px-10 py-10 gap-4">
        <div className="hidden md:grid bg-white h-full w-1/6  rounded-3xl  shadow-xl">
          <USerSidebar />
        </div>
        <div className="grow bg-[#5927E5] h-full rounded-3xl px-10 pt-10 text-white"></div>
      </div>
    </>
  );
}

export default CoursesPage
