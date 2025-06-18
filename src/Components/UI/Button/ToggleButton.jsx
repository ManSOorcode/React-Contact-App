import React, { useContext } from "react";
import { ContentContext } from "../../../store/ContextProvider";
import { PiSunDuotone } from "react-icons/pi";
import { PiMoonDuotone } from "react-icons/pi";

const ToggleButton = () => {
  const contex = useContext(ContentContext);
  const bgChangehandler = (e) => {
    contex.isdarkhandler((prev) => {
      return !prev;
    });
  };

  // console.log(contex.isDark, "value");
  return (
    <button
      onClick={(e) => bgChangehandler(e)}
      className={`px-2 py-2 rounded-full ${
        contex.isDark ? "bg-[#465a7c]" : "bg-slate-100"
      } mr-4`}
    >
      {contex.isDark ? <PiMoonDuotone /> : <PiSunDuotone />}
    </button>
  );
};

export default ToggleButton;
