import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { H1 } from "~components/texts";
import AppColors from "~utills/AppColors";
import styles from "./styles";

const CounterBox = ({
  containerStyle = {},
  countNum = "1",
  descriptionText = "You provide us income & expenses information",
  textStyle = {},
  color = AppColors.black,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.numberContainer}>
        <H1 color={color} fontWeight={"bold"} size={6}>
          {countNum}
        </H1>
      </View>
      <View style={styles.descriptionContainer}>
        <Text numberOfLines={2} style={[styles.text, textStyle]}>
          {descriptionText}
        </Text>
      </View>
    </View>
  );
};

export default CounterBox;
