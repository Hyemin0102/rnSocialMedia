import React from 'react';

import styles from './style';
import PropTypes from 'prop-types';
import { SafeAreaView, Text, Touchable, TouchableOpacity, View } from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import globalStyle from "../../assets/styles/globalStyle";

const Title = props => {

  return(
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
Title.prototype = {
  title: PropTypes.string.isRequired,
};

export default Title;
