import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList
} from "react-native";
import { Actions } from "react-native-router-flux";
import { IconAsset, Strings, UiColor } from "../../theme";
import { HeaderWithGoBack } from "../../components/AppHeader";
// import styles from "./styles";

const Notification = () => {
  const [list, setList] = useState(
    (data = [
      {
        id: 3,
        image: "https://bootdey.com/img/Content/avatar/avatar7.png",
        name: "March SoulLaComa",
        text:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
        attachment: "https://lorempixel.com/100/100/nature/6/"
      },
      {
        id: 2,
        image: "https://bootdey.com/img/Content/avatar/avatar6.png",
        name: "John DoeLink",
        text:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
        attachment: "https://lorempixel.com/100/100/nature/5/"
      },
      {
        id: 4,
        image: "https://bootdey.com/img/Content/avatar/avatar2.png",
        name: "Finn DoRemiFaso",
        text:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
        attachment: ""
      },
      {
        id: 5,
        image: "https://bootdey.com/img/Content/avatar/avatar3.png",
        name: "Maria More More",
        text:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
        attachment: ""
      },
      {
        id: 1,
        image: "https://bootdey.com/img/Content/avatar/avatar1.png",
        name: "Frank Odalthh",
        text:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
        attachment: "https://lorempixel.com/100/100/nature/4/"
      },
      {
        id: 6,
        image: "https://bootdey.com/img/Content/avatar/avatar4.png",
        name: "Clark June Boom!",
        text:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
        attachment: ""
      },
      {
        id: 7,
        image: "https://bootdey.com/img/Content/avatar/avatar5.png",
        name: "The googler",
        text:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
        attachment: ""
      }
    ])
  );

  ("list", list);

  return (
    <SafeAreaView style={styles.container}>
      {HeaderWithGoBack("", Strings.Notification)}
      <FlatList
        style={styles.root}
        data={list}
        // extraData={useState}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        keyExtractor={item => {
          return item.id;
        }}
        renderItem={item => {
          // (item, "flatlist");
          const Notification = item.item;
          let attachment = <View />;

          let mainContentStyle;
          if (Notification.attachment) {
            mainContentStyle = styles.mainContent;
            attachment = (
              <Image
                style={styles.attachment}
                source={{ uri: Notification.attachment }}
              />
            );
          }
          return (
            <View style={styles.flatList}>
              <Image
                source={{ uri: Notification.image }}
                style={styles.avatar}
              />
              <View style={styles.content}>
                <View style={mainContentStyle}>
                  <View style={styles.text}>
                    <Text style={styles.name}>{Notification.name}</Text>
                    <Text>{Notification.text}</Text>
                  </View>
                  <Text style={styles.timeAgo}>2 hours ago</Text>
                </View>
                {attachment}
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};
export default Notification;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFFFFF"
  },
  flatList: {
    padding: 16,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: "flex-start",
    flex: 1
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  text: {
    marginBottom: 5,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0
  },
  mainContent: {
    marginRight: 60
  },
  img: {
    height: 50,
    width: 50,
    margin: 0
  },
  attachment: {
    position: "absolute",
    right: 0,
    height: 50,
    width: 50
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  timeAgo: {
    fontSize: 12,
    color: "#696969"
  },
  name: {
    fontSize: 16,
    color: "#1E90FF"
  }
});
