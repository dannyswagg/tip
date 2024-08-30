import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const OutputCard = () => {
  const { perPersonTip, amount } = useContext(AppContext);

  const { resetAmount } = useContext(AppContext);
  return (
    <>
      <div className="w-full md:w-2/4 rounded-md p-5 bg-darkCyan flex flex-col justify-between">
        <div className="">
          <div className="flex justify-between mb-7 items-center">
            <p className="text-white font-bold text-xs sm:text-sm">
              Tip Amount <br />{" "}
              <span className="text-main text-xs sm:text-sm">/ person</span>
            </p>
            <h2 className="text-strongCyan text-xl sm:text-2xl md:text-3xl">
              ${perPersonTip}
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-white text-xs sm:text-sm">
              Total <br />
              <span className="text-main text-xs sm:text-sm">/ person </span>
            </p>
            <h2 className="text-strongCyan text-xl sm:text-2xl md:text-3xl">
              ${amount}
            </h2>
          </div>
        </div>
        <button
          onClick={resetAmount}
          className="w-full rounded-[5px] py-2 bg-strongCyan hover:bg-main uppercase mt-10 sm:mt-10 md:mt-0"
          type="submit"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default OutputCard;
