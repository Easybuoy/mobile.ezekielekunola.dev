import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import store from "./store/store";
import Home from "./screens/Home";
import { TabNavigator } from "./navigator/Navigator";

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
