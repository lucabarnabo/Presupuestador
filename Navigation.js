import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import homeScreen from "./screens/home";
import precioScreen from "./screens/precios";
import formScreen from "./screens/form";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={homeScreen} />
      <Tab.Screen name="Precio" component={precioScreen} />
      <Tab.Screen name="Form" component={formScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
