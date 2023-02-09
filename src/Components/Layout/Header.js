import React from "react";
import headerImage from "../../Assets/7d21c9d4106cb6c61dc97481ac991c03-removebg-preview.png";

const Header = () => {
  return (
    <header className="flex items-center w-full h-24 p-0 bg-yellow-700">
      <img
        src={headerImage}
        alt="contact app Icon was here"
        className="w-32 pl-6"
      />
      <h2 className="w-full font-mono text-4xl font-bold text-white">
        Contact App
      </h2>
    </header>
  );
};

export default Header;
