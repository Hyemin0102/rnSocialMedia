import React from 'react';
import style from './style';
import {Image, ScrollView, View} from 'react-native';

const ProfileTabContents = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.profileTabContainer}>
      <View style={style.profileTabContent}>
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={style.image}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabContents;
