import { StyleSheet } from "react-native";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    width: width(40),
    paddingHorizontal: width(3),
    paddingVertical: height(0.5),
    flexDirection: "row",
    backgroundColor: AppColors.counterBox,
    borderRadius: width(0.5),
  },
  numberContainer: {
    marginVertical: height(1),
    width: height(5),
    height: height(5),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.white,
  },
  descriptionContainer: {
    width: width(19),
  },
  text: {
    fontSize: width(3),
    color: AppColors.black,
  },
  imageStyle: {
    width: width(4),
    height: height(4),
  },
});
export default styles;
