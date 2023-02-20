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
import { Email, FaceBook, Google, Lock, Logo, Phone, Success } from "~assets";
import { H1 } from "~components/texts";
import { height, width } from "~utills/Dimension";
import AppColors from "~utills/AppColors";
import { Colors } from "react-native/Libraries/NewAppScreen";
export default function MainScreen({ navigation, route }) {
  const dispatch = useDispatch();
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <H1
          textStyles={{
            marginTop: height(5),
          }}
          color={AppColors.lightGray}
          textAlign="center"
          size={3.5}
          numberOfLines={2}
        >
          You’re almost there!
        </H1>
        <View>
          <Image
            source={Success}
            style={styles.SuccessImage}
            resizeMode="contain"
          />
          <Text style={styles.title}>Signup Successfully!</Text>
          <View style={styles.descriptionTextContainer}>
            <H1
              color={AppColors.lightGray}
              textAlign="center"
              size={3.5}
              numberOfLines={2}
            >
              Congratulation! Your account has been verified successfully
            </H1>
          </View>
        </View>

        <Button
          containerStyle={{ width: width(84) }}
          title={"Let’s Explore"}
          //   onPress={() => { }
          // }
        />
      </View>
    </ScreenWrapper>
  );
}
