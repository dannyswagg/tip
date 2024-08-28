import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <>
      <header className="flex justify-center">
        <img src={logo} alt="logo" />
      </header>
    </>
  );
};

export default Header;
