import React, { useContext } from "react";

import userIcon from "../../Assets/ios-contact-4.png";
import phoneIcon from "../../Assets/icons8-call-gradak/icons8-call-48.png";
import emailIcon from "../../Assets/icons8-gmail-logo-ios-16-glyph/icons8-gmail-logo-60.png";
import OneButton from "../UI/Button/OneButton";
import TwoButton from "../UI/Button/TwoButton";
import { ContentContext } from "../../store/ContextProvider";

const ContactItemList = (props) => {
  // const contextCtx = useContext(ContentContext);
  return (
    // hover:shadow-lg

    //hover:scale-105 hover:translate-y-2
    <div className="relative p-4 px-6 pb-6 m-4 ease-in shadow-lg shadow-slate-500 hover:shadow-gray-800 hover:shadow-2xl rounded-xl bg-slate-300 hover:bg-stone-200">
      <div className="flex flex-col items-center justify-center w-full pt-2">
        <img src={userIcon} alt="user Icon was here" className="w-20" />
        <p className="break-before-all">{props.name || "mansoor (default)"}</p>
      </div>
      <div className="flex w-full pt-4 ">
        <img src={emailIcon} alt="user Email" className="w-8 mr-2" />
        <p className="pl-1 break-before-all">
          {" "}
          {props.email || "email (default)"}
        </p>
      </div>
      <div className="flex w-full pt-2 ">
        <img src={phoneIcon} alt="user Number" className="w-8 mr-2" />
        <p className="pl-1 break-before-all">
          {props.number || "987654321(default)"}
        </p>
      </div>
      <div className="flex justify-center w-full gap-6 mt-4 text-base ">
        <OneButton onClick={props.onClickEdit}>Edit</OneButton>
        <TwoButton onClick={props.onClickDelet}>Delet</TwoButton>
      </div>
    </div>
  );
};

export default ContactItemList;
