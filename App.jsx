import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { SPACE_ID, ACCESS_TOKEN } from "@env";

import store from "./store/store";
import { TabNavigator } from "./navigator/Navigator";

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`,
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <TabNavigator />
        </Provider>
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default App;
