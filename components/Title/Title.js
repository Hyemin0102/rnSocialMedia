import React from 'react';

import styles from './style';
import PropTypes from 'prop-types';
import { SafeAreaView, Text, View } from "react-native";

const Title = props => {

  return(
    <SafeAreaView>
        <Text style={styles.title}>{props.title}</Text>
    </SafeAreaView>
  );
};
Title.prototype = {
  title: PropTypes.string.isRequired,
};

export default Title;
