import axios from "axios";
import React, { createContext, useState } from "react";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const register = (name, email, password) => {
    axios
      .post(`${BASE_URL}/users/register`, {
        name,
        email,
        password,
      })
      .then((res) => {
        let userInfo = res;
        console.log("userInfo", userInfo);
      })
      .catch((err) => {
        console.log(`Register error ${err}`);
      }); //agregar la url en base url y asignar la ruta del metodo en la api

    const login = (username, password) => {
      axios
        .post(`${BASE_URL}/users/login`, {
          username,
          password,
        })
        .then((res) => {
          let userInfo = res.data;
          console.log(userInfo);
        })
        .catch((err) => {
          console.log(`Login Error ${err}`);
        });
    };
  };
  return (
    <AuthContext.Provider value={{ register, login }}>
      {children}
    </AuthContext.Provider>
  );
};
