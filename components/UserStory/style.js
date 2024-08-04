import {StyleSheet} from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

const style = StyleSheet.create({
  stroyContainer: {
    marginRight: 20,
  },
  name: {
    color: '#022150',
    textAlign: 'center',
    fontFamily: getFontFamily('Rubik','500'),
    fontSize: 14,
    marginTop: 8,
  },
});

export default style;
