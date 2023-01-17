import React from "react";
import { Text, View } from "react-native";
import Constants from "expo-constants";
import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
const Main = () => {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      {isLoggedIn ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Main;
