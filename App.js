import React from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Title from "./components/Title/Title";
import globalStyle from "./assets/styles/globalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import UserStory from "./components/UserStory/UserStory";

const App = () => {
  const userStories = [
    {
      name: 'hyemin',
      id: 1,
      //인터넷 주소를 가져온다면 uri 로 주소르 넣으면 되지만,
      //로컬 이미지인경우 경로 설정하기 위해 require 필요
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      name: 'gwangrae',
      id: 2,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      name: 'joeun',
      id: 3,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      name: 'hyesung',
      id: 4,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      name: 'haekyu',
      id: 5,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      name: 'changhyeon',
      id: 6,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      name: 'dongjun',
      id: 7,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      name: 'jongwon',
      id: 8,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      name: 'jihoon',
      id: 9,
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];
  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Title title={'Hi :) Let’s Explore'} />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyle.userStoryContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={userStories}
          renderItem={({ item }) => (
            <UserStory
              name={item.name}
              profileImage={item.profileImage}/>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
