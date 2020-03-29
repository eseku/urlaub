import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import Hotel from "./Hotel";

// navigator
const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
  <Navigator
    initialRouteName={"Home"}
    screenOptions={{
      headerShown: false,
      gestureEnabled: true
    }}
  >
    <Screen name="Home" component={Home} />
    <Screen name="Hotel" component={Hotel} />
  </Navigator>
);

export default AppNavigator;
