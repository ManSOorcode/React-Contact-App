import React from "react";

import addIcon from "../../../Assets/1019958.png";

const ContactAddButton = (props) => {
  // const clickHandler = (e) => {
  //   e.preventDefault();
  //   console.log("hello");
  //   props.setForm("inputForm");
  // };

  return (
    <button
      className="fixed transition ease-in-out rounded-full shadow-lg shadow-neutral-800 bottom-8 right-8 active:scale-125"
      onClick={props.onClick}
    >
      <img src={addIcon} alt="" className="w-16 " />
    </button>
  );
};

export default ContactAddButton;
