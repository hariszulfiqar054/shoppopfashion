import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
  Animated,
  Linking,
} from "react-native";
import { IconAsset, Strings, UiColor } from "../../theme";
import { HeaderWithGoBackAndOption } from "../../components/AppHeader";
import styles from "./styles";
import { Actions } from "react-native-router-flux";
import { mallSearch } from "../../reduxprovider/actions/Actionsmall";
import { useSelector, useDispatch } from "react-redux";
import { mallSearchtwo } from "../../reduxprovider/actions/Actionsmall2";
import { w, h, totalSize } from "../../utils/Dimensions";

const Items = [
  {
    image1: require("../../assets/icons/fashion.jpg"),
  },
  {
    image1: require("../../assets/icons/banner6.jpg"),
  },
  {
    image1: require("../../assets/icons/fashion3.jpg"),
  },
  {
    image1: require("../../assets/icons/fashion.jpg"),
  },
  {
    image1: require("../../assets/icons/banner6.jpg"),
  },
  {
    image1: require("../../assets/icons/fashion3.jpg"),
  },
];

const Mall = () => {
  dispatch = useDispatch();
  const MallSearch = useSelector((state) => ("getmalllist", state));

  const MallData = useSelector((state) => state.mallSerch.mallSearch);
  ("Mall Data", MallData);
  const MallsData = useSelector((state) => state.mallSerch.mallSearch);
  const MallData2 = useSelector((state) => state.mallSearch2.mallSearch2);
  ('MallData2' , MallData2)


  useEffect(() => {
    mallsSearch();
    mallsSearch2();
  }, []);
  
  const mallsSearch = async () => {
    let Key = "row_one";
    dispatch(mallSearch(Key));
  };

  const mallsSearch2 = async () => {
    let Key2 = "row_two";
    dispatch(mallSearchtwo(Key2));
  };

  return (
    <SafeAreaView style={styles.container}>
      {HeaderWithGoBackAndOption("", Strings.MALL)}

      <View style={styles.searchBarInput}>
        <View>
          <Image
            style={styles.inputIcon}
            source={IconAsset.ic_search}
            resizeMode="contain"
          />
        </View>
        <View>
          <TextInput
            style={styles.inputField}
            underlineColorAndroid="transparent"
            placeholder="   Search Here"
            // value={search}
            // onChangeText={_filter}
          />
        </View>
      </View>
      <ScrollView style={{ marginBottom: 2 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", alignSelf: "center" }}>
          ROW - 1
        </Text>
        <FlatList
          data={MallData.data}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 5 }}
          renderItem={({ item }) => (
            <View style={styles.imageView}>
              <TouchableOpacity style = {{width : w(49)}}>
                <Image
                  source={{
                    uri:
                      "https://spotpopfashion.com/pinterest/images/" +
                      item.image,
                      
                  }}
                  style={styles.image1}
                />
              </TouchableOpacity>
            </View>
          )}
        />

        <Text style={{ fontSize: 18, fontWeight: "bold", alignSelf: "center" ,  marginTop: 100}}>
          Row - 2
        </Text>
        <FlatList
          data={MallData2.data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 5 }}
          renderItem={({ item }) => (
            <View style={styles.imageView}>
              <TouchableOpacity style = {{width : w(49)}}>
              <Image source={{uri: "https://spotpopfashion.com/pinterest/images/" +  item.image}} style={styles.image1} />
              </TouchableOpacity>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Mall;
