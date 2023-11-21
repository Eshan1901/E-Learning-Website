import LogoSvg from "../../assets/LogoSvg.svg";
const TNavbar = () => {
  return (
    <div className="flex justify-between items-center mx-10 px-10 mt-6 h-fit">
      <img src={LogoSvg} width={150} />
    </div>
  );
};
export default TNavbar;
