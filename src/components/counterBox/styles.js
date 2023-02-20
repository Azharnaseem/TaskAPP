import { StyleSheet } from "react-native";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    width: width(85),
    paddingHorizontal: width(6),
    paddingVertical: height(1),
    flexDirection: "row",
    backgroundColor: AppColors.counterBox,
    borderRadius: width(0.5),
  },
  numberContainer: {
    marginVertical: height(1),
    width: height(7),
    height: height(7),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.white,
  },
  descriptionContainer: {
    width: width(50),
  },
  text: {
    fontSize: width(4),
    color: AppColors.black,
  },
});
export default styles;
