import React, { useContext, useEffect, useState } from "react";
// import headerImage from "./Assets/7d21c9d4106cb6c61dc97481ac991c03-removebg-preview.png";

import Layer from "./Components/Layout/Layer";

import ContextProvider from "./store/ContextProvider";

// import Button from "./Components/UI/Button/Button";

const App = (props) => {
  return (
    <ContextProvider>
      <Layer />
    </ContextProvider>
  );
};

export default App;
