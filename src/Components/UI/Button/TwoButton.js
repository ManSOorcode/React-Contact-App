import React from "react";

const TwoButton = (props) => {
  return (
    <button
      className="px-4 py-1 text-orange-900 rounded-md hover:text-white hover:bg-orange-500"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default TwoButton;
