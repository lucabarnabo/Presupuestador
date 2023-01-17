import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, ButtonGroup, withTheme } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const Navigation = useNavigation();
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          color: "blue",
        }}
      >
        Login Screen
      </Text>
      <Button
        title="Log in"
        loading={false}
        loadingProps={{ size: "small", color: "white" }}
        buttonStyle={{
          backgroundColor: "rgba(151, 202, 186, 1)",
          borderRadius: 16,
        }}
        titleStyle={{ fontWeight: "bold", fontSize: 23 }}
        containerStyle={{
          marginHorizontal: 50,
          height: 50,
          width: 200,
          marginVertical: 10,
        }}
        onPress={() => Navigation.navigate("Home2")}
      />
    </View>
  );
};
export default LoginScreen;
