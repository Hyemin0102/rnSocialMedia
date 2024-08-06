import React from 'react';
import PropTypes from 'prop-types';
import {Image, View} from 'react-native';
import style from './style';

const UserProfileImage = props => {
  return (
    <View style={[style.ImageContainer, {borderRadius: props.ImageDimensions}]}>
      <Image
        source={props.profileImage}
        style={{width: props.ImageDimensions, height: props.ImageDimensions}}
      />
    </View>
  );
};
UserProfileImage.propTypes = {
  profileImage: PropTypes.any.isRequired,
  ImageDimensions: PropTypes.number.isRequired,
};

export default UserProfileImage;
