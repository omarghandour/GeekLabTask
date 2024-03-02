import { useState } from "react";
import TNav from "./TNav";
import im1 from "../assets/price-tag-3-svgrepo-com.svg";
import im2 from "../assets/paper-svgrepo-com.svg";
import im3 from "../assets/chart-line-solid-svgrepo-com.svg";
import im4 from "../assets/money-dollar-svgrepo-com.svg";

const Middle = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (index: any) => {
    setExpandedItem((prev) => (prev === index ? null : index));
  };
  const AlertsArray: JSX.Element[] = [];
  const n: String = "NTFLX";
  const red: string = "#D94111";
  const green: string = "#118F4B";
  const colorArray: string[] = [
    red,
    green,
    green,
    red,
    green,
    red,
    red,
    red,
    red,
    red,
    red,
    red,
    red,
    red,
    red,
    red,
    red,
    red,
    red,
    red,
  ];

  const namesArray: String[] = [
    "AMZN",
    "TSLA",
    "ABQQ",
    "MSFT",
    "PYPL",
    n,
    n,
    n,
    n,
    n,
    n,
    n,
    n,
    n,
    n,
    n,
    n,
    n,
    n,
    n,
  ];
  const l: String = "Low Risk";
  const h: String = "High Risk";
  const riskArray: String[] = [
    l,
    h,
    h,
    h,
    h,
    l,
    l,
    l,
    l,
    l,
    h,
    h,
    h,
    h,
    l,
    h,
    l,
    h,
    l,
    l,
  ];
  for (let i = 0; i < 20; i++) {
    AlertsArray.push(
      <div key={i}>
        <div
          onClick={() => toggleExpand(i)}
          className={`bg-[#343434]  ${
            expandedItem === i
              ? "   justify-between"
              : "h-16 flex items-center justify-center"
          } rounded-lg my-4  flex-col flex cursor-pointer MImg `}
        >
          <div
            className={`poppins-regular text-white flex items-center ${
              expandedItem === i
                ? "bg-[#53ACFF]  h-16 w-full m-0 rounded-lg"
                : "transition-none"
            }  w-[98%] mx-auto `}
          >
            <div className="brder flex items-center w-1/4 text-start justify-evenly">
              <img className="w-8" src={im1} alt="" />
              {namesArray[i]}
            </div>
            <div className="brder flex items-center w-1/4 text-start justify-evenly">
              <img className="w-8" src={im2} alt="" />
              200
            </div>
            <div className="brder flex items-center w-1/4 text-start justify-evenly">
              <img className="w-8" src={im3} alt="" />
              <h3 style={{ color: `${colorArray[i]}` }}>-0.25 %</h3>
            </div>
            <div className=" flex items-center w-1/4 text-start justify-evenly">
              <img className="w-8" src={im4} alt="" />
              {riskArray[i]}
            </div>
          </div>
          <div
            className={`${
              expandedItem === i ? "block w-[90%] my-6 mx-auto" : " hidden"
            }`}
          >
            <h3 className="text-white mb-3">
              <span className="poppins-bold text-white ">$TSLA</span>
              just announced an acquisition of{" "}
              <span className="poppins-bold text-white ">$NFLX</span>
              at <span className="poppins-bold text-white ">$200 B.</span>
            </h3>
            <p className="text-white">
              This is an
              <span className=" underline text-[#5d9cff]">
                arbitrage opportunity,
              </span>
              with max gain being %X if the deal closes, but the possible risk
              is %Y if the deal fails, if the deal success is % and therefore
              the recommended play is{" "}
              <span className=" underline text-[#5d9cff]">long/short</span>
              $ABC
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="Middle pr-2 ml-[9%] mt-[1%] lg:w-[65%] md:w-[50%] h-[98%] bg-transparent overflow-y-scroll">
      <TNav />
      {AlertsArray}
    </div>
  );
};

export default Middle;
