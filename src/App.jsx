import Layer from "./Components/Layout/Layer";

import ContextProvider from "./store/ContextProvider";

const App = () => {
  return (
    <ContextProvider>
      <Layer />
    </ContextProvider>
  );
};

export default App;
