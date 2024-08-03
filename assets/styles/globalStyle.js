import {StyleSheet} from "react-native";
import { getFontFamily } from "../fonts/helper";

const globalStyle = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: 14,
    backgroundColor: '#F9FAFB',
    borderRadius: 100,
    position: 'relative',
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 10,
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 10,
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: 6,
    fontFamily: getFontFamily('Rubik', '600')
  },
});

export default globalStyle;