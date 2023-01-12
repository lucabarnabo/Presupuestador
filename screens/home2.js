import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const PrecioScreen = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          color: "red",
        }}
      >
        precioScreen
      </Text>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    </View>
  );
};
export default PrecioScreen;
