import React, { useContext } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { StepsContext } from "../../context/StepsContext";

const Circle = ({ index, selectedIndex }) => {
  return (
    <View
      style={
        index === selectedIndex
          ? { ...styles["circle"], backgroundColor: "#fff" }
          : { ...styles["circle"], backgroundColor: "#2E81D3" }
      }
    >
      <Text
        style={
          index === selectedIndex
            ? styles["selectedcircleTitle"]
            : styles["circleTitle"]
        }
      >
        {index}
      </Text>
    </View>
  );
};

const StepHeader = () => {
  const MAX_NUMBER_LINES = 2;
  const stepsContext = useContext(StepsContext);
  const { steps, currentStepIndex } = stepsContext;
  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <View key={index} style={styles.stepContainer}>
          <Circle selectedIndex={currentStepIndex} index={++index} />
          <Text
            numberOfLines={MAX_NUMBER_LINES}
            ellipsizeMode="tail"
            style={styles.titleCircle}
          >
            {step.title}
          </Text>
        </View>
      ))}
      <View style={styles.line} />
    </View>
  );
};

export default StepHeader;
