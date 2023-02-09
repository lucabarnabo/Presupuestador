import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/images/LogoFarewell.png";
import Spinner from "react-native-loading-spinner-overlay";
import { AuthContext } from "../context/AuthContext";

//Custom components
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/Custombutton";

const SignUpScreen = () => {
  const Navigation = useNavigation();
  const { height } = useWindowDimensions();
  //State hooks
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  //Context Hooks
  const { isLoading, register } = useContext(AuthContext);

  const createAccount = () => {
    console.warn("sing in");
  };
  return (
    <View style={Styles.root}>
      <Spinner visible={isLoading} />
      <Text style={Styles.title}>Registro</Text>
      <CustomInput
        placeholder="Usuario"
        value={username}
        setValue={setUsername}
      />
      <CustomInput placeholder="E-mail" value={email} setValue={setEmail} />
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />
      <CustomInput
        placeholder="Contraseña"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomInput
        placeholder="Repetir contraseña"
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry={true}
      />

      <CustomButton
        text={"Crear Cuenta"}
        onPress={() => {
          register(username, password, email);
        }}
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
  title: {
    fontSize: 30,
    paddingVertical: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default SignUpScreen;
