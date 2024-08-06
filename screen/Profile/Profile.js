import React from 'react';
import {SafeAreaView, ScrollView, Image, View, Text} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import {ProfileTabsNavigation} from '../../navigation/MainNavigation';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={globalStyle.flexGrow}>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image
              source={require('../../assets/images/default_profile.png')}
              style={style.profileImage}
            />
          </View>
        </View>
        <Text style={style.userName}>Hyemin Jo</Text>
        <View style={style.stateContainer}>
          <View>
            <Text style={style.stateAmount}>45</Text>
            <Text style={style.stateType}>Following</Text>
          </View>
          <View style={style.stateBorder} />
          <View>
            <Text style={style.stateAmount}>30M</Text>
            <Text style={style.stateType}>Follower</Text>
          </View>
          <View style={style.stateBorder} />
          <View>
            <Text style={style.stateAmount}>100</Text>
            <Text style={style.stateType}>Post</Text>
          </View>
        </View>
        <View style={globalStyle.flex}>
          <ProfileTabsNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
