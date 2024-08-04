import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Title from "./components/Title/Title";
import globalStyle from "./assets/styles/globalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import UserStory from "./components/UserStory/UserStory";
import UserPosts from "./components/UserPosts/UserPosts";

const App = () => {
  const userStories = [
    {
      name: "hyemin",
      id: 1,
      //인터넷 주소를 가져온다면 uri 로 주소르 넣으면 되지만,
      //로컬 이미지인경우 경로 설정하기 위해 require 필요
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      name: "gwangrae",
      id: 2,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      name: "joeun",
      id: 3,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      name: "hyesung",
      id: 4,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      name: "haekyu",
      id: 5,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      name: "changhyeon",
      id: 6,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      name: "dongjun",
      id: 7,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      name: "jongwon",
      id: 8,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      name: "jihoon",
      id: 9,
      profileImage: require("./assets/images/default_profile.png"),
    },
  ];
  const userPosts = [
    {
      firstName: "Hyemin",
      lastNAME: "Jo",
      location: "Seoul",
      likes: 12,
      comments: 24,
      bookmarks: 50,
      id: 1,
      image: require("./assets/images/default_post.png"),
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Soomin",
      lastNAME: "Jo",
      location: "Anyang",
      likes: 255,
      comments: 34,
      bookmarks: 80,
      id: 2,
      image: require("./assets/images/default_post.png"),
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "chloe",
      lastNAME: "Jo",
      location: "Home",
      likes: 1245,
      comments: 99,
      bookmarks: 20,
      id: 3,
      image: require("./assets/images/default_post.png"),
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Jenny",
      lastNAME: "Kim",
      location: "Busan",
      likes: 11,
      comments: 2,
      bookmarks: 100,
      id: 4,
      image: require("./assets/images/default_post.png"),
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Max",
      lastNAME: "Park",
      location: "Anywere",
      likes: 8,
      comments: 16,
      id: 5,
      image: require("./assets/images/default_post.png"),
      profileImage: require("./assets/images/default_profile.png"),
    },
  ];

  const userStoryPageSize = 4; //한번에 가져올 페이지 수
  //몇번째 페이지 가져왔는지
  const [userStoriesFetchedPage, setUserStoriesFetchedPage] = useState(1);
  //렌더링되는 데이터
  const [userStroiedRenderDate, setUserStroiedRenderDate] = useState([]);
  //로딩중인지 확인
  const [isLoading, setIsLoading] = useState(false);

  const userPostsPageSize = 4; //한번에 가져올 페이지 수
  const [userPostsFetchedPage, setUserPostsFetchedPage] = useState(1);
  const [userPostsdRenderDate, setUserPostsRenderDate] = useState([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);


  const pagination = (data, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize; //0, 4, 8
    const endIndex = startIndex + pageSize; //4, 8, ...
    //데이터 길이가 시작 인덱스보다 작다면 아무것도 안나옴
    if (startIndex >= data.length) {
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
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={globalStyle.header}>
                <Title title={"Hi :) Let’s Explore"} />
                <TouchableOpacity style={globalStyle.messageIcon}>
                  <FontAwesomeIcon icon={faEnvelope} size={20} color={"#898DAE"} />
                  <View style={globalStyle.messageNumberContainer}>
                    <Text style={globalStyle.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={globalStyle.userStoryContainer}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  onEndReachedThreshold={0.5}
                  extraData={userStroiedRenderDate.length}
                  onEndReached={() => {
                    if (isLoading) return; //로딩중이면 실행안함
                    setIsLoading(true); //로딩중아니면 로딩중 true로 먼저 하고,
                    const contentToAppend = pagination(userStories, userStoriesFetchedPage + 1, userStoryPageSize);
                    if (contentToAppend.length > 0) {
                      setUserStoriesFetchedPage(userStoriesFetchedPage + 1);
                      setUserStroiedRenderDate(prev => [...prev, ...contentToAppend]);
                    }
                    setIsLoading(false);
                  }}
                  horizontal={true}
                  data={userStroiedRenderDate}
                  renderItem={({ item }) => (
                    <UserStory
                      key={"userStory" + item.id}
                      name={item.name}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          showsVerticalScrollIndicator={false}
          data={userPosts} renderItem={({ item }) => (
          <View style={globalStyle.userPostContainer}>
            <UserPosts
              firstName={item.firstName}
              lastName={item.lastNAME}
              location={item.location}
              likes={item.likes}
              comments={item.comments}
              bookmarks={item.bookmarks}
              profileImage={item.profileImage}
              image={item.image}
            />
          </View>
        )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
