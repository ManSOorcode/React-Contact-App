import React from "react";

const Overlay = (props) => {
  return (
    <div className="fixed top-0 z-20 grid items-center justify-center w-screen h-full duration-150 ease-out backdrop-blur-sm">
      {props.children}
    </div>
  );
};

export default Overlay;
