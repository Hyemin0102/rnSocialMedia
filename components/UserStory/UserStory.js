import React from 'react';
import PropTypes from 'prop-types';
import {Image, Text, View} from 'react-native';
import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {horizontalScale} from '../../assets/styles/scaling';

//사용자이름, 이미지 props 필요
const UserStory = props => {
  return (
    <View style={style.stroyContainer}>
      <UserProfileImage
        profileImage={props.profileImage}
        ImageDimensions={horizontalScale(65)}
      />
      <Text style={style.name}>{props.name}</Text>
    </View>
  );
};

UserStory.propTypes = {
  name: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
};

export default UserStory;
