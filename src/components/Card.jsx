import React from "react";
import InputCard from "./InputCard";
import OutputCard from "./OutputCard";
import Header from "./Header";

const Card = () => {
  return (
    <>
      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-full sm:w-[60%] md:w-[60%]">
        <Header />
        <div className="bg-white p-5 rounded-2xl md:h-350px  block sm:block md:flex justify-between mt-5">
          <InputCard />
          <OutputCard />
        </div>
      </div>
    </>
  );
};

export default Card;
