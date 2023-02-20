import { Platform, StyleSheet } from "react-native";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";

const styles = StyleSheet.create({
  container: {
    paddingVertical: height(0),
    justifyContent: "center",
    alignItems: "flex-start",
    width: "92%",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: AppColors.white,
    width: width(83),
    height: height(6),
    borderRadius: width(0.5),
    borderWidth: width(0.1),
    borderColor: AppColors.lightGray,
  },
  inputText: {
    color: AppColors.black,
    padding: 0,
    fontSize: width(3.6),
    height: height(5),
    backgroundColor: AppColors.white,
    width: width(68),
    marginLeft: width(2),
  },
  iconStyle: {
    width: width(6),
    height: width(6),
    marginHorizontal: width(2),
  },
});
export default styles;
