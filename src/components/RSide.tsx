import { useState } from "react";
import im1 from "../assets/search-svgrepo-com.svg";
import im2 from "../assets/graduate-cap-svgrepo-com.svg";
import im3 from "../assets/graduate-cap-svgrepo-com.svg";
import im4 from "../assets/graduate-cap-svgrepo-com.svg";
import im5 from "../assets/graduate-cap-svgrepo-com.svg";
const RSide = () => {
  // const filters: string[] = [];
  const [items, setItems] = useState<string[]>([]);
  const [newitems, setNewitems] = useState<string>("");
  const Click = () => {
    if (newitems.trim() !== "") {
      setItems([...items, newitems]);
      setNewitems("");
    }
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="RSide w-1/4 mt-[1%] h-[93%] bg-[#181818] rounded-lg text-white">
      <h1 className="poppins-bold text-center p-5 text-2xl">Filters</h1>
      <div className=" w-[90%] mx-auto">
        <div className="flex justify-between ">
          <span>Applied Filters</span>
          <span
            className=" cursor-pointer hover:bg-[#5d9cff] hover:px-1 hover:rounded-md"
            onClick={() => {
              setItems([]);
            }}
          >
            Clear All
          </span>
        </div>
        <div
          style={{ overflow: "overlay" }}
          className="flex items-center w-full bg-[#202020] h-9 rounded-md mt-1 "
        >
          {items?.map((filter: any, index: any) => (
            <div
              id={filter}
              key={index}
              className="bg-[#5d9cff] hover:bg-[#355c9c] text-black poppins-regular p-1 m-1 rounded-md flex flex-row cursor-default"
            >
              <div className=" mr-2">{filter}</div>
              <div
                onClick={() => {
                  handleRemoveItem(index);
                }}
                className="mr-2 cursor-pointer"
              >
                x
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 w-full bg-[#202020] p-4 rounded-md flex flex-col">
          <div>
            <h1 className="poppins-bold text-start">Stock</h1>
            <div className="search w-full flex relative items-center">
              <input
                className="bg-[#343434] border-none w-full py-[2px] px-4 rounded-md"
                type="text"
                placeholder="$ TICKER"
              />
              <img className="absolute left-[93%] w-[4%]" src={im1} alt="" />
            </div>
          </div>
          <div className=" p-4">
            <h1 className="poppins-bold text-start">Industry</h1>
            <div style={{ overflow: "overlay" }} className="flex">
              <div className="poppins-SemiBold border-l border-white px-4 my-2 flex flex-col gap-2">
                <div className="flex hover:bg-[#5d9cff] hover:rounded-md hover:p-1 p-1">
                  <img className="w-5" src={im2} alt="" />
                  <input
                    className="hidden"
                    id="Health Care"
                    type="radio"
                    value="Health Care"
                    checked={items.includes("Health Care")}
                    onChange={() => setNewitems("Health Care")}
                  />
                  <label className="mx-2 text-xs" htmlFor="Health Care">
                    Health Care
                  </label>
                </div>
                <div className="flex hover:bg-[#5d9cff] hover:rounded-md hover:p-1 p-1">
                  <img className="w-5" src={im3} alt="" />
                  <input
                    className="hidden"
                    id="Materials"
                    type="radio"
                    value="Materials"
                    checked={items.includes("Materials")}
                    onChange={() => setNewitems("Materials")}
                  />
                  <label className="mx-2 text-xs" htmlFor="Materials">
                    Materials
                  </label>
                </div>
                <div className="flex hover:bg-[#5d9cff] hover:rounded-md hover:p-1 p-1">
                  <img className="w-5" src={im4} alt="" />
                  <input
                    className="hidden"
                    id="Energy"
                    type="radio"
                    value="Energy"
                    checked={items.includes("Energy")}
                    onChange={() => setNewitems("Energy")}
                  />
                  <label className="mx-2 text-xs" htmlFor="Energy">
                    Energy
                  </label>
                </div>
                <div className="flex hover:bg-[#5d9cff] hover:rounded-md hover:p-1 p-1">
                  <img className="w-5" src={im5} alt="" />
                  <input
                    className="hidden"
                    id="Consumer Discertionary"
                    type="radio"
                    value="Consumer Discertionary"
                    checked={items.includes("Consumer Discertionary")}
                    onChange={() => setNewitems("Consumer Discertionary")}
                  />
                  <label
                    className="mx-2 text-xs"
                    htmlFor="Consumer Discertionary"
                  >
                    Consumer Discertionary
                  </label>
                </div>
                <div className="flex hover:bg-[#5d9cff] hover:rounded-md hover:p-1 p-1">
                  <img className="w-5" src={im5} alt="" />
                  <input
                    className="hidden"
                    id="Consumer Staples"
                    type="radio"
                    value="Consumer Staples"
                    checked={items.includes("Consumer Staples")}
                    onChange={() => setNewitems("Consumer Staples")}
                  />
                  <label className="mx-2 text-xs" htmlFor="Consumer Staples">
                    Consumer Staples
                  </label>
                </div>
                <div className="flex hover:bg-[#5d9cff] hover:rounded-md hover:p-1 p-1">
                  <img className="w-5" src={im5} alt="" />
                  <input
                    className="hidden"
                    id="Real Estate"
                    type="radio"
                    value="Real Estate"
                    checked={items.includes("Real Estate")}
                    onChange={() => setNewitems("Real Estate")}
                  />
                  <label className="mx-2 text-xs" htmlFor="Real Estate">
                    Real Estate
                  </label>
                </div>
              </div>

              <div className="poppins-SemiBold border-l border-white px-4 my-2 flex flex-col gap-2 h-full">
                <div className="flex hover:bg-[#5d9cff] hover:rounded-md hover:p-1 p-1">
                  <img className="w-5" src={im5} alt="" />
                  <input
                    className="hidden"
                    id="IT"
                    type="radio"
                    value="IT"
                    checked={items.includes("IT")}
                    onChange={() => setNewitems("IT")}
                  />
                  <label className="mx-2 text-xs" htmlFor="IT">
                    IT
                  </label>
                </div>
                <div className="flex hover:bg-[#5d9cff] hover:rounded-md hover:p-1 p-1">
                  <img className="w-5" src={im5} alt="" />
                  <input
                    className="hidden"
                    id="Communication"
                    type="radio"
                    value="Communication"
                    checked={items.includes("Communication")}
                    onChange={() => setNewitems("Communication")}
                  />
                  <label className="mx-2 text-xs" htmlFor="Communication">
                    Communication
                  </label>
                </div>
                <div className="flex hover:bg-[#5d9cff] hover:rounded-md hover:p-1 p-1">
                  <img className="w-5" src={im5} alt="" />
                  <input
                    className="hidden"
                    id="Industrials"
                    type="radio"
                    value="Industrials"
                    checked={items.includes("Industrials")}
                    onChange={() => setNewitems("Industrials")}
                  />
                  <label className="mx-2 text-xs" htmlFor="Industrials">
                    Industrials
                  </label>
                </div>
                <div className="flex hover:bg-[#5d9cff] hover:rounded-md hover:p-1 p-1">
                  <img className="w-5" src={im5} alt="" />
                  <input
                    className="hidden"
                    id="Utilities"
                    type="radio"
                    value="Utilities"
                    checked={items.includes("Utilities")}
                    onChange={() => setNewitems("Utilities")}
                  />
                  <label className="mx-2 text-xs" htmlFor="Utilities">
                    Utilities
                  </label>
                </div>
                <div className="flex hover:bg-[#5d9cff] hover:rounded-md hover:p-1 p-1">
                  <img className="w-5" src={im5} alt="" />
                  <input
                    className="hidden"
                    id="Financials"
                    type="radio"
                    value="Financials"
                    checked={items.includes("Financials")}
                    onChange={() => setNewitems("Financials")}
                  />
                  <label className="mx-2 text-xs" htmlFor="Financials">
                    Financials
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col justify-between px-7 w-full">
              <div className="flex justify-between">
                <h3>Market Cap</h3>
                <h3>Risk Level</h3>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <div>
                    <input
                      className="mr-3 bg-slate-600"
                      id="Micro"
                      type="radio"
                    />
                    <label htmlFor="Micro">Micro</label>
                  </div>
                  <div>
                    <input id="Small" className="mr-3" type="radio" />
                    <label htmlFor="Small">Small</label>
                  </div>
                  <div>
                    <input id="Large" className="mr-3" type="radio" />
                    <label htmlFor="Large">Large</label>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>
                    <input className="mr-3" id="low" type="radio" />
                    <label htmlFor="low">Low Risk</label>
                  </div>
                  <div>
                    <input id="Mid" className="mr-3" type="radio" />
                    <label htmlFor="Mid">Mid Risk</label>
                  </div>
                  <div>
                    <input id="Low" className="mr-3" type="radio" />
                    <label htmlFor="Low">Low Risk</label>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="flex justify-between px-7 w-full">
              <h3 className="poppins-bold">Strategy</h3>
              <h3 className="poppins-bold">Asset</h3>
            </div>
            <div className="flex justify-between px-4 py-4">
              <div className="flex flex-col h-24 overflow-scroll">
                <span className=" p-2 poppins-regular ">Big Option Buys</span>
                <span className=" bg-[#5d9cff] rounded-md p-2 poppins-regular ">
                  Merger Arbitrage
                </span>
                <span className=" p-2 poppins-regular ">Short Reports</span>
              </div>
              <div className="flex flex-col h-24 overflow-scroll">
                <span className=" p-2 poppins-regular ">Stock</span>
                <span className=" bg-[#5d9cff] rounded-md p-2 poppins-regular ">
                  Options
                </span>
                <span className=" p-2 poppins-regular ">Futures</span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex justify-center p-4">
        <button
          className="poppins-bold w-[50%] p-1 text-2xl bg-[#5d9cff] rounded-md"
          onClick={Click}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default RSide;
