import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";

const FormScreen = () => {
  const Navigation = useNavigation();
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          color: "green",
        }}
      >
        formScreen
      </Text>
      <Button
        title={"Nuevo Presupuesto"}
        onPress={() => {
          Navigation.navigate("Home");
        }}
      />
    </View>
  );
};
export default FormScreen;
