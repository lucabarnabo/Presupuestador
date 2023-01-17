import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, ButtonGroup, withTheme } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const Navigation = useNavigation();
  return (
    <View>
     <Image source={Logo} style={Style={styles.logo}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width:100, 
    height:100,
},
});
export default LoginScreen;
