import Logo from "../assets/street suite logo-04.png";
import im1 from "../assets/ring-svgrepo-com (2).svg";
import im2 from "../assets/graduate-cap-svgrepo-com.svg";
import im3 from "../assets/settings-gear-combination-svgrepo-com.svg";
import im4 from "../assets/folder-svgrepo-com.svg";
import im5 from "../assets/chart-column-grow-svgrepo-com.svg";
import im6 from "../assets/avatar-svgrepo-com.svg";
const LSide = () => {
  return (
    <nav className="LNav flex flex-col justify-between items-center navbar hover:w-[14%] group fixed h-full bg-[#181818] w-[6%] z-[2]">
      <div className="mt-[8%] bg-transparent h-[45%] flex flex-col justify-around">
        <img className="w-4/5 mx-auto my-0" src={Logo} alt="Logo" />
        <div className="flex flex-col items-center h-[60%] justify-between group-hover:items-start group-hover:ml-12">
          <div className="i1 flex text-white items-center">
            <img
              className="w-[25px] md:w-[35px] group-hover:w-[25px] "
              src={im1}
              alt="Ring icon"
            />
            <h6 className="poppins-semibold ml-3 hidden group-hover:block">
              Alerts
            </h6>
          </div>
          <div className="flex text-white items-center ">
            <img
              className="w-[25px] md:w-[35px]  group-hover:w-[25px] "
              src={im2}
              alt=""
            />
            <h6 className="poppins-semibold ml-3 hidden group-hover:block">
              Training
            </h6>
          </div>
          <div className="CSoon flex hover:bg-[#3375b3] text-[#5d5d5d] items-center ">
            <h3 className="hidden text-white text-[15px]">Comming Soon</h3>
            <img
              className=" w-[25px] md:w-[35px] group-hover:w-[25px] "
              src={im3}
              alt=""
            />
            <h6 className="poppins-semibold ml-3 hidden group-hover:block">
              Automation
            </h6>
          </div>
          <div className="CSoon flex hover:bg-[#3375b3] text-[#5d5d5d] items-center ">
            <h3 className="hidden text-white text-[15px]">Comming Soon</h3>

            <img
              className="w-[25px] md:w-[35px]  group-hover:w-[25px] "
              src={im4}
              alt=""
            />
            <h6 className="poppins-semibold ml-3 hidden group-hover:block">
              Portfolio
            </h6>
          </div>
          <div className="CSoon flex hover:bg-[#3375b3] text-[#5d5d5d] items-center ">
            <h3 className="hidden text-white text-[15px]">Comming Soon</h3>

            <img
              className="w-[25px] md:w-[35px]  group-hover:w-[25px]"
              src={im5}
              alt=""
            />
            <h6 className="poppins-semibold ml-3 hidden group-hover:block">
              Trading
            </h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col group-hover:m-5">
        <div className="flex flex-row mx-2">
          <img className="md:w-11 w-8 mb-4" src={im6} alt="" />
          <div className="ml-2">
            <h4 className="text-white hidden group-hover:block">Moni Roy</h4>
            <h6 className="text-white hidden group-hover:block">Beginner</h6>
          </div>
        </div>
        <h6 className="hidden text-slate-600 group-hover:block mt-3">
          Street Suite. 2.0
        </h6>
      </div>
    </nav>
  );
};

export default LSide;
