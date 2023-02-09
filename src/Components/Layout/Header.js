import React from "react";
import headerImage from "../../Assets/7d21c9d4106cb6c61dc97481ac991c03-removebg-preview.png";

const Header = () => {
  return (
    <header className="flex items-center w-full h-[5rem]  bg-yellow-700">
      <img
        src={headerImage}
        alt="contact app Icon was here"
        className="w-24 md:pl-4 md:w-32 "
      />
      <h2 className="w-full font-mono text-3xl font-bold text-white md:text-4xl ">
        Contact App
      </h2>
    </header>
  );
};

export default Header;
