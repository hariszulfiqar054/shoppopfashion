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
  ImageBackground,
  ActivityIndicator,
} from "react-native";

import { IconAsset, Strings, UiColor } from "../../theme";
import { HeaderWithGoBackAndOption } from "../../components/AppHeader";
import styles from "./styles";
import { Actions } from "react-native-router-flux";
import { useSelector, useDispatch } from "react-redux";
import share from "react-native-share";
import { WishList } from "../../reduxprovider/actions/ActionWishList";
import { AsyncStorage } from "react-native";
import { productCat } from "../../reduxprovider/actions/ActionsProductbyCat";

const Dresses = ({ navigation, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [storeData, setStoreData] = useState([]);

  const Productscat = useSelector((state) => state.Productcat.Productsscat);
  ("Productscat", Productscat);

  ("props......", props);

  useEffect(() => {
   
    if (props != undefined) {
      ("Inside props", props.id);
      dispatch(productCat(props.id));
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, []);


  const mycustomShare = async () => {
    const shareOptions = {
      message: "this is test message",
    
    };
    try {
      const ShareResponse = await share.open(shareOptions);
      (JSON.stringify(ShareResponse));
    } catch (error) {
      ("error", error);
    }
  };
  const wishLists = async (item) => {
    const token = await AsyncStorage.getItem("token");
    const product_id = item.id;
    ("item", item);
    ("productid", product_id);
    dispatch(WishList("Bearer " + token, product_id));
  };

  ("UI product", storeData);



if (isLoading) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}

  return (
    <SafeAreaView style={styles.container}>
      {HeaderWithGoBackAndOption("", Strings.DRESSES)}
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
            placeholder="  Search Here"
            // value={search}
            // onChangeText={_filter}
          />
        </View>
      </View>
      <View style={styles.screen}>
    </View>
      <FlatList
        data={Productscat}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        style={{ marginBottom: 5 }}
        renderItem={({ item }) => (
          <View style={styles.flatListView}>
            <View style={{ flexDirection: "column" }}>
              <TouchableOpacity style={{}}>
                <ImageBackground
                  source={{ uri: item.image_link }}
                  style={styles.image1}
                  imageStyle={{ borderTopLeftRadius: 7 }}
                />
              </TouchableOpacity>
              <View style={{ marginLeft: 63, marginBottom: 5 }}>
                <Text style={{ color: "#ff1493", fontSize: 15 }}>
                  {item.price}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => wishLists(item)}>
                  <Image
                    source={require("../../assets/icons/plusIcon.png")}
                    style={{ width: 25, height: 25, marginLeft: 15 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
                  <Image
                    source={require("../../assets/icons/shopNow.png")}
                    style={{ width: 90, height: 30, marginLeft: 15 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={mycustomShare}>
                  <Image
                    source={require("../../assets/icons/shareIcon.png")}
                    style={{ width: 25, height: 25, marginLeft: 15 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Dresses;
