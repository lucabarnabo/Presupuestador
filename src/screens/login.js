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
import Spinner from "react-native-loading-spinner-overlay";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/Custombutton";

import { AuthContext } from "../context/AuthContext";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, login } = useContext(AuthContext);

  const Navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={Styles.root}>
        <Spinner visible={isLoading} />
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
        <CustomButton
          text={"Iniciar Sesión"}
          onPress={() => {
            login(username, password);
          }}
        />
        <CustomButton
          text={"Registrate"}
          onPress={() => Navigation.navigate("SignUp")}
          type="SECONDARY"
        />
      </View>
    </SafeAreaView>
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
