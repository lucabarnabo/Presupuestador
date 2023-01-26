import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/images/LogoFarewell.png";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/Custombutton";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Navigation = useNavigation();
  const value = useContext(AuthContext);

  const { height } = useWindowDimensions();

  const onSignInPress = () => {
    console.log("Sign in");
    () => Navigation.navigate("Home");
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
        text={"Registrate"}
        onPress={() => Navigation.navigate("SignUp")}
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
