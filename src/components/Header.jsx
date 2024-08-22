import React from "react";
import logo from "../assests/logo.svg";

const Header = () => {
  return (
    <>
      <header className="flex justify-center my-20">
        <img src={logo} alt="logo" />
      </header>
    </>
  );
};

export default Header;
