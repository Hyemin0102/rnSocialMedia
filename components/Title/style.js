import {StyleSheet} from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontSize: 24,
    letterSpacing: 0.48,
    fontFamily: getFontFamily('Rubik', '600'),
  },
});

export default style;
