import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import AppColors from "~utills/AppColors";
import { width } from "~utills/Dimension";

export const H1 = ({
  children = "?",
  color = AppColors.black,
  onPress = undefined,
  textStyles,
  fontWeight,
  numberOfLines,
  // fontFamily = FontFamily.QuicksandRegular,
  size = 5,
  textAlign = "auto",
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      fontWeight: fontWeight,
      // fontFamily: fontFamily,
      textAlign: textAlign,
    },
  });
  return (
    <Pressable disabled={typeof onPress == "undefined"} onPress={onPress}>
      <Text
        numberOfLines={numberOfLines}
        style={[styles.text, (fontWeight = { fontWeight }), textStyles ?? {}]}
      >
        {children}
      </Text>
    </Pressable>
  );
};

export const CustomText = ({
  children = "?",
  size = 3.3,
  fontWeight,
  letterSpacing = 0,
  underLine,
  center,
  justify,
  right,
  italic = false,
  color = AppColors.black,
  onPress = undefined,
  textStyles,
  numberOfLines = null,
  // font = FontFamily.MontserratRegular,
  containerStyles,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      letterSpacing: letterSpacing,
      color: color,
      fontWeight: fontWeight,
      textDecorationLine: underLine ? "underline" : "none",
      textAlign: center
        ? "center"
        : right
        ? "right"
        : justify
        ? "justify"
        : "left",
      // fontFamily: font,
    },
  });
  return (
    <Pressable
      disabled={typeof onPress == "undefined"}
      style={containerStyles}
      onPress={onPress}
    >
      <Text
        style={[styles.text, textStyles ?? {}]}
        numberOfLines={numberOfLines}
      >
        {children}
      </Text>
    </Pressable>
  );
};
