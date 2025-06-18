import React, { useContext } from "react";
import headerImage from "../../Assets/7d21c9d4106cb6c61dc97481ac991c03-removebg-preview.png";
import ToggleButton from "../UI/Button/ToggleButton";
import { ContentContext } from "../../store/ContextProvider";

const Header = () => {
  const context = useContext(ContentContext);
  return (
    <header
      className={`flex items-center w-full h-[4rem]  ${
        context.isDark ? "bg-gray-900" : "bg-yellow-800"
      }`}
    >
      <img
        src={headerImage}
        alt="contact app Icon was here"
        className="w-20 md:pl-4 md:w-28 "
      />
      <h2 className="w-full font-mono text-xl font-bold text-white md:text-3xl ">
        Contact App
      </h2>

      <ToggleButton />
    </header>
  );
};

export default Header;
