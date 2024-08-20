import React from "react";

const OutputCard = () => {
  return (
    <>
      <div className="w-2/4 rounded-md p-5 bg-darkCyan flex flex-col justify-between">
        <div className="">
          <div className="flex justify-between mb-7 items-center">
            <p className="text-white font-bold text-sm">
              Tip Amount <br />{" "}
              <span className="text-main text-xs">/ person</span>
            </p>
            <h2 className="text-strongCyan text-3xl font-bold">$4.27</h2>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-white font-bold text-sm">
              Total <br />
              <span className="text-main text-xs">/ person </span>
            </p>
            <h2 className="text-strongCyan text-3xl font-bold">$32.79</h2>
          </div>
        </div>
        <button
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
