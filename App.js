import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/navigation/main";
import { SafeAreaView } from "react-native-safe-area-context";
import MyTabs from "./src/navigation/TabNavigator";
import { AuthProvider } from "./src/context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
};

export default App;
