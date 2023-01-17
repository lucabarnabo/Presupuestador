import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/home";
import Home2 from "../../screens/home2";
import Home3 from "../../screens/home3";

const HomeStackScreen = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Home2" component={Home2} />
      <HomeStack.Screen name="Home3" component={Home3} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
