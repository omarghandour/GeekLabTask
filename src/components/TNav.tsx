import im1 from "../assets/search-svgrepo-com.svg";
import im2 from "../assets/ring-svgrepo-com (1).svg";
const TNav = () => {
  return (
    <div className="TNav bg-transparent flex items-center justify-around h-[10%]">
      <h1 className="relative poppins-bold flex items-center text-white m-0 md:text-[35px] lg:text-[50px]  cursor-default">
        ALERTS
      </h1>
      <div className="search md:w-[50%] lg:w-[65%] flex relative items-center">
        <input
          className=" bg-[#343434] border-none w-full p-[15px] rounded-md"
          type="text"
          placeholder="Search By..."
        />
        <img
          className="absolute left-[93%] w-[4%]"
          src={im1}
          alt="Search icon"
        />
      </div>
      <img className="w-[5%]" src={im2} alt="Ring icon" />
    </div>
  );
};

export default TNav;
