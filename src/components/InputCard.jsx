import React, { useState } from "react";
import dollar from "../../src/assests/dollar.svg";
import person from "../assests/person.svg";

const InputCard = () => {
  const [tip, setTip] = useState(0);
  const [user, setUser] = useState(0);
  const tiping = ["5", "10", "15", "25", "50", "Custom"];
  const [customTip, setCustomTip] = useState("");

  const handleCustomTipChange = (event) => {
    setCustomTip(event.target.value);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setTip(value);
    }
  };

  const tipPercentage = (value) => {
    console.log(value);
    // You can perform other actions with the value here
  };

  const handleCustomTipBlur = () => {
    if (customTip) {
      tipPercentage(customTip);
    }
  };

  return (
    <>
      <div className="w-2/4 mr-2 rounded-md p-1 flex flex-col justify-between">
        <div className="grid relative">
          <img
            className="absolute top-1/2 left-3 transform -translate-x-1/2 -translate-y-1/2 my-3"
            src={dollar}
            alt="dollar sign"
          />
          <label htmlFor="bill" className="mb-2 text-xs font-bold">
            {" "}
            Bill
          </label>
          <input
            className="text-darkCyan font-bold rounded-md px-3 py-2 text-right  border-2 border-white bg-lighterGreyCyan focus:outline-none focus:border-2 focus:border-strongCyan"
            id="bill"
            type="text"
            placeholder="0"
            value={tip}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <p className="mb-2 text-xs font-bold">Select Tip %</p>
          <ul className="grid grid-cols-3 gap-1">
            {tiping.map((tips, index) => {
              if (tips === "Custom") {
                return (
                  <li
                    key={index}
                    className="bg-darkCyan text-lighterGreyCyan font-bold text-center 
                    rounded-[5px] py-2 cursor-pointer"
                  >
                    <input
                      type="text"
                      value={customTip}
                      onChange={handleCustomTipChange}
                      onBlur={handleCustomTipBlur}
                      placeholder="Custom"
                      className="bg-darkCyan text-lighterGreyCyan text-center w-full 
                      rounded-[5px] py-1 outline-none"
                    />
                  </li>
                );
              } else {
                return (
                  <li
                    key={index}
                    className="bg-darkCyan text-lighterGreyCyan font-bold text-center 
                    rounded-[5px] py-2 cursor-pointer hover:bg-main hover:text-darkCyan"
                    onClick={() => tipPercentage(tips)}
                  >
                    {tips}%
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div className="grid">
          <div className="flex justify-between relative">
            <img
              className="absolute top-1/2 left-3 transform -translate-x-1/2 -translate-y-1/2 my-[33px]"
              src={person}
              alt="person"
            />
            <label htmlFor="numb" className="mb-2 text-xs font-bold">
              Number of People
            </label>
            <label className="hidden text-red-500 mb-2 text-xs font-bold">
              Can't be zero
            </label>
          </div>
          <input
            className="text-darkCyan font-bold rounded-md px-3 py-2 text-right bg-lighterGreyCyan 
            border-2 border-white focus:outline-none focus:border-2 focus:border-strongCyan"
            id="numb"
            type="text"
            placeholder="0"
          />
        </div>
      </div>
    </>
  );
};

export default InputCard;
