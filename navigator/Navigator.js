import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Section from "../screens/Section";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Section"
        component={Section}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const SectionStack = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Section"
        component={Section}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const CoursesStack = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Section"
        component={Section}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const ProjectsStack = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Section"
        component={Section}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Courses" component={Section} />
      <Tab.Screen name="Projects" component={Section} />
    </Tab.Navigator>
  );
};

export { TabNavigator };
