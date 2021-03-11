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
  ActivityIndicator,
} from "react-native";
// import Loader from "../../components/Loader";
// import { useNetInfo } from "@react-native-community/netinfo";
// import { Actions } from "react-native-router-flux";
import { IconAsset, Strings, UiColor } from "../../theme";
import { HeaderWithGoBackAndOption } from "../../components/AppHeader";
import styles from "./styles";
import { Actions } from "react-native-router-flux";
import axios from "axios";

// const Items = [
//   {
//     image1: require("../../assets/icons/fashion.jpg"),
//   },
//   {
//     image1: require("../../assets/icons/banner6.jpg"),
//   },
//   {
//     image1: require("../../assets/icons/fashion3.jpg"),
//   },
//   {
//     image1: require("../../assets/icons/fashion.jpg"),
//   },
//   {
//     image1: require("../../assets/icons/banner6.jpg"),
//   },
//   {
//     image1: require("../../assets/icons/fashion3.jpg"),
//   },
// ];
const Trends = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://spotpopfashion.com/affiliate/api/categories"
      );

      if (response.data) {
        setData(response?.data?.data);
      }
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {HeaderWithGoBackAndOption("", "Category")}

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
      <FlatList
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginHorizontal: 20,
        }}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              Actions.push("CategoryDetail", { data: item });
            }}
          >
            <View style={styles.btnWrapper}>
              <Text style={styles.txt}>{item?.cat_name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item?.id?.toString()}
      />
    </SafeAreaView>
  );
};

export default Trends;
