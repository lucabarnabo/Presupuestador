import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Steps from "../screens/steps";
import Home2 from "../screens/home2";
import Home3 from "../screens/home3";
import { StepsProvider } from "../context/StepsContext";

const HomeStackScreen = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <StepsProvider>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Steps" component={Steps} />
        <HomeStack.Screen name="Home2" component={Home2} />
        <HomeStack.Screen name="Home3" component={Home3} />
      </HomeStack.Navigator>
    </StepsProvider>
  );
};

export default HomeStackScreen;
