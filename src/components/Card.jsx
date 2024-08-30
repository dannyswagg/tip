import React from "react";
import InputCard from "./InputCard";
import OutputCard from "./OutputCard";
import Header from "./Header";

const Card = () => {
  return (
    <>
      <div
        className="relative top-0 left-0 -translate-x-0 -translate-y-0 mt-10 sm:mt-0
      sm:absolute sm:top-2/4 sm:left-2/4 sm:-translate-x-2/4 sm:-translate-y-2/4 w-full sm:w-[50%] md:w-[50%]"
      >
        <Header />
        <div className="bg-white p-5 rounded-2xl md:h-400px block sm:block md:flex justify-between mt-16">
          <InputCard />
          <OutputCard />
        </div>
      </div>
    </>
  );
};

export default Card;
