import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image } from "react-native";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import style from "./style";
import { faBookmark, faHeart, faMessage } from "@fortawesome/free-regular-svg-icons";

const UserPosts = props => {
  return (
    <View style={style.container}>
      <View
        style={style.user}>
        <View style={style.userContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            ImageDimensions={48}
          />
          <View style={style.userTextContainer}>
            <Text style={style.userName}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && <Text style={style.location}>{props.location}</Text>}
          </View>
        </View>
        <View>
          <FontAwesomeIcon icon={faEllipsisH} color={"#79869F"} size={24} />
        </View>
      </View>
      <View style={style.postImage}>
        <Image source={props.image} />
      </View>
      <View style={{ marginLeft: 10, flexDirection: "row" }}>
        <View style={{ flexDirection: "row", alignItems: "center", marginRight: 27 }}>
          <FontAwesomeIcon icon={faHeart} color={"#79869F"} />
          <Text style={{ marginLeft: 3, color: "#79869F" }}>{props.likes}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginRight: 25 }}>
          <FontAwesomeIcon icon={faMessage} color={"#79869F"} />
          <Text style={{ marginLeft: 3, color: "#79869F" }}>{props.comments}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesomeIcon icon={faBookmark} color={"#79869F"} />
          <Text style={{ marginLeft: 3, color: "#79869F" }}>{props.bookmarks}</Text>
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
