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
    marginVertical: height(2),
  },

  title: {
    color: AppColors.black,
    fontWeight: "bold",
    fontSize: width(6),
  },
  priceText: {
    fontSize: width(10),
    fontWeight: "bold",
    color: AppColors.primary,
  },
  descriptionTextContainer: {
    width: width(54),
    marginVertical: height(1.5),
  },
  counterContainer: {
    height: height(35),
    justifyContent: "space-between",
    marginVertical: height(2),
  },
});
export default styles;
