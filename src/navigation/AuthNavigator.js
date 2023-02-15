import React, { useContext } from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import SignUp from "../screens/signUp";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import TabNavigator from "../navigation/TabNavigator";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthNavigator = () => {
  const {} = useContext(AuthContext);
  const userInfo = useContext(AuthContext);
  const AuthStack = createNativeStackNavigator();

  console.log(userInfo.userInfo.token);

  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        {userInfo.userInfo.token ? (
          <AuthStack.Screen
            name="TabNav"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <AuthStack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <AuthStack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
