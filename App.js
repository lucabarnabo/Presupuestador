import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";
import Main from "./src/components/main";
export default function App() {
  return (
    <Main />
    /* <Navigation /> */
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
