import React from 'react';

import {Text} from 'react-native';

import PropTypes from 'prop-types';
import style from './style';

const ProfileTabTitle = props => {
  console.log('탭타이틀', props);
  return (
    <Text style={[style.title, props.isFocused && style.titleFocused]}>
      {props.title}
    </Text>
  );
};
ProfileTabTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default ProfileTabTitle;
