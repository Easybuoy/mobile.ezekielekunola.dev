import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

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
    <Stack.Navigator>
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
    <Stack.Navigator>
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

const activeColor = "#4775f2";
const inActiveColor = "#b8bece";

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({ route }) => {
          let tabBarVisible = true;
          const routeName = route.state.routeNames[route.state.index];

          if (routeName === "Section") {
            tabBarVisible = false;
          }

          return {
            tabBarLabel: "Home",
            tabBarVisible,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-home"
                size={26}
                color={focused ? activeColor : inActiveColor}
              />
            ),
          };
        }}
      />
      <Tab.Screen
        name="Courses"
        component={SectionStack}
        options={{
          tabBarLabel: "Course",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-albums"
              size={26}
              color={focused ? activeColor : inActiveColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Projects"
        component={ProjectsStack}
        options={{
          tabBarLabel: "Projects",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-folder"
              size={26}
              color={focused ? activeColor : inActiveColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export { TabNavigator };
