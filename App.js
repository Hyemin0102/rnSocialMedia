import React, {useState, useEffect} from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Title from './components/Title/Title';
import globalStyle from './assets/styles/globalStyle';
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

  const userStoryPageSize = 4; //한번에 가져올 페이지 수
  //몇번째 페이지 가져왔는지
  const [userStoriesFetchedPage, setUserStoriesFetchedPage] = useState(1);
  //렌더링되는 데이터
  const [userStroiedRenderDate, setUserStroiedRenderDate] = useState([]);
  //로딩중인지 확인
  const [isLoading, setIsLoading] = useState(false);


  const pagination = (data, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize; //0, 4, 8
    const endIndex = startIndex + pageSize; //4, 8, ...
    //데이터 길이가 시작 인덱스보다 작다면 아무것도 안나옴
    if(startIndex >= data.length){
      return [];
    }

    return data.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoading(true);
    //렌더링 시  처음 데이터 가져옴
    const getInitialData = pagination(userStories, 1, userStoryPageSize);
    setUserStroiedRenderDate(getInitialData);
    setIsLoading(false);
  }, []);


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
          onEndReachedThreshold={0.5}
          extraData={userStroiedRenderDate.length}
          onEndReached={()=> {
            if(isLoading) return; //로딩중이면 실행안함
            setIsLoading(true) //로딩중아니면 로딩중 true로 먼저 하고,
            const contentToAppend = pagination( userStories, userStoriesFetchedPage + 1, userStoryPageSize);
            if(contentToAppend.length > 0){
              setUserStoriesFetchedPage(userStoriesFetchedPage + 1);
              setUserStroiedRenderDate(prev => [...prev, ...contentToAppend]);
            }
            setIsLoading(false);
          }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={userStroiedRenderDate}
          renderItem={({ item }) => (
            <UserStory
              key={'userStory' + item.id}
              name={item.name}
              profileImage={item.profileImage}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
