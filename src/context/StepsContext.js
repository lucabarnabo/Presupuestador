import React, { createContext, useState } from "react";

export const StepsContext = createContext();

export const StepsProvider = ({ children }) => {
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <StepsContext.Provider
      value={{
        steps,
        setSteps,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </StepsContext.Provider>
  );
};
