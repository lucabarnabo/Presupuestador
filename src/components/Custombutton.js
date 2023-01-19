import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Custombutton() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Custom Button</Text>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {},
  text: {},
});
export default Custombutton;
