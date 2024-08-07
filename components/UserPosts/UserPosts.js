import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import style from './style';
import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';

const UserPosts = props => {
  return (
    <View style={style.container}>
      <View style={style.user}>
        <View style={style.userContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            ImageDimensions={horizontalScale(48)} //가로배율 사용. 모든 다른 곳도 마찬가지로 통일
          />
          <View style={style.userTextContainer}>
            <Text style={style.userName}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text style={style.location}>{props.location}</Text>
            )}
          </View>
        </View>
        <View>
          <FontAwesomeIcon
            icon={faEllipsisH}
            color={'#79869F'}
            size={scaleFontSize(24)}
          />
        </View>
      </View>
      <View style={style.postImage}>
        <Image source={props.image} />
      </View>
      <View style={style.userPostStates}>
        <View style={style.userPostButton}>
          <FontAwesomeIcon icon={faHeart} color={'#79869F'} />
          <Text style={style.userPostStatesNumber}>{props.likes}</Text>
        </View>
        <View style={style.userPostButton}>
          <FontAwesomeIcon icon={faMessage} color={'#79869F'} />
          <Text style={style.userPostStatesNumber}>{props.comments}</Text>
        </View>
        <View style={style.userPostButtonEnd}>
          <FontAwesomeIcon icon={faBookmark} color={'#79869F'} />
          <Text style={style.userPostStatesNumber}>{props.bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};
UserPosts.prototype = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};

export default UserPosts;
