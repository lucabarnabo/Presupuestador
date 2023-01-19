import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/navigation/main";
import { SafeAreaView } from "react-native-safe-area-context";
import MyTabs from "./src/navigation/TabNavigator";
export default function App() {
  return <Main />;
}
