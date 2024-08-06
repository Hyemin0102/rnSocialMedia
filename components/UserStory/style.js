import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  stroyContainer: {
    marginRight: horizontalScale(20),
  },
  name: {
    color: '#022150',
    textAlign: 'center',
    fontFamily: getFontFamily('Rubik', '500'),
    fontSize: scaleFontSize(14),
    marginTop: verticalScale(8),
  },
});

export default style;
