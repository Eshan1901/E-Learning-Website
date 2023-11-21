import TNavbar from "./TNavbar";
import TSidebar from "./TSideBar";

const TAddCourse = () => {
  return (
    <>
      <div>
        <TNavbar />
      </div>
      <div className=" h-screen flex justify-center items-center px-10 py-10 gap-4">
        <div className="hidden md:grid bg-white h-full w-1/6  rounded-3xl  shadow-xl">
          <TSidebar />
        </div>
        <div className="grow bg-[#5927E5] h-full rounded-3xl px-10 py-10 text-white flex flex-col">
          <h1>Add course</h1>
          <div className="grow mt-5 flex flex-col gap-2 text-black text-base">
            <input className="input" placeholder="Name" />
            <input className="input" placeholder="Title" />
           <textarea className="textarea" placeholder="Description"></textarea>
            <input className="input" placeholder="Duration" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TAddCourse;
