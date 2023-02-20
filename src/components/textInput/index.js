import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { Logo, User } from "~assets";
import AppColors from "~utills/AppColors";
import CommonStyles from "~utills/CommonStyles";

import styles from "./styles";
const TextInputField = ({
  containerStyle = {},
  onChangeText,
  placeholder = "First name",
  keyboardType = "default",
  maxLength = null,
  multiline = false,
  numberOfLines = null,
  editable = true,
  placeholderColor = AppColors.lightGray,
  returnKeyType = "default",
  textAlignVertical,
  Icon = null,
  secureTextEntry = false,
  value,
  autoCapitalize,
  textInputContainerStyle,
  mainContainerStyles,
  image = User,
}) => {
  return (
    <View style={[styles.container, mainContainerStyles]}>
      <View style={[styles.row, textInputContainerStyle]}>
        <Image source={image} style={styles.iconStyle} resizeMode="contain" />
        <TextInput
          textAlignVertical={textAlignVertical}
          editable={editable}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          style={[styles.inputText, containerStyle]}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          maxLength={maxLength}
          value={value}
          onChangeText={onChangeText}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
          selectionColor={AppColors.primary}
          autoCapitalize={autoCapitalize}
        />
      </View>
    </View>
  );
};
export default TextInputField;
