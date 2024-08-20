import React from "react";
import InputCard from "./InputCard";
import OutputCard from "./OutputCard";

const Card = () => {
  return (
    <>
      <div className="bg-white p-5 rounded-lg w-[60%] h-[350px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex justify-between">
        <InputCard />
        <OutputCard />
      </div>
    </>
  );
};

export default Card;
