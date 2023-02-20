import { StyleSheet } from "react-native";
import { height, width } from "~utills/Dimension";
import AppColors from "../../../utills/AppColors";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: height(2),
  },
  SuccessImage: {
    alignSelf: "center",
    width: width(40),
    height: height(15),
    marginVertical: height(2),
  },

  title: {
    color: AppColors.black,
    fontWeight: "bold",
    fontSize: width(6),
  },

  descriptionTextContainer: {
    width: width(65),
    marginVertical: height(1),
    marginBottom: height(4),
  },
});
export default styles;
