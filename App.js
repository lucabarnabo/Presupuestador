import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Main from "./src/navigation/main";
import MyTabs from "./src/navigation/TabNavigator";
export default function App() {
  return (
    <SafeAreaView>
      <Main />;
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 30,
  },
});
