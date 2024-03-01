const TNav = () => {
  return (
    <div className="TNav bg-transparent flex items-center justify-around h-[10%]">
      <h1 className="poppins-bold flex items-center text-white m-0 md:text-[35px] lg:text-[50px]  cursor-default">
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
          src="/src/assets/search-svgrepo-com.svg"
          alt="Search icon"
        />
      </div>
      <img
        className="w-[5%]"
        src="/src/assets/ring-svgrepo-com (1).svg"
        alt="Ring icon"
      />
    </div>
  );
};

export default TNav;
