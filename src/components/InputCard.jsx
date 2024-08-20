import React from "react";

const InputCard = () => {
  return (
    <>
      <div className="w-2/4 mr-2 rounded-md p-1 flex flex-col justify-between">
        <div className="grid">
          <label for="bill" className="mb-2 text-xs font-bold">
            {" "}
            Bill
          </label>
          <input
            className="text-darkCyan font-bold rounded-md px-3 py-2 text-right bg-lighterGreyCyan focus:outline-none focus:border-2 focus:border-strongCyan"
            id="bill"
            type="text"
            placeholder="0"
          />
        </div>
        <div className="">
          <p className="mb-2">Select Tip %</p>
          <ul className="grid grid-cols-3 gap-1">
            <li className="bg-darkCyan text-lighterGreyCyan font-bold text-center rounded-[5px] py-2 cursor-pointer hover:bg-main hover:text-darkCyan">
              5%
            </li>
            <li className="bg-darkCyan text-lighterGreyCyan font-bold text-center rounded-[5px] py-2 cursor-pointer hover:bg-main hover:text-darkCyan">
              10%
            </li>
            <li className="bg-darkCyan text-lighterGreyCyan font-bold text-center rounded-[5px] py-2 cursor-pointer hover:bg-main hover:text-darkCyan">
              15%
            </li>
            <li className="bg-darkCyan text-lighterGreyCyan font-bold text-center rounded-[5px] py-2 cursor-pointer hover:bg-main hover:text-darkCyan">
              25%
            </li>
            <li className="bg-darkCyan text-lighterGreyCyan font-bold text-center rounded-[5px] py-2 cursor-pointer hover:bg-main hover:text-darkCyan">
              50%
            </li>
            <li className="bg-darkCyan text-lighterGreyCyan font-bold text-center rounded-[5px] py-2 cursor-pointer hover:bg-main hover:text-darkCyan">
              Custom
            </li>
          </ul>
        </div>
        <div className="grid">
          <div className="flex justify-between">
            <label for="numb" className="mb-2 text-xs font-bold">
              Number of People
            </label>
            <label className="text-red-500 mb-2 text-xs font-bold">
              Can't be zero
            </label>
          </div>
          <input
            className="text-darkCyan font-bold rounded-md px-3 py-2 text-right bg-lighterGreyCyan focus:outline-none focus:border-2 focus:border-strongCyan"
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
