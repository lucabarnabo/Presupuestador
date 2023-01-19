import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={Styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={Styles.input}
        secureTextEntry={secureTextEntry}
      ></TextInput>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: "white",
    width: "100%",
    height: "4%",
    borderColor: "#d8d8d8",
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 5,
  },
  input: {},
});
export default CustomInput;
