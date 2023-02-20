import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { Button, CounterBox, ScreenWrapper } from "~components";
import { setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import { setAppLoader } from "~redux/slices/config";
import { Logo } from "~assets";
import { H1 } from "~components/texts";
import { height } from "~utills/Dimension";
import AppColors from "~utills/AppColors";
import ScreenNames from "~routes/routes";
export default function SplashScreenFirst({ navigation, route }) {
  const dispatch = useDispatch();
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <Image source={Logo} style={styles.logoImage} resizeMode="contain" />
        <Text style={styles.title}>FOR ONLY</Text>
        <H1 textStyles={styles.priceText}>£100</H1>
        <H1 size={6}>Annual Fee</H1>
        <View style={styles.descriptionTextContainer}>
          <H1 textAlign="center" size={4} numberOfLines={2}>
            Annual Accounts and tax return made as easy as 1,2,3
          </H1>
        </View>
        <View style={styles.counterContainer}>
          <CounterBox />
          <CounterBox color="red" countNum="2" />
          <CounterBox color={AppColors.scndry} countNum="3" />
        </View>

        <Button
          title={"Sign Up"}
          onPress={() => navigation.navigate(ScreenNames.SIGNUP)}
        />
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
