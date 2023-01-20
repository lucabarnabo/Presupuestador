import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import { Button, ButtonGroup, withTheme } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/images/LogoFarewell.png";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/Custombutton";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Navigation = useNavigation();

  const { height } = useWindowDimensions();

  const onSignInPress = () => {
    console.warn("sing in");
  };
  return (
    <View style={Styles.root}>
      <Image source={Logo} style={Styles.logo} />
      <CustomInput
        placeholder="Usuario"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Contraseña"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton text={"Iniciar Sesión"} onPress={onSignInPress()} />
      <CustomButton
        text={"Olvidaaate"}
        onPress={onSignInPress()}
        type="SECONDARY"
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "100%",
    maxWidth: 200,
    maxHeight: 200,
  },
});
export default LoginScreen;
