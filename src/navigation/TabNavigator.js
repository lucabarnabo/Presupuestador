import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import PrecioScreen from "../screens/precios";
import FormScreen from "../screens/form";
import HomeStackScreen from "../stacks/HomeStackScreen";
//Icons
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function MyTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: "purple", headerShown: false }} //opciones de la vista, en este  caso le pone el color violeta a los iconos de la barra de navegacion
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Presupuesto", // le pone titulo al icono en el tabNavigation (barra inferior que permite navegar entre las pantallas)
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Ionicons
                name="document-attach-outline"
                size={24}
                color="black"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Precio"
        component={PrecioScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <FontAwesome5 name="money-check-alt" size={24} color="black" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Form"
        component={FormScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ focused, size, color }) => {
            return <FontAwesome name="send-o" size={24} color="black" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
