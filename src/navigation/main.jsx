import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Main = () => {
  const isLoggedIn = false;

  return (
    <NavigationContainer style={Styles.root}>
      {isLoggedIn ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

const Styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f55a27",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 30,
  },
});
export default Main;
