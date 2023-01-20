import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

function Custombutton({ onPress, text, type = "PRIMARY" }) {
  return (
    <Pressable
      onPress={onPress}
      style={[Styles.container, Styles[`container_${type}`]]}
    >
      <Text style={[Styles.text, Styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
}
const Styles = StyleSheet.create({
  container: {
    width: "40%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 15,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
  container_PRIMARY: {
    backgroundColor: "#ee5d5d",
  },
  container_SECONDARY: {
    backgroundColor: "#046fb0",
  },
  text_PRIMARY: {
    fontWeight: "bold",
    color: "white",
  },
  text_SECONDARY: {
    color: "white",
  },
});
export default Custombutton;
