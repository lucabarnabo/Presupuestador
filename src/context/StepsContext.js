import axios from "axios";
import React, { createContext, useState } from "react";
import { BASE_URL } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const StepContext = createContext();

export const StepProvider = ({ children }) => {
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState();

  const register = () => {};

  return (
    <StepContext.Provider
      value={{
        setSteps,
        setCurrentStep,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};
