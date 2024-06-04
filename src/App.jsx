import React from "react";
import { Button } from "./components/ui/button";
import NavBar from "./layouts/NavBar";
import Body from "./layouts/body/Body";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <NavBar />
        <Body />
      </div>
    </Provider>
  );
};

export default App;
