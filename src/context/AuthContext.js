import axios from "axios";
import React, { createContext, useState } from "react";
import { BASE_URL } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const register = (name, email, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/users/register`, {
        name,
        email,
        password,
      })
      .then((res) => {
        let userInfo = res;
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
        console.log("userInfo", userInfo);
      })
      .catch((err) => {
        console.log(`Register error ${err}`);
        setIsLoading(false);
      }); //agregar la url en base url y asignar la ruta del metodo en la api
  };

  const login = (username, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/users/login`, {
        username,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        console.log("userInfo", userInfo.token);
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(`Login Error ${err}`);
        setIsLoading(false);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        register,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
