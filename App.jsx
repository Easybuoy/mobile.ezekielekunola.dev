import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { } from '@env'

import store from "./store/store";
import { TabNavigator } from "./navigator/Navigator";

const client = new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/os85px2g9rg6/'
})

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
