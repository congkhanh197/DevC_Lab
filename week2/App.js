import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";

const feedData = [
  {
    id: 1,
    name: "CoderSchool",
    image: require("./assets/image1.png"),
    likeCount: 128,
    avatar: require("./assets/avatar.jpg")
  },
  {
    id: 2,
    name: "Whoami",
    image: require("./assets/image2.png"),
    likeCount: 20,
    avatar: require("./assets/avatar.jpg")
  },
  {
    id: 3,
    name: "CoderSchool",
    image: require("./assets/image3.png"),
    likeCount: 128,
    avatar: require("./assets/avatar.jpg")
  },
  {
    id: 4,
    name: "Whoami",
    image: require("./assets/image4.png"),
    likeCount: 20,
    avatar: require("./assets/avatar.jpg")
  },
  {
    id: 5,
    name: "CoderSchool",
    image: require("./assets/image5.png"),
    likeCount: 128,
    avatar: require("./assets/avatar.jpg")
  },
  {
    id: 6,
    name: "Whoami",
    image: require("./assets/image6.png"),
    likeCount: 20,
    avatar: require("./assets/avatar.jpg")
  },
  {
    id: 7,
    name: "CoderSchool",
    image: require("./assets/image7.png"),
    likeCount: 128,
    avatar: require("./assets/avatar.jpg")
  },
  {
    id: 8,
    name: "Whoami",
    image: require("./assets/image8.png"),
    likeCount: 20,
    avatar: require("./assets/avatar.jpg")
  },
  {
    id: 9,
    name: "CoderSchool",
    image: require("./assets/image9.png"),
    likeCount: 128,
    avatar: require("./assets/avatar.jpg")
  }
];

const viewWidth = Dimensions.get("window").width;
export default function App() {
  _getHeightImg = (img, newWidth) => {
    const imgProps = Image.resolveAssetSource(img);
    return (newWidth * imgProps.height) / imgProps.width;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.hidden} />
        <Image
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          }}
          style={styles.instagramImg}
          resizeMode="contain"
        />
        <Feather name="inbox" size={27} color="black" />
      </View>
      <ScrollView>
        {feedData.map(item => (
          <View key={item.id}>
            <View style={styles.profileWrapper}>
              <Image source={item.avatar} style={styles.profileAvatar} />
              <Text style={styles.profileName}>{item.name}</Text>
            </View>
            <Image
              source={item.image}
              style={{
                width: viewWidth,
                height: this._getHeightImg(item.image, viewWidth),
                resizeMode: "contain"
              }}
            />
            <View style={styles.reactWrapper}>
              <Feather
                name="heart"
                size={27}
                color="black"
                style={styles.icon}
                onPress={() => alert("liked")}
              />
              <Feather
                name="message-square"
                size={27}
                color="black"
                style={styles.icon}
                onPress={() => alert("comment")}
              />
              <Feather
                name="share"
                size={27}
                color="black"
                onPress={() => alert("shared")}
              />
            </View>
            <View style={[styles.reactWrapper, { alignItems: "center" }]}>
              <FontAwesome
                name="heart"
                size={27}
                color="black"
                style={styles.icon}
              />
              <Text style={styles.likeText}>{item.likeCount + " likes"}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#f3f6fa",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  hidden: { width: 27, height: 27 },
  instagramImg: {
    flex: 1,
    width: null,
    height: 40
  },
  profileWrapper: { flexDirection: "row", alignItems: "center" },
  profileAvatar: { width: 36, height: 36, borderRadius: 18, margin: 10 },
  profileName: { color: "black", fontWeight: "bold", fontSize: 16 },
  reactWrapper: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray"
  },
  icon: { marginRight: 10 },
  likeText: { color: "black", fontWeight: "bold" }
});
