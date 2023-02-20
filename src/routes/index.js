import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import {
  LoginScreen,
  MainScreen,
  SignUpp,
  SplashScreenFirst,
} from "~screens/auth";
import { Loader } from "~components";
import ScreenNames from "./routes";
import { HomeScreen } from "~screens/app";
import { selectIsLoggedIn } from "~redux/slices/user";
import { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
const Stack = createNativeStackNavigator();

export default function Routes() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <NavigationContainer>
      <Loader />
      {!isLogin ? (
        <Stack.Navigator
          initialRouteName={ScreenNames.SPLASHSCREENFIRST}
          screenOptions={{ header: () => false }}
        >
          <Stack.Screen
            name={ScreenNames.SPLASHSCREENFIRST}
            component={SplashScreenFirst}
          />
          <Stack.Screen name={ScreenNames.SIGNUP} component={SignUpp} />
          <Stack.Screen name={ScreenNames.MAINSCREEN} component={MainScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName={ScreenNames.HOME}
          screenOptions={{ header: () => false }}
        >
          <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
