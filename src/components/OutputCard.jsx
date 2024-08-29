import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const OutputCard = () => {
  const { perPersonTip, amount, setAmount, setPerPersonTip } =
    useContext(AppContext);

  // Local function to reset amount to "0.00"
  const resetAmount = () => {
    setAmount("0.00");
    setPerPersonTip("0.00");
  };
  return (
    <>
      <div className="w-full md:w-2/4 rounded-md p-5 bg-darkCyan flex flex-col justify-between">
        <div className="">
          <div className="flex justify-between mb-7 items-center">
            <p className="text-white font-bold text-sm">
              Tip Amount <br />{" "}
              <span className="text-main text-xs">/ person</span>
            </p>
            <h2 className="text-strongCyan text-3xl font-bold">
              ${perPersonTip || "0.00"}
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-white font-bold text-sm">
              Total <br />
              <span className="text-main text-xs">/ person </span>
            </p>
            <h2 className="text-strongCyan text-3xl font-bold">
              ${amount || "0.00"}
            </h2>
          </div>
        </div>
        <button
          onClick={resetAmount}
          className="w-full rounded-[5px] py-2 bg-strongCyan hover:bg-main uppercase"
          type="submit"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default OutputCard;
