import { StyleSheet } from "react-native";
import { height, width } from "~utills/Dimension";
import AppColors from "../../../utills/AppColors";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    // justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    // backgroundColor: "red",
    width: width(20),
    height: height(8),
    marginVertical: height(5),
  },

  title: {
    color: AppColors.black,
    fontWeight: "bold",
    fontSize: width(6),
  },
  imputsContainer: {
    height: height(35),
    justifyContent: "space-between",
  },

  lineTextContainer: {
    width: width(65),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: height(1),
  },
  line: {
    borderWidth: width(0.06),
    width: width(20),
    backgroundColor: AppColors.lightGray,
  },
  descriptionTextContainer: {
    marginVertical: height(1),
    marginBottom: height(4),
  },
  socialBtnContainer: {
    width: width(85),
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: height(1),
    // backgroundColor: "red",
  },
});
export default styles;
