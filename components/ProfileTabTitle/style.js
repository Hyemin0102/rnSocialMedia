import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  title: {
    color: '#79869F',
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily('Rubik', '400'),
    padding: horizontalScale(10),
  },
  titleFocused: {
    color: '#022150',
    fontFamily: getFontFamily('Rubik', '600'),
  },
});

export default style;
