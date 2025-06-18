import React from "react";

const OneButton = (props) => {
  return (
    <button
      className="px-8 py-2 text-lg font-medium bg-yellow-700 rounded-md sm:px-12 md:px-10 lg:px-6 hover:bg-amber-900 text-slate-200"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default OneButton;
