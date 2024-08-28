import React, { useState, useCallback } from "react";
import dollar from "../../src/assets/dollar.svg";
import person from "../assets/person.svg";

const InputCard = () => {
  const [price, setPrice] = useState("");
  const [users, setUsers] = useState("");
  const [selectedTip, setSelectedTip] = useState(null);
  const [customTip, setCustomTip] = useState("");
  const [tipPerPerson, setTipPerPerson] = useState("");
  const tips = ["5", "10", "15", "25", "50", "Custom"];

  // Debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleTipClick = (tip) => {
    setSelectedTip(tip);
    if (tip !== "Custom") {
      setCustomTip(""); // Clear custom input if a predefined tip is selected
    }
  };

  const handleCustomTipChange = (event) => {
    setCustomTip(event.target.value);
    debouncedCalculateTip(event.target.value); // Use the debounced function
  };

  const calculateTipPerPerson = () => {
    const billAmount = parseFloat(price);
    const tipPercentage =
      selectedTip === "Custom"
        ? parseFloat(customTip)
        : parseFloat(selectedTip);
    const peopleCount = parseInt(users, 10);

    if (!isNaN(billAmount) && !isNaN(tipPercentage) && peopleCount > 0) {
      const tipAmount = (billAmount * tipPercentage) / 100;
      const totalAmount = billAmount + tipAmount;
      const perPersonTip = tipAmount / peopleCount;
      setTipPerPerson(perPersonTip.toFixed(2));
      console.log("Tip per person:", perPersonTip);
      console.log("Total per person:", (totalAmount / peopleCount).toFixed(2));
    }
  };

  // Memoize debounced function
  const debouncedCalculateTip = useCallback(
    debounce(calculateTipPerPerson, 200),
    [price, customTip, selectedTip, users]
  );

  return (
    <>
      <div className="w-full md:w-2/4 mr-2 rounded-md p-1 flex flex-col justify-between">
        <div className="grid relative mb-5">
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
            className="text-darkCyan font-bold rounded-md px-1 py-3 text-right  border-2 border-white
             bg-lighterGreyCyan focus:outline-none focus:border-2 focus:border-strongCyan"
            id="bill"
            type="text"
            placeholder="0"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
              debouncedCalculateTip();
            }}
          />
        </div>
        <div className="mb-5">
          <p className="mb-2 text-xs font-bold">Select Tip %</p>
          <ul className="grid grid-cols-3 gap-2">
            {tips.map((tip, index) => {
              if (tip === "Custom") {
                return (
                  <li key={index}>
                    <input
                      type="text"
                      value={customTip}
                      onChange={handleCustomTipChange}
                      onClick={() => handleTipClick("Custom")}
                      placeholder="Custom"
                      className=" bg-darkCyan border-2 border-x-white text-lighterGreyCyan 
                      placeholder:text-lighterGreyCyan
                       font-bold rounded-[5px] py-2 placeholder:text-center px-2 w-full outline-none text-right 
                       focus:bg-transparent focus:bg-none hover:text-darkCyan hover:text-[bg-transparent]
                        focus:border-2 focus:border-strongCyan"
                    />
                  </li>
                );
              } else {
                return (
                  <li
                    key={index}
                    className="bg-darkCyan text-lighterGreyCyan font-bold text-center
                    rounded-[5px] py-2 cursor-pointer hover:bg-main hover:text-darkCyan"
                    onClick={() => handleTipClick(tip)}
                  >
                    {tip}%
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
            className="text-darkCyan font-bold rounded-md px-1 py-2 text-right bg-lighterGreyCyan 
            border-2 border-white focus:outline-none focus:border-2 focus:border-strongCyan"
            id="numb"
            type="text"
            placeholder="0"
            value={users}
            onChange={(e) => {
              setUsers(e.target.value);
              debouncedCalculateTip();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default InputCard;
