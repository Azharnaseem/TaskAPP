import { StyleSheet } from "react-native";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.primary,
    width: width(75),
    alignSelf: "center",
    paddingVertical: height(2.5),
    marginVertical: height(2),
  },
  text: {
    color: AppColors.white,
    fontSize: width(3.8),
    fontWeight: "bold",
  },
});
export default styles;
