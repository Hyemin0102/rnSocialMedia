import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

const style = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
  },
  userTextContainer: {
    justifyContent: "center", marginLeft: 10,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userName: {
    color: "#000000",
    FontFamily: getFontFamily("Rubik", "600"),
    fontSize: 16,
  },
  location: {
    color: "#79869F",
    fontFamily: getFontFamily("Rubik", "400"),
    fontSize: 12,
    marginTop: 5,
  },
  postImage: {
    justifyContent: "center",
    marginVertical: 20,
  },
  container: {
    marginTop: 35,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBlockColor: "#EFF2F6",
  },
});

export default style;
