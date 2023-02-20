import React from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Logo } from "~assets";
import { H1 } from "~components/texts";
import AppColors from "~utills/AppColors";
import styles from "./styles";

const SocialAuthBtn = ({
  containerStyle = {},
  countNum = "1",
  descriptionText = "Continue with Facebook",
  textStyle = {},
  color = AppColors.black,
  image = Logo,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.numberContainer}>
        <Image source={image} resizeMode="contain" style={styles.imageStyle} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text numberOfLines={2} style={[styles.text, textStyle]}>
          {descriptionText}
        </Text>
      </View>
    </View>
  );
};

export default SocialAuthBtn;
