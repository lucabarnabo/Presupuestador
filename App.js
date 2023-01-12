import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Navigation from "./Navigation";
export default function App() {
  return (
    /*  <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <StatusBar style="auto" />
    </View> */

    <Navigation />
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
