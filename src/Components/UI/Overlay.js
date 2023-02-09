import React from "react";

const Overlay = (props) => {
  return (
    <div className="fixed top-0 z-20 w-full h-full duration-150 ease-out backdrop-blur-sm">
      {props.children}
    </div>
  );
};

export default Overlay;
