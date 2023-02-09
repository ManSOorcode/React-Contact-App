import React from "react";

const OneButton = (props) => {
  return (
    <button
      className="px-6 py-1 text-lg font-medium bg-yellow-700 rounded-md hover:bg-amber-900 text-slate-200"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default OneButton;
