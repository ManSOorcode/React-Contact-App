import React from "react";

const TwoButton = (props) => {
  return (
    <button
      className="px-8 py-2 text-orange-900 rounded-md sm:px-12 md:px-10 lg:px-6 hover:text-white hover:bg-orange-500"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default TwoButton;
