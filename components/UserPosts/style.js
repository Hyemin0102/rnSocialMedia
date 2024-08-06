import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
  },
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: horizontalScale(10),
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userName: {
    color: '#000000',
    FontFamily: getFontFamily('Rubik', '600'),
    fontSize: scaleFontSize(16),
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('Rubik', '400'),
    fontSize: scaleFontSize(12),
    marginTop: verticalScale(5),
  },
  postImage: {
    justifyContent: 'center',
    marginVertical: verticalScale(20),
  },
  container: {
    marginTop: horizontalScale(35),
    borderBottomWidth: 1,
    paddingBottom: horizontalScale(20),
    borderBlockColor: '#EFF2F6',
  },
  userPostStates: {
    marginLeft: verticalScale(10),
    flexDirection: 'row',
  },
  userPostButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: verticalScale(27),
  },
  userPostButtonEnd: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPostStatesNumber: {marginLeft: verticalScale(3), color: '#79869F'},
});

export default style;
