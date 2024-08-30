import React, { useContext, useState, useCallback } from "react";
import dollar from "../../src/assets/dollar.svg";
import person from "../assets/person.svg";
import { AppContext } from "../context/AppContext";

const InputCard = () => {
  const [selectedTip, setSelectedTip] = useState(null);
  const [customTip, setCustomTip] = useState("");
  const tips = ["5", "10", "15", "25", "50", "Custom"];
  const [showError, setShowError] = useState(false);

  const { setPerPersonTip, setAmount, price, setPrice, users, setUsers } =
    useContext(AppContext);

  // Function to calculate the tip per person
  const calculateTipPerPerson = () => {
    const billAmount = parseFloat(price);
    const tipPercentage =
      selectedTip === "Custom"
        ? parseFloat(customTip)
        : parseFloat(selectedTip);
    const peopleCount = parseInt(users, 10);

    setShowError(Boolean(peopleCount === 0));

    if (!isNaN(billAmount) && !isNaN(tipPercentage) && peopleCount > 0) {
      const tipAmount = (billAmount * tipPercentage) / 100;
      const totalAmount = billAmount + tipAmount;
      const perPersonTip = tipAmount / peopleCount;
      const amount = (totalAmount / peopleCount).toFixed(2);

      setPerPersonTip(perPersonTip.toFixed(2));
      setAmount(amount);
    } else {
      setPerPersonTip("0.00");
      setAmount("0.00");
    }
  };

  // Handle tip selection click
  const handleTipClick = (tip) => {
    setSelectedTip(tip);
    if (tip !== "Custom") {
      setCustomTip(""); // Clear custom input if a predefined tip is selected
    }
  };

  // Handle changes for custom tip input
  const handleCustomTipChange = (event) => {
    setCustomTip(event.target.value);
  };

  // useCallback to avoid unnecessary re-creations of the function
  const calculateTip = useCallback(calculateTipPerPerson, [
    price,
    customTip,
    selectedTip,
    users,
    setPerPersonTip,
    setAmount,
  ]);

  // Effect to recalculate the tip whenever relevant state changes
  React.useEffect(() => {
    calculateTip();
  }, [price, customTip, selectedTip, users, calculateTip]);

  return (
    <>
      <div className="w-full md:w-2/4 mr-2 rounded-md p-1 flex flex-col justify-between">
        <div className="grid relative mb-5">
          <img
            className="absolute top-1/2 left-3 transform -translate-x-1/2 -translate-y-1/2 my-3 w-[10px]"
            src={dollar}
            alt="dollar sign"
          />
          <label
            htmlFor="bill"
            className="text-darkGreyCyan mb-2 text-xs font-bold"
          >
            Bill
          </label>
          <input
            className="text-darkCyan w-full font-bold rounded-md px-2 py-2 text-right border-2 border-white bg-lighterGreyCyan focus:outline-none focus:border-2 focus:border-strongCyan"
            id="bill"
            type="text"
            placeholder="0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <p className="mb-2 text-xs font-bold text-darkGreyCyan">
            Select Tip %
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2">
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
                      className="w-full bg-lighterGreyCyan text-lighterGreyCyan text-right rounded-[5px] px-2 py-[5px] focus:bg-none
                      placeholder:text-center placeholder:text-darkGreyCyan outline-none focus:bg-lighterGreyCyan 
                      border-2 border-transparent hover:text-darkCyan focus:border-2 focus:border-strongCyan focus:text-darkCyan"
                    />
                  </li>
                );
              } else {
                return (
                  <li
                    key={index}
                    className="active:bg-strongCyan bg-darkCyan text-lighterGreyCyan font-bold text-center
                    rounded-[5px] py-2 cursor-pointer hover:bg-strongCyan hover:text-darkCyan"
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
              className="absolute top-1/2 left-3 transform -translate-x-1/2 -translate-y-1/2 my-[34px] w-[10px]"
              src={person}
              alt="person"
            />
            <label
              htmlFor="numb"
              className="text-darkGreyCyan mb-2 text-xs font-bold"
            >
              Number of People
            </label>
            {showError && (
              <label className="text-red-500 mb-2 text-xs font-bold">
                Can't be zero
              </label>
            )}
          </div>
          <input
            className={`text-darkCyan w-full mb-5 md:mb-0 font-bold rounded-md px-2 py-2 text-right bg-lighterGreyCyan border-2 border-white focus:outline-none focus:border-2 focus:border-strongCyan
            ${
              showError
                ? " border-red-600 focus:border-2 focus:border-red-600"
                : ""
            }`}
            id="numb"
            type="text"
            placeholder="0"
            value={users}
            onChange={(e) => setUsers(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default InputCard;
