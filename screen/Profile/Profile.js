import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={{color: 'blue'}}>뒤로 가기</Text>
      </TouchableOpacity>
      <Text>프로필입니다.</Text>
    </SafeAreaView>
  );
};

export default Profile;
