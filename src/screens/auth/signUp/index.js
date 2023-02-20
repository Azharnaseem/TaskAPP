import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import {
  Button,
  CounterBox,
  ScreenWrapper,
  SocialAuthBtn,
  TextInputField,
} from "~components";
import { setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import { setAppLoader } from "~redux/slices/config";
import { Email, FaceBook, Google, Lock, Logo, Phone } from "~assets";
import { H1 } from "~components/texts";
import { height, width } from "~utills/Dimension";
import AppColors from "~utills/AppColors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ScreenNames from "~routes/routes";
export default function SignUpp({ navigation, route }) {
  const dispatch = useDispatch();
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <Image source={Logo} style={styles.logoImage} resizeMode="contain" />
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.descriptionTextContainer}>
          <H1
            color={AppColors.lightGray}
            textAlign="center"
            size={3.5}
            numberOfLines={1}
          >
            Enter your credentials to continue.
          </H1>
        </View>
        <View style={styles.imputsContainer}>
          <TextInputField />
          <TextInputField placeholder="Last Name" />
          <TextInputField image={Email} placeholder="Email address" />
          <TextInputField image={Phone} placeholder="Phone number" />
          <TextInputField image={Lock} placeholder="Create a password" />
        </View>

        <Button
          containerStyle={{ width: width(84) }}
          title={"Create Account"}
          onPress={() => navigation.navigate(ScreenNames.MAINSCREEN)}
        />
        <View style={styles.lineTextContainer}>
          <View style={styles.line}></View>
          <H1 size={3}>Signup With</H1>
          <View style={styles.line}></View>
        </View>
        <View style={styles.socialBtnContainer}>
          <SocialAuthBtn image={FaceBook} />
          <SocialAuthBtn image={Google} />
        </View>
        <H1 textAlign="center" size={4} numberOfLines={2}>
          Exisiting Clients?
          <Text style={{ color: AppColors.scndry, fontWeight: "bold" }}>
            {` Login`}
          </Text>
        </H1>
        <H1
          color={AppColors.backColor}
          textAlign="center"
          size={4}
          numberOfLines={2}
        >
          Login as Guest
        </H1>
      </View>
    </ScreenWrapper>
  );
}
