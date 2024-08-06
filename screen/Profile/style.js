import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  profileImage: {
    width: horizontalScale(110),
    height: horizontalScale(110),
  },
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  profileImageContent: {
    borderWidth: 1,
    borderColor: '#0150EC',
    padding: horizontalScale(4),
    borderRadius: horizontalScale(110),
  },
  userName: {
    marginTop: verticalScale(20),
    textAlign: 'center',
    fontSize: scaleFontSize(20),
    color: '#022150',
    fontFamily: getFontFamily('Rubik', '600'),
  },
  stateAmount: {
    color: '#022150',
    fontSize: scaleFontSize(20),
    fontFamily: getFontFamily('Rubik', '600'),
    textAlign: 'center',
  },
  stateType: {
    color: '#79869F',
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily('Rubik', '400'),
    textAlign: 'center',
  },
  stateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(40),
    marginTop: verticalScale(30),
    borderBottomWidth: 1,
    borderColor: '#E9EFF1',
    paddingBottom: verticalScale(32),
  },
  stateBorder: {
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
  },
});

export default style;
