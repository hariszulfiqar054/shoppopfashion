import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground
} from "react-native";
import { Actions } from "react-native-router-flux";
import { IconAsset, Strings, UiColor } from "../../theme";
import { HeaderWithGoBackAndOption } from "../../components/AppHeader";
import styles from "./styles";
const Search = () => {
  const [arry, setarray] = useState("");
  const item = [
    {
      name: "TURQUOISE",
      hotSpot:
        "https://teetalkies.com/wp-content/uploads/2018/02/girls-black.png"
    },
    {
      name: "EMERALD",
      hotSpot:
        "https://teetalkies.com/wp-content/uploads/2018/02/girls-black.png"
    },
    {
      name: "SUN FLOWER",
      hotSpot:
        "https://teetalkies.com/wp-content/uploads/2018/02/girls-black.png"
    }
  ];
  // searchFilterFunction = (text) => {
  //   const newData = this.arrayholder.filter((item) => {
  //     const itemData = `${item.name.title.toUpperCase()}
  //   ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;

  //     const textData = text.toUpperCase();

  //     return itemData.indexOf(textData) > -1;
  //   });

  //   this.setState({ data: newData });
  // };
  return (
    <View style={styles.container}>
      {HeaderWithGoBackAndOption("", Strings.APP_NAME)}
      {/************
       * CAMPAIGNS
       * ************/}
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInputStyle}
          // onChangeText={(text) => this.SearchFilterFunction(text)}
          // value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
      </View>
      <ScrollView>
        <Text style={styles.hotspotTitle}>{Strings.CAMPAIGNS}</Text>
        <View style={{ height: 150 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={item}
            renderItem={({ item }) => (
              <View style={{ justifyContent: "space-between" }}>
                <ImageBackground
                  source={{ uri: item.hotSpot }}
                  style={styles.imageThumbnail}
                ></ImageBackground>
                <Text style={styles.itemText}>{item.name}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Search;
