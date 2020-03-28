import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login";
import Home from "./Home";
import Signup from "./SignUp";

const { Navigator, Screen } = createStackNavigator();

const AuthNavigator = () => (
  <Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      gestureEnabled: true
    }}
  >
    <Screen name="Home" component={Home} />
    <Screen name="Signup" component={Signup} />
    <Screen name="Login" component={Login} />
  </Navigator>
);

export default AuthNavigator;
